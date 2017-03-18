class Expense < ApplicationRecord
  validates :user, :datetime, :amount, presence: true

  belongs_to :user
end
