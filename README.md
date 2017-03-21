# TrackExpense

Better understand your spending patterns by inputing expenses and generating reports!

[TrackExpense][live]

[live]: http://www.trackexpense.raymondlee.io/

![Loop auth](./app/assets/images/1-auth.png)

![Loop edit](./app/assets/images/3-edit.png)

![Loop custom](./app/assets/images/6-custom.png)


## Unit / Integration Tests (Specs)

```
bundle exec rspec spec/models/user_spec.rb
bundle exec rspec spec/models/link_spec.rb
bundle exec rspec spec/models/comment_spec.rb
bundle exec rspec spec/controllers/application_controller_spec.rb
bundle exec rspec spec/controllers/users_controller_spec.rb
bundle exec rspec spec/controllers/sessions_controller_spec.rb
bundle exec rspec spec/controllers/links_controller_spec.rb
bundle exec rspec spec/controllers/comments_controller_spec.rb
bundle exec rspec spec/features/auth_spec.rb
bundle exec rspec spec/features/links_spec.rb
bundle exec rspec spec/features/comments_spec.rb
```
