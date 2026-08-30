import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    ink: '#1A1714',
    navy: '#071A38',
    parchment: '#F5EFE4',
    saffron: '#D4732B',
    gold: '#C9A84C',
    ashblue: '#3E5E72',
    mist: '#EAE4D8',
    white: '#FDFAF5'
  }
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: 'var(--font-cormorant), Georgia, serif',
    body: 'var(--font-dm-sans), system-ui, sans-serif',
    mono: 'var(--font-dm-mono), monospace'
  },
  styles: {
    global: {
      body: {
        bg: 'brand.white',
        color: 'brand.ink'
      },
      '::selection': {
        bg: 'brand.gold',
        color: 'brand.ink'
      }
    }
  },
  components: {
    Button: {
      baseStyle: { borderRadius: 'full', fontWeight: 500 },
      variants: {
        gold: {
          bg: 'brand.gold',
          color: 'brand.ink',
          _hover: { bg: 'brand.saffron', color: 'white' }
        },
        outlineGold: {
          border: '1px solid',
          borderColor: 'brand.gold',
          color: 'brand.gold',
          bg: 'transparent',
          _hover: { bg: 'rgba(201,168,76,.08)' }
        }
      }
    }
  }
});

export default theme;
