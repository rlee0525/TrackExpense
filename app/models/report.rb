class Report < ApplicationRecord
  validates :user, :amount, :start_time, :end_time, presence: true

  belongs_to :user
end
