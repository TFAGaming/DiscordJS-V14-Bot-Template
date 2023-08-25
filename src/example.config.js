module.exports = {
  client: {
    token: "Your Bot token (USE ENV FOR SAFETY)",
    id: "Your Bot ID (USE ENV FOR SAFETY)",
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
      uri: "Your MongoDB URI string (USE ENV FOR SAFETY)",
      toggle: false,
    },
  },
  users: {
    developers: [""],
  },
};
