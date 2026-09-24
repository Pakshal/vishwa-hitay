import NextLink from 'next/link';
import { Box, Button, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';

export default function EventsPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Events" title="Gather. Question. Grow.">Join conversations and learning experiences that connect enduring wisdom with the world we inhabit.</PageHeader>
      <Container maxW="1050px" py={16}>
        <Box as="section" aria-labelledby="upcoming-events">
          <Heading id="upcoming-events" fontSize={{ base: '32px', md: '40px' }} fontWeight="400">Upcoming events</Heading>
          <Text mt={3} mb={8} color="#625b52" fontSize="18px">Dates to be announced.</Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box as="article" border="1px solid" borderColor="brand.mist" bg="brand.parchment" p={{ base: 7, md: 9 }}>
              <Heading as="h3" fontSize="30px" fontWeight="400">The next Vishwa Dialogue</Heading>
              <Text mt={4} color="#625b52" fontSize="18px" lineHeight="1.8">A live exchange on leadership, responsibility and human flourishing.</Text>
              <Button as={NextLink} href="/contact" mt={7} variant="gold">Ask about this event</Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </SiteShell>
  );
}
