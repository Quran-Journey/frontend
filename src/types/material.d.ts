import { Palette } from '@mui/material/styles/createPalette';
import React from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    dark: Palette['primary'];
    sage: Palette['primary'];
    lavendar: Palette['primary'];
    periwinkle: Palette['primary'];
    babyBlue: Palette['primary'];
    mint: Palette['primary'];
    black: Palette['primary'];
  }

  interface PaletteOptions {
    dark: PaletteOptions['primary'];
    sage: PaletteOptions['primary'];
    lavendar: PaletteOptions['primary'];
    periwinkle: PaletteOptions['primary'];
    babyBlue: PaletteOptions['primary'];
    mint: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    h1_ar: React.CSSProperties;
    h2_ar: React.CSSProperties;
    h3_ar: React.CSSProperties;
    h4_ar: React.CSSProperties;
    h5_ar: React.CSSProperties;
    h6_ar: React.CSSProperties;
    quran_text: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1_ar: React.CSSProperties;
    h2_ar: React.CSSProperties;
    h3_ar: React.CSSProperties;
    h4_ar: React.CSSProperties;
    h5_ar: React.CSSProperties;
    h6_ar: React.CSSProperties;
    quran_text: React.CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dark: true;
    lavendar: true;
    periwinkle: true;
    babyBlue: true;
    mint: true;
    black: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    dark: true;
    sage: true;
    lavendar: true;
    periwinkle: true;
    babyBlue: true;
    mint: true;
    black: true;
  }
}

declare module '@mui/material/Chip' {
  export interface ChipPropsColorOverrides {
    dark: true;
    sage: true;
    lavendar: true;
    periwinkle: true;
    babyBlue: true;
    mint: true;
    black: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1_ar: true;
    h2_ar: true;
    h3_ar: true;
    h4_ar: true;
    h5_ar: true;
    h6_ar: true;
    quran_text: true;
  }
}
