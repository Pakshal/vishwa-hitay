import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';

export default function BlogsPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Blogs" title="Essays for applied wisdom.">Reflections on civilisational wisdom and its relevance to modern life.</PageHeader>
      <Container maxW="1180px" py={14}>
        <Box bg="brand.parchment" p={{ base: 8, md: 12 }} borderRadius="10px" textAlign="center">
          <Heading as="h2" fontSize={{ base: '32px', md: '42px' }} fontWeight="400" color="brand.navy">Coming soon</Heading>
          <Text mt={4} color="#625b52" fontSize="18px" lineHeight="1.8">New essays and reflections will be shared here. Stay tuned.</Text>
        </Box>
      </Container>
    </SiteShell>
  );
}
