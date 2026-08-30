import { Container, ListItem, OrderedList, Box, Heading } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';

export default function MissionPage() {
  const points = ['Create high-quality podcasts, essays and short-form explainers on Indian wisdom and modern challenges.', 'Reference classical texts and credible scholarship behind every major idea.', 'Build a community of learners, experts, creators and institutions.', 'Convert deep concepts into frameworks useful for leadership, business, governance and technology.'];
  return (
    <SiteShell>
      <PageHeader eyebrow="Mission" title="Translate wisdom into action.">Vishwa Hitay exists to make ancient principles usable in everyday life, institutions and public conversations.</PageHeader>
      <Container maxW="900px" py={14}>
        <Box bg="brand.parchment" p={{ base: 7, md: 10 }} borderRadius="12px">
          <Heading fontSize="36px" fontWeight="400" mb={6}>Our operating mission</Heading>
          <OrderedList spacing={5} fontSize="18px" color="#4a4540" lineHeight="1.8">
            {points.map((point) => <ListItem key={point}>{point}</ListItem>)}
          </OrderedList>
        </Box>
      </Container>
    </SiteShell>
  );
}
