require 'rails_helper'

feature "Sign up" do
  before :each do
    visit root_path
  end

  it "has a user sign up page" do
    expect(page).to have_button "Sign Up"
  end

  it "takes a username and password" do
    expect(page).to have_content "Username"
    expect(page).to have_content "Password"
  end

  it "redirects to expenses index on success" do
    sign_up_as_ginger_baker

    expect(current_path).to eq(expenses_path)
  end
end
