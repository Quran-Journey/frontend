import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme/theme';

interface ButtonProps {
  /**
   * Button color
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
   * Button size
   */
  size?: 'small' | 'medium' | 'large' | undefined;
  /**
   * Button filled or outlined
   */
  variant?: 'outlined' | 'contained' | undefined;
  /**
   * Icon to the left/start of button
   */
  iconStart?: React.ReactElement | undefined;
  /**
   * Icon to the right/end of button
   */
  iconEnd?: React.ReactElement | undefined;
  /**
   * Button text contents
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
 * Primary button used throughout user and admin interfaces
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
