class Api::ExpensesController < ApplicationController
  def index
    @expenses = current_user.expenses
  end

  def create
    @expense = Expense.new(expense_params)
    @expense.user_id = current_user.id

    if @expense.save
      render "api/expenses/show"
    else
      render json: @exoense.errors.full_messages, status: 422
    end
  end

  def show
    @expense = current_user.expenses.find(params[:id])
  end

  def edit
    @expense = current_user.expenses.find(params[:id])
  end

  def update
    @expense = current_user.expenses.find(params[:id])

    if @expense.update(expense_params)
      render "api/expenses/show"
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def destroy
    @expense = current_user.expenses.find(params[:id])
    @expense.destroy

    render json: @expense
  end

  private

  def expense_params
    params.require(:expense).permit(:user_id, :datetime, :amount, :description)
  end
end
