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
guitar = Habit.create(name: "Guitar", category: "Music", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
piano = Habit.create(name: "Piano", category: "Music", img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
singing = Habit.create(name: "Singing", category: "Music", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
dancing = Habit.create(name: "Dancing", category: "Music", img: "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
spanish = Habit.create(name: "Spanish", category: "Language", img: "https://images.unsplash.com/photo-1489945052260-4f21c52268b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
french = Habit.create(name: "French", category: "Language", img: "https://images.unsplash.com/photo-1549416878-ceda3534842b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
german = Habit.create(name: "German", category: "Language", img: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
russian = Habit.create(name: "Russian", category: "Language", img: "https://images.unsplash.com/photo-1544885353-f3e1da5bc721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
javascript = Habit.create(name: "Javascript", category: "Coding", img: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
ruby = Habit.create(name: "Ruby", category: "Coding", img: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
python = Habit.create(name: "Python", category: "Coding", img: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
react = Habit.create(name: "ReactJS", category: "Coding", img: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
rubyonrails = Habit.create(name: "Ruby on Rails", category: "Coding", img: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
eating = Habit.create(name: "Eat Healthy", category: "Health", img: "https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
workout = Habit.create(name: "Work Out", category: "Health", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
meditate = Habit.create(name: "Meditate", category: "Health", img: "https://images.unsplash.com/photo-1528319725582-ddc096101511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
sleep = Habit.create(name: "Sleep", category: "Health", img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
