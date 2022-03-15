import { Factory } from 'miragejs';

const test = Factory.extend({
  name(i) {
    return `name ${i}`;
  },
});

const exampleFactory = {
  test,
};

export default exampleFactory;
