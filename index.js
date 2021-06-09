const redis = require("redis")

const client = redis.createClient()

client.subscribe("dogs")

client.on("message", (channel, message) => {
  console.log(channel, message)
})

//client.quit()
