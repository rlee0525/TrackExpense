require 'rails_helper'

begin
  Api::SessionsController
rescue
  Api::SessionsController = nil
end

RSpec.describe Api::SessionsController, :type => :controller do
  let!(:user) { User.create({username: "ray_lee", password: "password", admin: true}) }

  describe "GET #new" do
    it "renders the new session template" do
      get :new
      expect(response).to render_template("new")
    end
  end

  describe "POST #create" do
    context "with invalid credentials" do
      it "returns to sign in with an non-existent user" do
        post :create, user: {username: "jill_lee", password: "password", admin: true}
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end

      it "returns to sign in on bad password" do
        post :create, user: {username: "ray_lee", password: "notmypassword", admin: true}
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end
    end

    context "with valid credentials" do
      it "redirects user to expenses index on success" do
        post :create, user: {username: "ray_lee", password: "password", admin: true}
        expect(response).to redirect_to(expenses_url)
      end

      it "logs in the user" do
        post :create, user: {username: "ray_lee", password: "password", admin: true}
        user = User.find_by_username("ray_lee")

        expect(session[:session_token]).to eq(user.session_token)
      end
    end
  end

  describe "DELETE #destroy" do
    before(:each) do
      post :create, user: {username: "ray_lee", password: "password", admin: true}
      @session_token = User.find_by_username("ray_lee").session_token
    end

    it "logs out the current user" do
      delete :destroy
      expect(session[:session_token]).to be_nil

      ray = User.find_by_username("ray_lee")
      expect(ray.session_token).not_to eq(@session_token)
    end
  end
end
