const { input, select } = require('@inquirer/prompts');

class View {
  async display(data) {
    if (!data) {
      const category = await this.#start();
      return category;
    }
    if (!data.answer) {
      const userAnswer = await this.#nextView(data.question);
      return userAnswer;
    }
    const isCorrect = data.answer ? '\nMolodec\n' : '\n\nBulka s maslom!\n';
    console.log(isCorrect);
    const userAnswer = this.#nextView(data.question);
    return userAnswer;
  }

  #start() {
    return select({
      message: 'Выбери тему вопросов:',
      choices: [
        { name: 'Енот', value: 'raccoon_flashcard_data.txt' },
        { name: 'Ястреб', value: 'nighthawk_flashcard_data.txt' },
        { name: 'Выдра', value: 'otter_flashcard_data.txt' },
      ],
    });
  }

  #nextView(question) {
    return input({ message: question || 'Ястреб птица?' });
  }
}

module.exports = View;
