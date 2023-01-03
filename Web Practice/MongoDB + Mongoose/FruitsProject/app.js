const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name specified!"],
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  reviews: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 8,
  reviews: "Awesome!",
});

// apple.save();

// const strawberry = new Fruit({
//   name: "Strawberry",
//   rating: 9,
//   reviews: "Best",
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 7,
//   reviews: "Very Good",
// });

// const mango = new Fruit({
//   name: "Mango",
//   rating: 8,
//   reviews: "Very very good",
// });

// Fruit.insertMany([strawberry, banana, mango], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all data");
//   }
// });

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    setTimeout(() => {
      mongoose.connection.close();
    }, 1000);

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Person = new mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Moaz",
//   age: 20,
// });

// person.save();

// -------------------------------------------------------------------------------------------------

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/fruitsDB");

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   reviews: String,
// });

// // fruitSchema.methods.speak = function () {
// //   const greet = this.name
// //     ? "Hello I'm " + this.name
// //     : "Sorry I don't have a name";
// //   console.log(greet);
// // };

// const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit({
//   name: "Apple",
//   rating: 8,
//   reviews: "Awesome!",
// });

// // apple.save();
// // apple.speak();
