import React from 'react';

import ExampleComponentView from './ExampleComponentView';
import { ExampleComponentProps } from './ExampleComponent.types';

function ExampleComponent({ test }: ExampleComponentProps): JSX.Element {
  return (
    <ExampleComponentView />
  );
}

export default ExampleComponent;
