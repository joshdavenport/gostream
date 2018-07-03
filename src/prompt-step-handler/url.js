var exec = require('child_process').exec;

module.exports = function (prompts, state) {
	var url = require(`./url/${state.platform}`)(state.url);

	state.url = url;

	var streamlinkCheckCmd = `streamlink '${state.url}'`;

	if(state.platform === 'streamurl') {
		streamlinkCheckCmd = `streamlink --stream-url '${state.url}'`;
	}

	exec(streamlinkCheckCmd, (err, stdout, stderr) => {
		if (err) {
		 	return;
		}

		var qualityMatches = stdout.replace(' (worst, best)', '')
			.match(/Available streams: (.+)/);

  		if(!qualityMatches) {
	  		throw new Error('No streams found:\n\n' + streamlinkCheckCmd + '\n' + stdout);
	  	}

	  	qualityMatches = qualityMatches[1].split(',').map(function (str) {
 			return {
 				name: str.trim(),
 				value: str.trim().replace(/ ?\(.*\)$/, '')
 			};
		});

	  	prompts.next({
			name: 'quality',
			message: 'What quality?',
			type: 'list',
			choices: qualityMatches
		});
	});

	
}
