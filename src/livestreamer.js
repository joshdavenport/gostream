var exec = require('child_process').exec;

module.exports = function (url, quality, screen) {

	var steamProcess = exec(`streamlink --twitch-oauth-token 7ywy70vvjfgbl4n99d10eq93w92vtk --hls-segment-threads 4 --hls-live-edge 6 --player="'/Applications/mpv.app/Contents/MacOS/mpv' --no-border --ontop --screen=${screen} --input-media-keys=no" ${url} ${quality}`);

	steamProcess.stdout.on('data', function (data) {
		process.stdout.write(data);
	});

}