import { createEvent } from 'effector';

export const loadExample = createEvent('loadProducts');
export const loadExampleDone = createEvent('loadExampleDone');
export const loadExampleFail = createEvent('loadExampleFail');
