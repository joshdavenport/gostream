module.exports = function (urlAnswer) {
	switch(urlAnswer) {
		case 'bbcone':
			return 'http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hds/uk/pc/ak/bbc_one_hd.f4m';
			break;
		case 'bbctwo':
			return 'http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hds/uk/pc/ak/bbc_two_hd.f4m';
			break;
		case 'bbcnews':
			return 'http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hds/uk/pc/ak/bbc_news24.f4m';
			break;
		case 'bbcfour':
			return 'http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hds/uk/pc/ak/bbc_four_hd.f4m';
			break;
		case 'bbcparliament':
			return 'http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hds/uk/pc/ak/bbc_parliament.f4m';
			break;
		case 'bbconelondon':
			return 'http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hds/uk/pc/ak/bbc_one_london.f4m';
			break;
			
	}
}