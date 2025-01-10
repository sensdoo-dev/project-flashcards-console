const { input, select } = require('@inquirer/prompts');

class View {
  async display(data) {
    if (!data) {
      const category = await this.#start();
      return category;
    }
    if (!data.answer) {
      const answer = await this.#nextView(data.question);
      return answer;
    }

    // if (!category) return this.display();
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

// new View().display();
new View().display({ question: '!!!!' });
// new View().display({ question: '!!!!' });

module.exports = View;
