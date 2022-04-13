import React from 'react';

import { styled } from '@<%= fullName %>/web';

const Container = styled('div', {
  display: 'grid',
  columnGap: '12px',
  rowGap: '12px',
  gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
});

interface TokenContainerProps {
  children: React.ReactChild[];
}
const TokenContainer = (props: TokenContainerProps) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export { TokenContainer };
