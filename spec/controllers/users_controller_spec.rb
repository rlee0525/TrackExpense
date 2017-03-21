require 'rails_helper'

begin
  Api::UsersController
rescue
  Api::UsersController = nil
end

RSpec.describe Api::UsersController, :type => :controller do
  describe "GET #new" do
    it "renders the new users template" do
      get :new
      expect(response).to render_template("new")
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's username and password" do
        post :create, user: {username: "ray_lee", password: "", admin: true}
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end

      it "validates that the password is at least 8 characters long" do
        post :create, user: {username: "ray_lee", password: "short", admin: true}
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end
    end

    context "with valid params" do
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
end
