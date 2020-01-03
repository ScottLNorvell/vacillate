import { unique, generateRandomPairs, templates } from './utils'


const vacillate = (...args) => {
  const ideas = unique(args);

  if (ideas.length <= 1) {
    throw new Error('must have more than 1 idea to vacillate');
  }

  const vacillations = Math.ceil(Math.random() * 10) + 5;
  const iterator = generateRandomPairs(ideas, templates);

  let iterations = 1;
  for (const [idea, template] of iterator) {
    switch (iterations) {
      case 1:
        console.log(idea)
        break;
      case vacillations:
        console.log(`${idea}! (vacillated ${vacillations} times)`);
        return idea;
      default:
        console.log(template(idea));
        break;
    }
    iterations++;
  }
};

export default vacillate;
