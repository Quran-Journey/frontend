import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme';

interface ButtonProps {
  /**
   * What background color to use
   */
  color?:
    | 'inherit'
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
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | undefined;
  /**
   * Outlined or not
   */
  variant?: 'outlined' | 'contained' | undefined;
  /**
   * Contains icon to the left/start of button
   */
  iconStart?: React.ReactElement | undefined;
  /**
   * Contains icon to the right/end of button
   */
  iconEnd?: React.ReactElement | undefined;
  /**
   * Button contents
   */
  label: string;
  /**
   * Button disabled
   */
  disabled?: boolean | undefined;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */

export const MainButton = ({
  size = 'small',
  color = 'dark',
  label,
  variant = 'contained',
  iconStart,
  iconEnd,
  disabled = false,
  ...props
}: ButtonProps) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  console.log(props);
  return (
    <ThemeProvider theme={theme}>
      <Button
        size={size}
        variant={variant}
        startIcon={iconStart}
        endIcon={iconEnd}
        onClick={handleClick}
        color={color}
        disabled={disabled}
        sx={{
          borderRadius: 5,
          textTransform: 'none',
          fontWeight: 500,
          fontFamily: 'Inter',
          boxShadow: 0,
          '&:hover': { boxShadow: 0 },
          py: 0.7,
          px: 1.5,
        }}
      >
        {label}
      </Button>
    </ThemeProvider>
  );
};
