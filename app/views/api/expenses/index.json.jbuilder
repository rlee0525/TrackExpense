@expenses.each do |expense|
  json.set! expense.id do
    json.extract! expense, :id, :datetime, :amount, :description, :user_id
  end
end
