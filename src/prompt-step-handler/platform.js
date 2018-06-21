module.exports = function (prompts, state) {

	try {
		require(`./platform/${state.platform}`)(prompts);
	} catch (e) {
		prompts.next({
			name: 'url',
			message: 'What\'s the URL or ID?',
			type: 'input'
		});
	}

}
