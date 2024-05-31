'use client'
import {
    Button,
    colorsTuple,
    createTheme,
    DEFAULT_THEME,
    mergeMantineTheme,
    rem,
  } from '@mantine/core';
  import "@fontsource/ibm-plex-mono"
  import '@fontsource/geist-sans';

  const themeOverride = createTheme({
    defaultRadius: 'xs',
    colors: {
        'black': colorsTuple('#000000'),
        'grey': colorsTuple('#393939'),
        'white': colorsTuple('#FFFFFF'),
        'green': colorsTuple('#AAFF00'),
    },    
    fontFamily: `'Geist Sans', serif`,
    fontFamilyMonospace: `'IBM Plex Mono', serif`,
    headings: { fontFamily: `'IBM Plex Mono', serif` }
  });


  const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export default theme
