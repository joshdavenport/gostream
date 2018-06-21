module.exports = function (urlAnswer) {
	switch(urlAnswer) {
		case 'itv':
			return 'http://www.tvcatchup.com/watch/itv';
			break;
		case 'channel4':
			return 'http://www.tvcatchup.com/watch/channel4';
			break;
		case 'five':
			return 'http://www.tvcatchup.com/watch/five';
			break;
	}
}