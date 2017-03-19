@users.each do |user|
  json.set! user.id do
    json.extract! user, :username, :expenses
  end
end
