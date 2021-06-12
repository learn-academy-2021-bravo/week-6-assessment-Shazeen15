# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

Your answer: Sightings would have the foreign key. foreign key key is animal_id. I would generate a migration to add collumn to the Sightings model.

Researched answer:First do a $ migration: rails generate migration addCollumnToSighting, add_column :sightings, :animal_id, :integer, rails db:migrate

2. Which RESTful routes must always be passed params? Why?

Your answer: any routes that need to look up a specific item in the data

Researched answer: RESTful routes with the show, edit, update, and destroy methods.

3. Name three rails generator commands. What is created by each?

Your answer: controller: creates a controller for the model, model: creates a model, resource: creates everything you would need to get your project started(model, controllers, views, rspec files)

Researched answer: model: Using the model generator does the least amount of work for you, but also creates the fewest number of files, etc. giving you more control over what is actually written, resource: creates a migration file, model, controller, sets up all the routes and the tests, and scaffold: does everything for you even set up the methods.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET" /students => index

method="GET" /students/2 => show

method="GET" /students/new => new

method="GET" /students/edit/2 => edit

method="POST" /students/ => create

method="PATCH" /students/2 => update

method="DELETE" /students/2 => destroy

5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.
1. as a user i can see all my todo on the dashbaord.
1. as a user i can see more details about a specific todo
1. as a user i can edit a specific todo
1. as a user i can delete a specific to do.
1. as a user i can cross out completed todos.
1. as a user i can delete all of the completed todos
1. as a user i can see todos only for today
1. as a user i can see todos for the week
<!-- 9. as a user -->
