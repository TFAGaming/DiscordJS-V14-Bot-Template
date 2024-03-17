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
            enabled: false,
            uri: "Your MongoDB URI string (USE .env FOR SAFETY)"
        },
    },
    users: {
        developers: ["Your account ID", "Another account ID"],
        ownerId: "Your account ID"
    },
    channels: {
        modLogs: {
            enabled: true,
            channel: "The moderation-logs channel"
        }
    },
    development: { 
        enabled: false,
        guild: "Enter your guild ID here or you can use .env",
    }, 
    messageSettings: {
        nsfwMessage: "The current channel is not a NSFW channel.",
        ownerMessage: "The bot developer has the only permissions to use this command.",
        developerMessage: "You are not authorized to use this command.",
        cooldownMessage: "Slow down buddy! You're too fast to use this command ({cooldown}s).", // '{cooldown}' is a variable that shows the time to use the command again (in seconds)
        globalCooldownMessage: "Slow down buddy! This command is on a global cooldown ({cooldown}s).", // '{cooldown}' is a variable that shows the time to use the command again (in seconds)
        notHasPermissionMessage: "You do not have the permission to use this command.",
        notHasPermissionComponent: "You do not have the permission to use this component.",
        missingDevIDsMessage: "This is a developer only command, but unable to execute due to missing user IDs in configuration file."
    }
};
