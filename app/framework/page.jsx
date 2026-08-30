import { Box, Container, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';
import { pillars } from '../../lib/content';

function PillarCard({ pillar, dark }) {
  return (
    <Box bg={dark ? 'brand.navy' : 'brand.white'} color={dark ? 'brand.white' : 'brand.navy'} p={{ base: 7, md: 9 }} minH={{ md: '390px' }} display="flex" flexDirection="column" border="1px solid" borderColor={dark ? 'rgba(255,255,255,.1)' : 'brand.mist'}>
      <Flex justify="space-between" align="center">
        <Text fontFamily="mono" color="brand.gold" fontSize="11px">{pillar.number}</Text>
        <Text color={dark ? 'rgba(255,255,255,.45)' : 'brand.saffron'} fontSize="9px" letterSpacing=".13em" textTransform="uppercase">{pillar.group}</Text>
      </Flex>
      <Heading mt={10} fontSize={{ base: '30px', md: '34px' }} fontWeight="400" lineHeight="1.1">{pillar.title}</Heading>
      <Text mt={6} color={dark ? 'rgba(255,255,255,.65)' : '#625b52'} fontSize="14px" lineHeight="1.85">{pillar.description}</Text>
    </Box>
  );
}

export default function FrameworkPage() {
  const units = pillars.slice(0, 3);
  const forces = pillars.slice(3);
  return (
    <SiteShell>
      <PageHeader eyebrow="The Six-Pillar Framework" title="From the family to the world.">A connected framework that brings civilisational wisdom to the needs of modern life.</PageHeader>
      <Container maxW="1050px" py={{ base: 14, md: 20 }}>
        <Text fontFamily="heading" color="brand.navy" fontSize={{ base: '28px', md: '38px' }} lineHeight="1.4">Vishwa Hitay looks at three expanding units of life—family, society, and the world—and three powerful forces that shape them: leadership, wealth, and technology.</Text>
        <Grid mt={10} templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10}>
          <Text color="#625b52" lineHeight="1.9">The framework begins with the smallest and most foundational unit: the family. Family is where values are first received, character is first shaped, relationships are first understood, and responsibility is first experienced. From there, the vision expands to governance and society, where these values operate through institutions, duties, justice, and social harmony. Finally, it moves to the global level, reflecting the principle of <Box as="span" fontStyle="italic">Vasudhaiva Kutumbakam</Box>—the world as one family.</Text>
          <Text color="#625b52" lineHeight="1.9">Across these three levels, Vishwa Hitay examines the forces shaping human life today. Leadership determines the quality of direction. Wealth and business determine how prosperity is created and shared. Technology determines how the future is designed and how human life is transformed.</Text>
        </Grid>
      </Container>

      <Box bg="brand.parchment" py={{ base: 14, md: 20 }}>
        <Container maxW="1240px">
          <Text color="brand.saffron" fontSize="10px" fontWeight="700" letterSpacing=".18em" textTransform="uppercase">01 — From the individual outward</Text>
          <Heading mt={3} mb={9} fontSize={{ base: '38px', md: '50px' }} fontWeight="400">Three expanding units of life</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="1px" bg="brand.mist">{units.map(pillar => <PillarCard key={pillar.number} pillar={pillar} />)}</SimpleGrid>
        </Container>
      </Box>

      <Box bg="brand.ink" py={{ base: 14, md: 20 }}>
        <Container maxW="1240px">
          <Text color="brand.gold" fontSize="10px" fontWeight="700" letterSpacing=".18em" textTransform="uppercase">02 — Across every level</Text>
          <Heading color="brand.white" mt={3} mb={9} fontSize={{ base: '38px', md: '50px' }} fontWeight="400">Three forces that shape life</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="1px" bg="rgba(255,255,255,.1)">{forces.map(pillar => <PillarCard key={pillar.number} pillar={pillar} dark />)}</SimpleGrid>
        </Container>
      </Box>

      <Container maxW="900px" py={{ base: 16, md: 22 }} textAlign="center">
        <Text color="brand.saffron" fontSize="10px" fontWeight="700" letterSpacing=".18em" textTransform="uppercase">One larger vision</Text>
        <Heading mt={5} fontSize={{ base: '35px', md: '48px' }} fontWeight="400" lineHeight="1.2">Six interconnected dimensions for applying civilisational wisdom to modern life.</Heading>
        <Text mt={7} color="#625b52" lineHeight="1.9">Together, these pillars help us understand how civilisational wisdom can guide the individual, strengthen the family, improve society, shape ethical prosperity, direct technology responsibly, and contribute to global well-being.</Text>
      </Container>
    </SiteShell>
  );
}
