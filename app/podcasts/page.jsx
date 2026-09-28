import { AspectRatio, Box, Button, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';
import { podcasts } from '../../lib/content';

export default function PodcastsPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Podcasts" title="Conversations that connect eras.">Long-form dialogues with scholars, practitioners and builders on ancient wisdom and modern relevance.</PageHeader>
      <Container maxW="1180px" py={14}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {podcasts.map((podcast) => (
            <Box key={podcast.videoId} as="article" bg="brand.white" border="1px solid" borderColor="brand.mist" borderRadius="10px" overflow="hidden" display="flex" flexDirection="column">
              <AspectRatio ratio={16 / 9}>
                <Box
                  as="iframe"
                  src={`https://www.youtube-nocookie.com/embed/${podcast.videoId}`}
                  title={podcast.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  border={0}
                />
              </AspectRatio>
              <Box p={{ base: 6, md: 7 }} flex="1" display="flex" flexDirection="column" alignItems="start">
                <Heading as="h2" fontSize={{ base: '26px', md: '30px' }} fontWeight="400" mb={6}>{podcast.title}</Heading>
                <Button as="a" href={`https://www.youtube.com/watch?v=${podcast.videoId}`} target="_blank" rel="noopener noreferrer" variant="gold" rightIcon={<FiExternalLink />} mt="auto" aria-label={`Watch ${podcast.title} on YouTube (opens in a new tab)`}>Watch on YouTube</Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </SiteShell>
  );
}
