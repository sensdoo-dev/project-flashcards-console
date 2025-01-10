const { input, confirm, select } = require('@inquirer/prompts');

class View {
  isFirst = true;

  async display(data) {
    if (!data) {
      const category = await this.#start();
      return category;
    }
    if (!data.answer && this.isFirst) {
      this.isFirst = !this.isFirst;
      const userAnswer = await this.#nextView(data.question);
      return userAnswer;
    }
    const isCorrect = data.answer === true ? '\nМОЛОДЕЦ\n' : '\n\nИДИ УЧИСЬ!\n';

    console.log(isCorrect);

    if (data.question) {
      const userAnswer = this.#nextView(data.question);
      return userAnswer;
    }
  }

  async newGame(controller) {
    const isCorrect = await confirm({
      message: 'Хотите начать заного?\n',
    });
    if (isCorrect) controller.start();
  }

  #start() {
    return select({
      message: 'Выбери тему вопросов:',
      choices: [
        { name: 'Ястреб', value: 'nighthawk_flashcard_data.txt' },
        { name: 'Выдра', value: 'otter_flashcard_data.txt' },
        { name: 'Енот', value: 'raccoon_flashcard_data.txt' },
      ],
    });
  }

  #nextView(question) {
    return input({ message: question || 'Ястреб птица?' });
  }
}

module.exports = View;
