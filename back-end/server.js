'use strict'

const Hapi = require('hapi');

const Monk = require('monk');

const server = Hapi.server({ 
    host: 'localhost', 
    port: 3001
});




const getCarsCollection = async () => {
    const connectionString = 'mongodb://admin:password@ds115768.mlab.com:15768/dealership'
    const db = Monk(connectionString)
    const cars = await db.get('cars')
    return cars
}

server.route({
    method: 'GET',
    path:'/', 
    handler: (request, h) => {
        return { message: 'hello world' };
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-width']
        }
    }
});


server.route({
    method: 'GET',
    path:'/planes', 
    handler: (request, h) => {
        return { planes: [
            {
                name: 'plane1',
                size: '1'
            },
            {
                name: 'plane2',
                size: '10'
            },
            {
                name: 'plane3',
                size: '100'
            }

        ] };
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-width']
        }
    }
});

server.route({
    method: 'GET',
    path:'/cars', 
    handler: async (request, h) => {
        const carsCollection = await getCarsCollection()
        const cars = await carsCollection.find()
        return { cars }
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-width']
        }
    }
});

server.route({
    method: 'POST',
    path:'/cars',
    handler: async (request, h) => {
        const cars = await getCarsCollection()
        cars.insert(request.payload)
        console.log(request.payload)
        return h.response()
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-width']
        }
    }

})


async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();