@expenses.each do |expense|
  json.set! expense.id do
    json.extract! expense, :datetime, :amount, :description, :user_id
  end
end
