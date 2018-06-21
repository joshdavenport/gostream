module.exports = function (prompts) {
	
	prompts.next({
		name: 'url',
		message: 'Which channel?',
		type: 'list',
		choices: [
			{
				name: 'ITV',
				value: 'itv'
			},
			{
				name: 'Channel 4',
				value: 'channel4'
			},
			{
				name: 'Five',
				value: 'five'
			}
		]
	});

}