import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

import 'regenerator-runtime/runtime';

import { tick } from './tests/testHelpers';

Enzyme.configure({
  adapter: new Adapter(),
});

global.tick = tick;
