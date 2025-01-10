const fs = require('fs').promises;

class Model {
  async readFile(path) {
    const text = await fs.readFile(`./topics/${path}`, 'utf-8');
    const arr = text.split('\r\n').filter((el) => el !== '');
    const [even, odd] = arr.reduce(
      (acc, val, index) => {
        if (index % 2 === 0) {
          acc[0].push(val);
        } else {
          acc[1].push(val);
        }
        return acc;
      },
      [[], []],
    );
    const final = even.map((el, index) => {
      return { question: even[index], answer: odd[index] };
    });
    return final;
  }
}

module.exports = Model;
