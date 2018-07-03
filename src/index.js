module.exports = function () {
  var inquirer = require('inquirer');
  var Rx = require('rxjs');
  var streamlink = require('./streamlink');

  var state = {};

  var prompts = new Rx.Subject();
  inquirer.prompt(prompts).ui.process.subscribe(
    function (e) {
    	state[e.name] = e.answer;
    	require(`./prompt-step-handler/${e.name}`)(prompts, state);
    },
    function (err) {
    	console.error(err)
    },
    function (e) {
      streamlink(state);
    }
  );

  require(`./prompt-step-handler/default`)(prompts, state);
}
