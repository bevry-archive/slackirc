module.exports = [{
	nickname: process.env.SLACKIRC_NICKNAME || 'slackirc',
	server: process.env.SLACKIRC_SERVER || 'chat.freenode.net',
	token: process.env.SLACKIRC_TOKEN,
	channelMapping: (function () {
		var channels = {}
		process.env.SLACKIRC_CHANNELS.split(',').forEach(function (value) {
			var parts = value.split(':')
			if ( parts.length === 1 ) {
				var part = parts[0].trim()
				channels[part] = part
			}
			else if ( parts.length === 2 ) {
				var slack = parts[0].trim()
				var irc = parts[1].trim()
				channels[slack] = irc
			}
		})
		return channels
	})(),
	autoSendCommands: process.env.SLACKIRC_PASSWORD && [
		['PRIVMSG', 'NickServ', 'IDENTIFY ' + process.env.SLACKIRC_PASSWORD],
		['MODE', 'test', '+x'],
		['AUTH', 'test', 'password']
	] || null
}]

// Debug
console.log('Starting with configuration:', module.exports)
