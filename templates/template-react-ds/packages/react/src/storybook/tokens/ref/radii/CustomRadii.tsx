import React from 'react';

import { TokenName, TokenContainer, TokenBox, TokenSquareRender } from '../../../customTokens';
import { CustomTokenProps } from '../../../customTokens/types';

const CustomRadii = (props: CustomTokenProps) => {
  const { tokens } = props;

  return (
    <TokenContainer>
      {tokens.map((token) => (
        <TokenBox key={token.name} token={token}>
          <TokenSquareRender style={{ borderRadius: token.value }} token={token.value} />
        </TokenBox>
      ))}
    </TokenContainer>
  );
};

export default CustomRadii;
