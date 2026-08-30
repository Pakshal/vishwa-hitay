import { Box, Container, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';
import { members } from '../../lib/content';

function PersonCard({ name, role }) {
  return <Box borderTop="1px solid" borderColor="brand.mist" pt={5}><Box w="48px" h="48px" borderRadius="full" bg="brand.parchment" color="brand.saffron" display="grid" placeItems="center" fontFamily="heading" fontSize="22px">{name.split(' ').map(part => part[0]).join('')}</Box><Heading mt={5} fontSize="25px" fontWeight="400">{name}</Heading><Text mt={1} color="brand.saffron" fontSize="11px" letterSpacing=".12em" textTransform="uppercase">{role}</Text><Text mt={4} color="#625b52" fontSize="14px" lineHeight="1.75">Helping shape Vishwa Hitay&apos;s work, community and commitment to ideas that serve the well-being of all.</Text></Box>;
}

export default function AboutPage() {
  return <SiteShell><PageHeader eyebrow="About Us" title="Wisdom that serves the world.">Vishwa — the world. Hitay — the welfare and well-being of all.</PageHeader>
    <Container maxW="1180px" py={{ base: 14, md: 20 }}><Grid templateColumns={{ base: '1fr', md: '.8fr 1.2fr' }} gap={14}><Heading fontSize={{ base: '38px', md: '50px' }} fontWeight="400">Depth without dogma.<br />Tradition without rigidity.</Heading><Box><Text fontSize="18px" lineHeight="1.9" color="#4a4540">Vishwa Hitay is a global ideas platform dedicated to translating civilisational wisdom into practical clarity for the challenges of modern life — leadership, governance, technology, and human flourishing.</Text><Text fontSize="18px" lineHeight="1.9" color="#4a4540" mt={4}>It speaks to leaders, students, founders, policymakers, technologists and seekers who believe that old wisdom can open new possibilities.</Text></Box></Grid>
      <Box mt={20}><Text color="brand.saffron" fontSize="11px" letterSpacing=".2em" textTransform="uppercase">Our people</Text><Heading mt={3} mb={9} fontSize="44px" fontWeight="400">Board members</Heading><SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>{members.board.map(name => <PersonCard key={name} name={name} role="Board Member" />)}</SimpleGrid></Box>
      <Box mt={20}><Heading mb={9} fontSize="44px" fontWeight="400">Active members</Heading><SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>{members.active.map(name => <PersonCard key={name} name={name} role="Active Member" />)}</SimpleGrid></Box>
    </Container></SiteShell>;
}
