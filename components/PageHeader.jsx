import { Box, Container, Heading, Text } from '@chakra-ui/react';

export default function PageHeader({ eyebrow, title, children, centered = false }) {
  return (
    <Box bgGradient="linear(to-b, brand.parchment, brand.white)" color="brand.navy" position="relative" overflow="hidden">
      <Container textAlign={centered ? 'center' : 'left'} maxW="1180px" py={{ base: 16, md: 24 }} position="relative">
        <Text color="brand.saffron" fontSize={{ base: '16px', md: '20px' }} fontWeight="700" letterSpacing=".12em" textTransform="uppercase" mb={4}>{eyebrow}</Text>
        <Heading maxW={centered ? '100%' : '860px'} fontWeight="300" fontSize={{ base: '44px', md: '76px' }} lineHeight=".95">{title}</Heading>
        {children && <Text mt={6} maxW={centered ? '100%' : '680px'} color="#4a4540" fontSize="18px" lineHeight="1.8">{children}</Text>}
      </Container>
    </Box>
  );
}
