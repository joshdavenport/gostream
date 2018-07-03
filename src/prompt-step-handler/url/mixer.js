module.exports = function (urlAnswer) {
	if(urlAnswer.match(/^http/)) {

		var matches = urlAnswer.match(/^https?:\/\/([a-zA-Z0-9]+.)*mixer.com(:[0-9]+)?\/(.*)$/);

		if(!matches) {
			throw new Error('Doesn\'t seem to be a valid Mixer URL');
		}
		
		return `https://mixer.com/${matches[3]}`;
	}

	return `https://mixer.com/${urlAnswer}`;
}
