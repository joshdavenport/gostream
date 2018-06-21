module.exports = function (urlAnswer) {
	if(urlAnswer.match(/^http/)) {

		var matches = urlAnswer.match(/^https?:\/\/([a-zA-Z0-9]+.)*twitch.tv(:[0-9]+)?\/(.*)$/);

		if(!matches) {
			throw new Error('Doesn\'t seem to be a valid Twitch URL');
		}
		
		return `https://www.twitch.tv/${matches[3]}`;
	}

	return `https://www.twitch.tv/${urlAnswer}`;
}