use("app")

db.app.drop()
db.createCollection("StoreInventory")

// db.StoreInventory.insertOne({
//     name: "Macbook",
//     quantity: 2,
//     price: 999.99
// })

db.StoreInventory.insertMany([
{
    name: "Cookies",
    quantity: 7,
    price: 0.99
},
{
    name: "Macbook",
    quantity: 2,
    price: 999.99
},
{
    name: "Kraves Cereal",
    quantity: 14,
    price: 11.49
},
{
    name: "Crate of Eggs",
    quantity: 2,
    price: 21.22
}
])
