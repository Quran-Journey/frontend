import React from 'react';
import styled from 'styled-components';

/**
 * Props for button group
 * @param {React.ReactNode} children - The child elements to be rendered within the ButtonGroup.
 */
interface ButtonGroupProps {
  children?: React.ReactNode;
}

/**
 * Styled button group div.
 */
const GroupDiv = styled.div`
  gap: 5px;
  display: inline-flex;
  align-items: flex-end;

  margin-top: 10px;
  margin-bottom: 10px;
`;

/**
 * Renders a group of buttons.
 *
 * @param {ButtonGroupProps} props - The props for the ButtonGroup component.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the ButtonGroup.
 * @returns {React.ReactNode} - The rendered ButtonGroup component.
 */
export const ButtonGroup = ({
  children,
}: ButtonGroupProps): JSX.Element => {
  return <GroupDiv>{children}</GroupDiv>;
};
