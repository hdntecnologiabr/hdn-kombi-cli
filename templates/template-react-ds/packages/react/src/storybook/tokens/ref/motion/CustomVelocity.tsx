import React from 'react';

import { TokenBox, TokenContainer, TokenSquareRender } from '../../../customTokens';
import { CustomTokenProps } from '../../../customTokens/types';

const CustomVelocity = (props: CustomTokenProps) => {
  const { tokens } = props;

  return (
    <TokenContainer>
      {tokens.map((token) => (
        <TokenBox
          key={token.name}
          token={token}
          animatedStart="rotate(0)"
          animatedEnd="rotate(360deg)"
          animatedVelocity={token.value}
        >
          <TokenSquareRender hasLabel token={token.value} />
        </TokenBox>
      ))}
    </TokenContainer>
  );
};

export default CustomVelocity;
