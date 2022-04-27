import React from 'react';

import { Box } from './ExampleComponent.style';
import { ExampleComponentProps } from './ExampleComponent.types';

function ExampleComponentView({ test }: ExampleComponentProps): JSX.Element {
  return (
    <Box>
      {test && (<code>Example component</code>)}
    </Box>
  );
}

export default ExampleComponentView;
