const moment = require("moment")
require("moment-duration-format")

exports.run = (client, message, args) => {
    const duration = moment.duration(client.uptime).format(" D [Jours], H [Heures], m [Minutes], s [Secondes]");
    message.channel.send(duration)
}
