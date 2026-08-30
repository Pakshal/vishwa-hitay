import { Container, SimpleGrid } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';
import InfoCard from '../../components/InfoCard';

export default function VisionPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Vision" title="A wiser world, shaped by timeless principles.">To make Indian civilizational wisdom a living resource for global problem-solving and human flourishing.</PageHeader>
      <Container maxW="1180px" py={14}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          <InfoCard label="01" title="Global Relevance">Present Indian wisdom in a language that students, leaders and citizens across the world can relate to.</InfoCard>
          <InfoCard label="02" title="Ethical Modernity">Build bridges between tradition and new domains like AI, governance, climate and future of work.</InfoCard>
          <InfoCard label="03" title="Human Flourishing">Create content, dialogues and research that help people live with clarity, duty, restraint and purpose.</InfoCard>
        </SimpleGrid>
      </Container>
    </SiteShell>
  );
}
