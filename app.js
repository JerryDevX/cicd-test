const fastify = require('fastify')({ logger: true })

fastify.register(require('@fastify/cors'), {
    origin: '*',
    methods: ['GET,PUT,POST,DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
})

fastify.get('/', async (request, reply) => {

    reply.send({
        message: 'Hello World'
    })


})

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})