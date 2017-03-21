require 'rails_helper'

begin
  Api::SessionsController
rescue
  Api::SessionsController = nil
end

RSpec.describe Api::SessionsController, :type => :controller do
  let!(:user) { User.create({username: "ray_lee", password: "password", admin: true}) }

  before(:each) do
    request.env["HTTP_ACCEPT"] = 'application/json'
  end

  describe "POST #create" do
    context "with invalid credentials" do
      it "401 error with an non-existent user" do
        post :create, user: {username: "jill_lee", password: "password", admin: true}
        expect(response.status).to eq 401
      end

      it "401 error on bad password" do
        post :create, user: {username: "ray_lee", password: "notmypassword", admin: true}
        expect(response.status).to eq 401
      end
    end

    context "with valid credentials" do
      it "logs in user on success" do
        post :create, user: {username: "ray_lee", password: "password", admin: true}
        expect(response.status).to eq 200
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
