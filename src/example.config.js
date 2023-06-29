module.exports = {
    client: {
        token: 'Your Bot token',
        id: 'Your Bot ID'
    },
    handler: {
        prefix: '?',
        deploy: true,
        commands: {
            prefix: true,
            slash: true,
            user: true,
            message: true
        },
        mongodb: {
            uri: 'Your MongoDB URI'
        }
    }
};