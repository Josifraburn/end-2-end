'use strict'

const Hapi = require('hapi');

const server = Hapi.server({ 
    host: 'localhost', 
    port: 3001
});

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
    path:'/cars', 
    handler: (request, h) => {
        return { cars: [{
            make: 'BMW',
            model: 'M3',
            year: 2000,
            mileage: 100000
        },{
            make: 'BMW',
            model: 'X3',
            year: 2004,
            mileage: 80000
        }]};
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
    handler: (request, h) => {
        console.log(request.payload)
        return h.response('success')
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