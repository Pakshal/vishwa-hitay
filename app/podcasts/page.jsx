import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';

export default function PodcastsPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Podcasts" title="Conversations that connect eras.">Long-form dialogues with scholars, practitioners and builders on ancient wisdom and modern relevance.</PageHeader>
      <Container maxW="1180px" py={14}>
        <Box bg="brand.parchment" p={{ base: 8, md: 12 }} borderRadius="10px" textAlign="center">
          <Heading as="h2" fontSize={{ base: '32px', md: '42px' }} fontWeight="400" color="brand.navy">Coming soon</Heading>
          <Text mt={4} color="#625b52" fontSize="18px" lineHeight="1.8">New podcasts will be shared here. Stay tuned.</Text>
        </Box>
      </Container>
    </SiteShell>
  );
}
