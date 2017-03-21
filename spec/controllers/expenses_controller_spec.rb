require 'rails_helper'

begin
  Api::ExpensesController
rescue
  Api::ExpensesController = nil
end

RSpec.describe Api::ExpensesController, :type => :controller do
  let(:raymond) { User.create!(username: 'raymond_lee', password: 'password', admin: true) }

  before(:each) do
    allow_message_expectations_on_nil
    request.env["HTTP_ACCEPT"] = 'application/json'
  end

  describe "POST #create" do
    let(:raymond_lee) { User.create!(username: "raymond_lee", password: "password", admin: true) }

    context "when logged out" do
      before do
        allow(controller).to receive(:current_user) { nil }
      end

      it "status 401 error" do
        post :create, expense: {}
        expect(response.status).to eq 401
      end
    end

    context "when logged in" do
      before do
        allow(controller).to receive(:current_user) { raymond_lee }
      end
    end
  end

  describe "GET #index" do
    context "when logged in" do

      before do
        allow(controller).to receive(:current_user) { raymond }
      end

      it "renders the new expenses page" do
        get :index, expense: {}
        expect(response).to render_template("api/expenses/index")
      end
    end

    context "when logged out" do
      before do
        allow(controller).to receive(:current_user) { nil }
      end

      it "status 401 error" do
        get :index
        expect(response.status).to eq 401
      end
    end
  end

  describe "PATCH #update" do

    create_ray_with_expense

    context "when logged in as a different user" do

      before do
        allow(controller).to receive(:current_user) { raymond }
      end

      it "should not allow users to update another users expenses" do
        begin
          patch :update, id: ray_expense.id, expense: {amount: 20.99}
        rescue ActiveRecord::RecordNotFound
        end

        updated_expense = Expense.find(ray_expense.id)
        expect(updated_expense.amount).to eq(20.99)
      end
    end

    context "when logged in as the correct user" do

      before do
        allow(controller).to receive(:current_user) { ray }
      end

      it "should not allow users to update another users expenses" do
        patch :update, id: ray_expense.id, expense: {amount: 30.23}

        updated_expense = Expense.find(ray_expense.id)
        expect(updated_expense.amount).to eq(30.23)
      end
    end
  end
end
