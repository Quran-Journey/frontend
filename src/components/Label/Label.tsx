import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';

interface LabelProps {
  labelText: string;
}

const LabelDiv = styled.div`
  border-radius: 10px;
  background: ${colours.lightGreen};
  display: flex;
  padding: 1px 7px;
  align-items: center;

  color: ${colours.black};
  font-family: General Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Label = ({ labelText }: LabelProps) => {
  return <LabelDiv>{labelText}</LabelDiv>;
};
