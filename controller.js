class Controller {
  questionsArr = [];

  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async start() {
    const pathToFile = await this.view.display();
    this.getData(pathToFile);
  }

  async getData(pathToFile) {
    this.questionsArr = await this.model.readFile(pathToFile);

    let answer = await this.view.display({ question: this.questionsArr[0].question });
    for (let i = 1; i < this.questionsArr.length; i++) {
      answer = await this.view.display({
        question: this.questionsArr[i].question,
        answer: answer === this.questionsArr[i - 1].answer,
      });
    }
  }
}

module.exports = Controller;
