import { Badge, Container, SimpleGrid, Text } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';
import InfoCard from '../../components/InfoCard';
import { podcasts } from '../../lib/content';

export default function PodcastsPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Podcasts" title="Conversations that connect eras.">Long-form dialogues with scholars, practitioners and builders on ancient wisdom and modern relevance.</PageHeader>
      <Container maxW="1180px" py={14}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          {podcasts.map((podcast) => <InfoCard key={podcast.title} label={podcast.duration} title={podcast.title}><Badge mb={3} colorScheme="orange">{podcast.guest}</Badge><Text>{podcast.description}</Text></InfoCard>)}
        </SimpleGrid>
      </Container>
    </SiteShell>
  );
}
