require 'rails_helper'
begin
  Expense
rescue
  Expense = nil
end

RSpec.describe Expense, :type => :model do

  it { should validate_presence_of(:datetime) }
  it { should validate_presence_of(:amount) }
  it { should validate_presence_of(:user) }
  it { should belong_to(:user) }
end
