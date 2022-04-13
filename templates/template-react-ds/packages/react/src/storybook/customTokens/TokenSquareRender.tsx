import React from 'react';

import { styled } from '@<%= fullName %>/web';

const SquareRender = styled('div', {
  width: '90px',
  height: '90px',
  background: '#1EA7FD',
  margin: '20px',
});

const Label = styled('div', {
  textAlign: 'center',
  fontSize: '36px',
  lineHeight: '90px',
  color: '#fff',
});

interface TokenSquareRenderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  hasLabel?: boolean;
  token: string;
}

const TokenSquareRender = React.forwardRef(
  (props: TokenSquareRenderProps, ref: React.ForwardedRef<HTMLHeadingElement>) => {
    const { children, hasLabel, token, ...rest } = props;

    return (
      <SquareRender ref={ref} {...rest}>
        {hasLabel && <Label>DY</Label>}

        {children}
      </SquareRender>
    );
  }
);

export { TokenSquareRender };
