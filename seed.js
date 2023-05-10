const VehicleSchema = require('./models/vehicle')

// Seed an initial set of values into the db
const initialVehicles = [
    {
        firstName: 'John',
        lastName: 'Doe',
        type: 'hatchback',
        model: 'Honda Fit',
        wheels: 4,
        startDate: new Date('2023-05-12'),
        endDate: new Date('2023-05-15'),
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        type: 'suv',
        model: 'Toyota RAV4',
        wheels: 4,
        startDate: new Date('2023-05-13'),
        endDate: new Date('2023-05-17'),
    },
    {
        firstName: 'Bob',
        lastName: 'Smith',
        type: 'sedan',
        model: 'Nissan Sentra',
        wheels: 4,
        startDate: new Date('2023-05-19'),
        endDate: new Date('2023-05-22'),
    },
    {
        firstName: 'Alice',
        lastName: 'Jones',
        type: 'cruiser',
        model: 'Harley Davidson Softail',
        wheels: 2,
        startDate: new Date('2023-05-14'),
        endDate: new Date('2023-05-18'),
    },
    {
        firstName: 'banne',
        lastName: 'sujit',
        type: 'sports',
        model: 'R15',
        wheels: 2,
        startDate: new Date('2023-05-14'),
        endDate: new Date('2023-05-18'),
    },
    {
        firstName: "sujit",
        lastName: "banne",
        type: "hatchback",
        model: "Honda Civic",
        wheels: 4,
        startDate: "2023-07-12",
        endDate: "2023-07-20"
    }
];
const seedDatabase = async () => {
    try {
        // await VehicleSchema.deleteMany(); //if new seed data is added un-comment it
        const existingDocuments = await VehicleSchema.countDocuments();
        if (existingDocuments === 0) {
            await VehicleSchema.insertMany(initialVehicles);
            console.log('Seeded initial data');
        } else {
            console.log('Database already seeded');
        }
    } catch (error) {
        console.log(error);
    }
};
seedDatabase();