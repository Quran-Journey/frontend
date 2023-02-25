import * as React from 'react';
import Chip from '@mui/material/Chip';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme';

interface LabelProps {
  /**
   * Label color
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'dark'
    | 'lavendar'
    | 'periwinkle'
    | 'babyBlue'
    | 'mint'
    | 'black'
    | undefined;
  /**
   * Label size
   */
  size?: 'small' | 'medium' | undefined;
  /**
   * Label text contents
   */
  label: string;
  /**
   * Label text font weight 
   */
  fontWeight?: '400' | '600' | undefined;
  /**
   * Optional click handler
   */
  onClick?: () => void | undefined;
}

/**
 * Primary label used in user and admin interfaces
 */
export const Label = ({
  size,
  color,
  label,
  fontWeight = '400',
  ...props
}: LabelProps) => {

  return (
    <ThemeProvider theme={theme}>
      <Chip
        label={label}
        color={color}
        size={size}
        sx={{ borderRadius: 1.25, fontFamily: 'Inter', fontWeight: {fontWeight} }}
      />
    </ThemeProvider>
  );
};
