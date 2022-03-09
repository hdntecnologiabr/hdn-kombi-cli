import { createStore } from 'effector';

import { loadExample, loadExampleDone, loadExampleFail } from './ExampleEvents';
import { ExampleState } from './ExampleState';

const initialState: ExampleState = {
  isLoading: false,
};

const ExampleStore = createStore<ExampleState>(initialState)
  .on(loadExample, state => ({
    ...state,
    isLoading: true,
  }))
  .on(loadExampleDone, () => ({
    isLoading: false,
  }))
  .on(loadExampleFail, state => ({
    ...state,
    isLoading: false,
  }));

export default ExampleStore;
