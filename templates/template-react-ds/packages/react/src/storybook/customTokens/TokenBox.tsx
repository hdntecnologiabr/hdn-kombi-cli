import React from 'react';

import { keyframes, styled } from '@<%= fullName %>/web';

import { TokenName } from '.';
import { TokenProps } from './types';

const Box = styled('div', {
  boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 1px, rgb(0 0 0 / 7%) 0px 0px 0px 1px',
  borderRadius: '4px',
  color: '#333333',
  fontFamily:
    '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '12px',
  padding: '12px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});

interface TokenBoxProps {
  token: TokenProps;
  children: React.ReactNode;
  animatedStart?: string;
  animatedEnd?: string;
  animatedVelocity?: string;
}

const TokenBox = (props: TokenBoxProps) => {
  const { children, animatedStart, animatedEnd, animatedVelocity, token } = props;
  const childRef = React.useRef<HTMLDivElement>(null);

  const animation = keyframes({
    '0%': { transform: `${animatedStart}` },
    '100%': { transform: `${animatedEnd}` },
  });

  function handleMouseEnter() {
    const element = childRef.current;

    const velocity = (animatedVelocity && token.value) || '2s';
    element.style.animation = `${animation} ${velocity} linear`;
  }

  function handleMouseLeave() {
    const element = childRef.current;
    element.style.animation = '';
  }

  return (
    <Box onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
      <TokenName token={token} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { ref: childRef });
        }
        return child;
      })}
    </Box>
  );
};

export { TokenBox };
