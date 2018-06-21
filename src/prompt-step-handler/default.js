module.exports = function (prompts, state) {

	prompts.next({
		name: 'platform',
		message: 'What platform?',
		type: 'list',
		choices: [
			{
				name: 'Twitch',
				value: 'twitch'
			},
			{
				name: 'YouTube Gaming',
				value: 'ytgaming'
			},
			{
				name: 'BBC Live',
				value: 'bbclive'
			},
			{
				name: 'TV Catchup',
				value: 'tvcatchup'
			}
		]
	});

}
