const db = require('./models');

let toDoList = [
	{
		id: 1,
		task: "Grocery shopping",
		description: "Buy milk, eggs, and bread"
	},
	{
		id: 2,
		task: "Gas Station",
		description: "Fill up gas tank"
	},
	{
		id: 3,
		task: "Lunch with mom",
		description: "Taco truck"
	},
	{
		id: 4,
		task: "Dinner with girlfriend",
		description: "Seafood restaurant"
	},
	{
		id: 5,
		task: "Car Wash",
		description: "Self serving car wash"
	},
	{
		id: 6,
		task: "Pay Bills",
		description: "Rent and car payment due"
	},
	{
		id: 7,
		task: "Prep meals",
		description: "1 week of meals"
	},
	{
		id: 8,
		task: "Walk the dog",
		description: "Cheesman Park 30 mins"
	},
	{
		id: 9,
		task: "Workout",
		description: "Movement Climbing Gym"
	},
	{
		id: 10,
		task: "Snowboarding",
		description: "Keystone Resort"
	},

];


//remove all records that match {} -- which means remove ALL records
db.Todo.remove({}, function(err, list){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all lists');

    // create new records based on the array toDoList above
    db.Todo.create(toDoList, function(err, list){
      if (err) { return console.log('err', err); }
      console.log("created", list.length, "list");
      process.exit();
    });
  }
});

// module.exports = toDoList;