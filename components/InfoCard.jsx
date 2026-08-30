import { Box, Heading, Text } from '@chakra-ui/react';

export default function InfoCard({ label, title, children }) {
  return (
    <Box bg="brand.white" border="1px solid" borderColor="brand.mist" p={7} borderRadius="10px" boxShadow="0 16px 45px rgba(26,23,20,.04)">
      {label && <Text fontFamily="mono" color="brand.gold" fontSize="11px" mb={3}>{label}</Text>}
      <Heading fontSize="26px" mb={3}>{title}</Heading>
      <Text color="#4a4540" lineHeight="1.8">{children}</Text>
    </Box>
  );
}
