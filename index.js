const View = require('./view');
const Model = require('./model');
const Controller = require('./controller');

(function () {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);

  controller.start();
})();
