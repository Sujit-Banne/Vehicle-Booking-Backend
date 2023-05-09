const { Vehicle } = require('./models/vehicle');

const vehicleData = [
    { name: 'Hatchback', type: 'car', wheels: 4 },
    { name: 'Sedan', type: 'car', wheels: 4 },
    { name: 'SUV', type: 'car', wheels: 4 },
    { name: 'Cruiser', type: 'bike', wheels: 2 },
    { name: 'Sports', type: 'bike', wheels: 2 },
];

async function seedDatabase() {
    await Vehicle.deleteMany({});
    await Vehicle.insertMany(vehicleData);
}

seedDatabase().then(() => {
    console.log('Database seeded successfully');
    process.exit();
}).catch((err) => {
    console.error(err);
});
