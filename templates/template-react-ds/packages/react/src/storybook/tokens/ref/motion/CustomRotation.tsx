import React from 'react';

import { TokenBox, TokenContainer, TokenSquareRender } from '../../../customTokens';
import { CustomTokenProps } from '../../../customTokens/types';

const CustomRotation = (props: CustomTokenProps) => {
  const { tokens } = props;

  return (
    <TokenContainer>
      {tokens.map((token) => (
        <TokenBox key={token.name} animatedStart="rotate(0)" animatedEnd={`rotate(${token.value})`} token={token}>
          <TokenSquareRender token={token.value} hasLabel />
        </TokenBox>
      ))}
    </TokenContainer>
  );
};

export default CustomRotation;
