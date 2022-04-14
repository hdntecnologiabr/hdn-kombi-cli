import React from 'react';

import { styled } from '@<%= fullName %>/web';

import { Display } from './Display';

const Box = styled('div', {
  display: 'flex',
  width: '530px',
  h1: {
    margin: 0,
  },
});

export default {
  title: 'Components/Typography/Display',
  component: Display,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ['160', '200'],
      control: { type: 'select' },
      table: {
        category: 'Properties',
      },
    },
    weight: {
      options: ['light', 'regular', 'medium', 'bold'],
      control: { type: 'select' },
      table: {
        category: 'Properties',
      },
    },
    isTruncated: {
      options: ['false', 'true'],
      control: { type: 'boolean' },
      table: {
        category: 'Properties',
      },
    },
    label: {
      table: {
        category: 'Custom inputs',
      },
    },
  },
};

const Template = (args) => {
  const { label } = args;
  return (
    <Box>
      <Display {...args}>{label}</Display>
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  size: '160',
  weight: 'regular',
  isTruncated: false,
  label: 'Lorem ipsum dolor sit amet',
};

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
