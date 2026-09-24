import { Box, Container, Heading, Text } from '@chakra-ui/react';

export default function PageHeader({ eyebrow, title, children }) {
  return (
    <Box bgGradient="linear(to-b, brand.parchment, brand.white)" color="brand.navy" position="relative" overflow="hidden">
      <Box position="absolute" left="0" right="0" bottom={{ base: '-12px', md: '-35px' }} aria-hidden="true" pointerEvents="none" color="brand.navy" opacity=".045" fontFamily="heading" fontSize={{ base: '68px', md: '150px' }} whiteSpace="nowrap" display="flex" alignItems="center" justifyContent="center">वसुधैव कुटुम्बकम्</Box>
      <Container maxW="1180px" py={{ base: 16, md: 24 }} position="relative">
        <Text color="brand.saffron" fontSize={{ base: '16px', md: '20px' }} fontWeight="700" letterSpacing=".12em" textTransform="uppercase" mb={4}>{eyebrow}</Text>
        <Heading maxW="860px" fontWeight="300" fontSize={{ base: '44px', md: '76px' }} lineHeight=".95">{title}</Heading>
        {children && <Text mt={6} maxW="680px" color="#4a4540" fontSize="18px" lineHeight="1.8">{children}</Text>}
      </Container>
    </Box>
  );
}
