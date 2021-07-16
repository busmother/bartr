# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1=User.create(username: "busmother")
user2=User.create(username: "Ian")
user3=User.create(username: "Beelzebub")
order1=Order.create(user_id: 1, recipient: "JoJo", street_address: "1234 South Lane", city: "Springfield", state: "IL", zip_code: "62629", open: false)
order2=Order.create(user_id: 1, recipient: "Anthony", street_address: "321 West Avenue", city: "Marin County", state: "CA", zip_code: "94947", open: true)
order3=Order.create(user_id: 2, recipient: "Greg", street_address: "728 Foxdale Road", city: "Wilmington", state: "DE", zip_code: "19803", open: false)
order4=Order.create(user_id: 2, recipient: "Greg", street_address: "728 Foxdale Road", city: "Wilmington", state: "DE", zip_code: "19803", open: true)
product1=Product.create(name: "Insulin", description: "The good stuff", image: "https://image.flaticon.com/icons/png/512/1914/1914515.png", price: "300")
product2=Product.create(name: "Monkey's Paw", description: "Three more things, what could go wrong?", image: "https://www.pngitem.com/pimgs/m/119-1194045_monkey-paw-png-transparent-png.png", price: "200")
product3=Product.create(name: "Jackal Headpiece", description: "Heavier than it looks", image: "https://www.bbc.co.uk/staticarchive/db67ff5128e7a2aef0cfd9c5cf1a33c9c6b5be9d", price: "55")
product4=Product.create(name: "Ring of Osiris", description: "Perfect fit", image: "https://cdn3.volusion.com/pbwzh.ryskz/v/vspfiles/photos/0168-2.jpg", price: "120")
product5=Product.create(name: "Knife of Cain", description: "Ideal for a cheese plate", image: "https://writersforensicsblog.files.wordpress.com/2012/03/obsidian-knife.jpg?w=256", price: "85")
product6=Product.create(name: "Crystal Skull", description: "Conversation starter", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Crystal_skull_in_Mus%C3%A9e_du_quai_Branly%2C_Paris.jpg/220px-Crystal_skull_in_Mus%C3%A9e_du_quai_Branly%2C_Paris.jpg", price: "110")
product7=Product.create(name: "Gui Jian Scroll", description: "Quick read", image: "http://emuseum.nich.go.jp/img/content/100979001001/1/d3/0_0.jpeg", price: "50")
product8=Product.create(name: "Mirror of Dreams", description: "Good as new", image: "https://secure.img1-fg.wfcdn.com/im/58597308/resize-h800%5Ecompr-r85/4317/43175942/Ingalls+Glam+Accent+Mirror.jpg", price: "45")
product9=Product.create(name: "Blackberry", description: "Vintage", image: "https://i.ebayimg.com/images/g/G6YAAOSwuvBgUsO6/s-l300.png", price: "10")
item=Item.create(order_id: 1, product_id: 2)
item=Item.create(order_id: 1, product_id: 5)
item=Item.create(order_id: 1, product_id: 8)
item=Item.create(order_id: 2, product_id: 1)
item=Item.create(order_id: 2, product_id: 3)
item=Item.create(order_id: 2, product_id: 4)
item=Item.create(order_id: 3, product_id: 6)
item=Item.create(order_id: 3, product_id: 7)