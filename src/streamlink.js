var exec = require('child_process').exec;

module.exports = function (state) {

	var url = state.url,
 		quality = state.quality,
 		screen = state.screen,
 		extraFlags;

	try {
		extraFlags = require(`./streamlink/${state.platform}`)(prompts);
	} catch (e) {
		extraFlags = '';
	}

	var streamCmd = `streamlink ${extraFlags}`;
	streamCmd += ' --hls-segment-threads 4 --hls-live-edge 6 --stream-segment-threads 4';
	streamCmd += ` --player="'/Applications/mpv.app/Contents/MacOS/mpv' --no-border --ontop --screen=${screen} --input-media-keys=no"`;
	streamCmd += ` '${url}' ${quality}`;

	console.log(streamCmd);

	var streamProcess = exec(streamCmd);

	streamProcess.stdout.on('data', function (data) {
		process.stdout.write(data);
	});

}