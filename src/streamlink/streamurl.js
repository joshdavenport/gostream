module.exports = function (state) {
	var url = state.url;
	state.url = '';
	return `--stream-url '${url}'`;
}