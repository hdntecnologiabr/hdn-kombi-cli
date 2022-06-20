import { Factory } from "miragejs";

const example = Factory.extend({
  title() {
    return "Example title from API";
  },
  description() {
    return "Example description from API";
  },
});

const exampleFactory = {
  example,
};

export default exampleFactory;
