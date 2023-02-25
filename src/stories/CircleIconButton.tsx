import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme';

interface IconButtonProps {
  /**
   * Icon element
   */
  icon: React.ReactElement | undefined;
  /**
   * Icon button color
   */
  color:
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
   * Icon button aria-label
   */
  ariaLabel: string;
}

export const CircleIconButton = ({
  color,
  ariaLabel,
  icon,
  ...props
}: IconButtonProps) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  console.log(props);
  return (
    <ThemeProvider theme={theme}>
        <IconButton
          aria-label={ariaLabel}
          onClick={handleClick}
          color={color}
          sx={{ p: 0 }}
        >
          {icon}
        </IconButton>
    </ThemeProvider>
  );
};
