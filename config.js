module.exports = [
	{
		nickname: process.env.SLACKIRC_NICKNAME || 'slackirc',
		server: process.env.SLACKIRC_SERVER || 'chat.freenode.net',
		token: process.env.SLACKIRC_TOKEN,
		channelMapping: (function () {
			var channels = {}
			process.env.SLACKIRC_CHANNELS.split(',').forEach(function (value) {
				var parts = value.split(':')
				if ( parts.length === 1 ) {
					var part = parts[0].trim()
					channels[part] = channels[part]
				}
				else if ( parts.length === 2 ) {
					var slack = parts[0].trim()
					var irc = parts[1].trim()
					channels[slack] = channels[irc]
				}
		})
		return channels
	})()
]
