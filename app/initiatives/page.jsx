import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';

export default function InitiativesPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Initiatives" title="Ideas, brought to life.">Programmes designed to move civilisational wisdom from reflection into meaningful practice.</PageHeader>
      <Container maxW="1180px" py={16}>
        <Box bg="brand.parchment" p={{ base: 8, md: 12 }} borderRadius="10px" textAlign="center">
          <Heading as="h2" fontSize={{ base: '32px', md: '42px' }} fontWeight="400" color="brand.navy">Coming soon</Heading>
          <Text mt={4} color="#625b52" fontSize="18px" lineHeight="1.8">Details of our initiatives will be shared here. Stay tuned.</Text>
        </Box>
      </Container>
    </SiteShell>
  );
}
