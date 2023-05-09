const Vehicle = require('./models/Vehicle');

const vehiclesData = [
    {
        firstName: "sujit",
        lastName: "banne",
        type: "motorcycle",
        model: "Honda",
        wheels: 2,
        isBooked: false,
        startDate: new Date("2023-05-11"),
        endDate: new Date("2023-05-18")
    }
];

// insert the seed data into the database

async function seedDatabase() {
    await Vehicle.insertMany(vehiclesData);
}

seedDatabase().then(() => {
    console.log('Database seeded successfully');
}).catch((err) => {
    console.error(err);
})