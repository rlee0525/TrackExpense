User.destroy_all
Expense.destroy_all
Report.destroy_all

uid1 = User.create!(username: "RaymondLee", password: "password", admin: true)
uid2 = User.create!(username: "GuestUser", password: "password", admin: false)
uid3 = User.create!(username: "AnotherGuest", password: "password", admin: false)

e1d1 = Expense.create!(datetime: DateTime.new(2017, 3, 1, 17, 35), amount: 20.99, description: "Food!", user: uid1)
e1d2 = Expense.create!(datetime: DateTime.new(2017, 3, 1, 13, 27, 11), amount: 0.99, description: "Clothes!", user: uid1)
e1d3 = Expense.create!(datetime: DateTime.new(2017, 3, 3, 11, 30, 01), amount: 10.10, description: "Bar!", user: uid1)
e1d4 = Expense.create!(datetime: DateTime.new(2017, 3, 8, 9, 24, 12), amount: 1.99, description: "Meetup!", user: uid1)
e1d5 = Expense.create!(datetime: DateTime.new(2017, 3, 10, 23, 39, 33), amount: 50.69, description: "Dinner!", user: uid1)
e1d6 = Expense.create!(datetime: DateTime.new(2017, 3, 11, 5, 00, 05), amount: 340.90, description: "I don't remember!", user: uid1)
e1d7 = Expense.create!(datetime: DateTime.new(2017, 3, 13, 7, 11, 52), amount: 210.09, description: "Something delicious!", user: uid1)
e1d8 = Expense.create!(datetime: DateTime.new(2017, 3, 14, 1, 11, 42), amount: 220.98, description: "Travel!", user: uid1)
e1d9 = Expense.create!(datetime: DateTime.new(2017, 3, 15, 11, 01, 24), amount: 20.79, description: "Purchase something!", user: uid1)
e1d10 = Expense.create!(datetime: DateTime.new(2017, 3, 18, 14, 31, 12), amount: 10.50, description: "Food again!", user: uid1)

e1d11 = Expense.create!(datetime: DateTime.new(2017, 3, 1, 21, 31, 12), amount: 120.99, description: "Fooooood!", user: uid2)
e1d12 = Expense.create!(datetime: DateTime.new(2017, 3, 11, 22, 11, 12), amount: 230.82, description: "Delicious foooood!", user: uid2)
e1d13 = Expense.create!(datetime: DateTime.new(2017, 3, 12, 4, 26, 11), amount: 260.89, description: "Very expensive beer!", user: uid2)
e1d14 = Expense.create!(datetime: DateTime.new(2017, 2, 20, 1, 53, 16), amount: 70.55, description: "Wine!", user: uid2)
e1d15 = Expense.create!(datetime: DateTime.new(2017, 2, 21, 3, 12, 42), amount: 0.99, description: "Gum!", user: uid2)
e1d16 = Expense.create!(datetime: DateTime.new(2017, 3, 16, 6, 11, 32), amount: 770.09, description: "Travel!!!!", user: uid2)
e1d17 = Expense.create!(datetime: DateTime.new(2017, 3, 17, 19, 40, 18), amount: 88.19, description: "Food?!", user: uid2)
e1d18 = Expense.create!(datetime: DateTime.new(2017, 1, 1, 20, 31, 23), amount: 2.91, description: "Candy!", user: uid2)
e1d19 = Expense.create!(datetime: DateTime.new(2017, 4, 1, 12, 29, 42), amount: 34.99, description: "Clothes!", user: uid2)
e1d20 = Expense.create!(datetime: DateTime.new(2017, 2, 16, 2, 01, 11), amount: 25.29, description: "Something not too expensive!", user: uid2)

e1d21 = Expense.create!(datetime: DateTime.new(2017, 5, 1, 16, 31, 29), amount: 90.19, description: "Food?!", user: uid3)
e1d22 = Expense.create!(datetime: DateTime.new(2017, 3, 1, 18, 44, 26), amount: 120.29, description: "Fooooood!", user: uid3)
e1d23 = Expense.create!(datetime: DateTime.new(2017, 3, 2, 23, 21, 56), amount: 221.45, description: "MORE Fooooood!", user: uid3)
e1d24 = Expense.create!(datetime: DateTime.new(2017, 3, 3, 4, 37, 11), amount: 333.33, description: "This is just an example!", user: uid3)
e1d25 = Expense.create!(datetime: DateTime.new(2017, 3, 7, 7, 44, 55), amount: 55.00, description: "Running out of ideas!", user: uid3)
e1d26 = Expense.create!(datetime: DateTime.new(2017, 3, 10, 1, 01, 45), amount: 77.11, description: "Travel!", user: uid3)
e1d27 = Expense.create!(datetime: DateTime.new(2017, 3, 11, 12, 06, 23), amount: 50.05, description: "Bar!", user: uid3)
e1d28 = Expense.create!(datetime: DateTime.new(2017, 3, 13, 16, 19, 52), amount: 230.00, description: "Clothes!", user: uid3)
e1d29 = Expense.create!(datetime: DateTime.new(2017, 3, 14, 21, 24, 10), amount: 10.20, description: "Food!!", user: uid3)
