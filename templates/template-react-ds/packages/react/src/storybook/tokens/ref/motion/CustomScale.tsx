import React from 'react';

import { TokenBox, TokenContainer, TokenSquareRender } from '../../../customTokens';
import { CustomTokenProps } from '../../../customTokens/types';

const CustomScale = (props: CustomTokenProps) => {
  const { tokens } = props;

  return (
    <TokenContainer>
      {tokens.map((token) => (
        <TokenBox key={token.name} animatedStart="scale(0.5)" animatedEnd={`scale(${token.value})`} token={token}>
          <TokenSquareRender hasLabel token={token.value} />
        </TokenBox>
      ))}
    </TokenContainer>
  );
};

export default CustomScale;
