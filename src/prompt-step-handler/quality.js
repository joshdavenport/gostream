var exec = require('child_process').exec;
var _ = require('lodash');

module.exports = function (prompts, state) {
	

	exec('system_profiler SPDisplaysDataType', (err, stdout, stderr) => {
		if (err) {
			return;
		}

		var displayMatches = stdout.match(/Resolution: /g) || ['Resolution: Unknown'];

		var displayCount = displayMatches.length,
			displayChoices = [],
			i = 0;

		while(displayCount > 0) {
			displayChoices.push({
				name: `Screen ${i + 1}`,
				value: i
			});

			i++;
			displayCount--;
		}

		prompts.next({
			name: 'screen',
			message: 'What screen?',
			type: 'list',
			choices: displayChoices
		});

	});

}
