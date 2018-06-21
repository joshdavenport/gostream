module.exports = function (prompts) {
	
	prompts.next({
		name: 'url',
		message: 'Which channel?',
		type: 'list',
		choices: [
			{
				name: 'BBC One',
				value: 'bbcone'
			},
			{
				name: 'BBC Two',
				value: 'bbctwo'
			},
			{
				name: 'BBC News',
				value: 'bbcnews'
			},
			{
				name: 'BBC Four',
				value: 'bbcfour'
			},
			{
				name: 'BBC Parliament',
				value: 'bbcfour'
			},
			{
				name: 'BBC One (London)',
				value: 'bbconelondon'
			}
		]
	});

}