ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'capybara/rails'
require 'date'

Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

RSpec.configure do |config|
  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.use_transactional_fixtures = true
  config.infer_base_class_for_anonymous_controllers = false
  config.backtrace_exclusion_patterns = [/\.rvm/, /\.rbenv/]
end

def create_ray_with_expense
  let(:ray) { User.create!(username: 'ray_lee', password: 'password', admin: true) }
  let(:ray_expense) { ray.expenses.create!(datetime: DateTime.new(2017, 3, 1, 17, 35), amount: 20.99, description: "Food!") }
end

def sign_up(username)
  visit root_path
  fill_in "username", with: username
  fill_in "password", with: 'password'
  click_button 'sign-up-log-in-button'
end

def sign_up_as_ginger_baker
  sign_up("ginger_baker")
end

def sign_in(username)
  visit root_path
  click_button 'status-toggle'
  fill_in "username", with: username
  fill_in "password", with: 'password'
  click_button 'sign-up-log-in-button'
end

def make_expense(date = nil, time = nil, amount = nil, description = nil)
  date ||= Date.now
  time ||= Time.now
  amount ||= 150.45
  description ||= "Just for testing purposes!"

  visit expenses_path
  click_button "add-expense"
  fill_in 'date', with: date
  fill_in 'time', with: time
  fill_in 'amount', with: amount
  fill_in 'description', with: description
  click_button "expense-form-button"
end
