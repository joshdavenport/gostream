module.exports = function (urlAnswer) {
	if(urlAnswer.match(/^http/)) {
		var matches = urlAnswer.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);

		if(!matches) {
			throw new Error('Doesn\'t seem to be a valid YouTube URL');
		}

		return `https://www.youtube.com/watch?v=${matches[1]}`;
	}

	return `https://www.youtube.com/watch?v=${urlAnswer}`;
}