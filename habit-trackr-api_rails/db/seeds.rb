# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User seeds
gavin = User.create(first_name: "Gavin", last_name: "O\'Connor", username: "gavinoconnor", email: "gavin@gavin.com", password: "abc123")
pamyk = User.create(first_name: "Pamyk", last_name: "Charyyeva", username: "pamykc", email: "pamyk@pamyk.com", password: "abc123")

# Habit seeds
guitar = Habit.create(name: "Guitar", category: "Music")
piano = Habit.create(name: "Piano", category: "Music")
singing = Habit.create(name: "Singing", category: "Music")
dancing = Habit.create(name: "Dancing", category: "Music")
spanish = Habit.create(name: "Spanish", category: "Language")
french = Habit.create(name: "French", category: "Language")
german = Habit.create(name: "German", category: "Language")
russian = Habit.create(name: "Russian", category: "Language")
javascript = Habit.create(name: "Javascript", category: "Coding")
ruby = Habit.create(name: "Ruby", category: "Coding")
python = Habit.create(name: "Python", category: "Coding")
react = Habit.create(name: "ReactJS", category: "Coding")
rubyonrails = Habit.create(name: "Ruby on Rails", category: "Coding")
eating = Habit.create(name: "Eat Healthy", category: "Health")
workout = Habit.create(name: "Work Out", category: "Health")
meditate = Habit.create(name: "Meditate", category: "Health")
sleep = Habit.create(name: "Sleep", category: "Health")
