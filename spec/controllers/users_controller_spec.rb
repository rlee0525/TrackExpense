require 'rails_helper'

begin
  Api::UsersController
rescue
  Api::UsersController = nil
end

RSpec.describe Api::UsersController, :type => :controller do
  before(:each) do
    allow_message_expectations_on_nil
    request.env["HTTP_ACCEPT"] = 'application/json'
  end

  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's username and password" do
        post :create, user: {username: "ray_lee", password: "", admin: true}
        expect(response.status).to eq 422
      end

      it "validates that the password is at least 8 characters long" do
        post :create, user: {username: "ray_lee", password: "short", admin: true}
        expect(response.status).to eq 422
      end
    end

    context "with valid params" do
      it "signs up user on success" do
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
end
