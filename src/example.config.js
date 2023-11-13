module.exports = {
    client: {
        token: "Your Bot token (USE .env FOR SAFETY)",
        id: "Your Bot ID (USE .env FOR SAFETY)",
    },
    handler: {
        prefix: "?",
        deploy: true,
        commands: {
            prefix: true,
            slash: true,
            user: true,
            message: true,
        },
        mongodb: {
            uri: "Your MongoDB URI string (USE .env FOR SAFETY)",
            toggle: false,
        },
    },
    users: {
        developers: ["Your account ID"],
    },
    messageSettings: {
        nsfwMessage: "The current channel is not a NSFW channel.",
        developerMessage: "You are not authorized to use this command.",
        cooldownMessage: "Slow down buddy! You're too fast to use this command.",
        notHasPermissionMessage: "You do not have the permission to use this command.",
        missingDevIDsMessage: "This is a developer only command, but unable to execute due to missing user IDs in configuration file."
    }
};
