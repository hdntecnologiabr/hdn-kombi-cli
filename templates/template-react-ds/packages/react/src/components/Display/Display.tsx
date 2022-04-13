import * as React from 'react';

import { DisplayStyles } from '@<%= fullName %>/styles';
import { ComponentProps, styled } from '@<%= fullName %>/web';

export type DisplayBaseProps = ComponentProps<typeof DisplayBase>;

const DisplayBase = styled('h1', DisplayStyles);

export interface DisplayProps extends DisplayBaseProps {
  size: '160' | '200';
  weight: 'light' | 'regular' | 'medium' | 'bold';
  isTruncated?: boolean;
  as?: string;
  children: React.ReactNode;
}

export const Display = React.forwardRef((props: DisplayProps, ref: React.ForwardedRef<HTMLHeadingElement>) => {
  return (
    <DisplayBase as={props.as} ref={ref} {...props}>
      {props.children}
    </DisplayBase>
  );
});
