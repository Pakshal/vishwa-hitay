import NextLink from 'next/link';
import { Box, Button, Container, Flex, Grid, Heading, HStack, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import SiteShell from '../components/SiteShell';
import { pillars } from '../lib/content';

const Eyebrow = ({ children, light = false, ...props }) => <Text color={light ? 'brand.gold' : 'brand.saffron'} fontSize={{ base: '16px', md: '20px' }} fontWeight="700" letterSpacing=".12em" textTransform="uppercase" {...props}>{children}</Text>;

export default function Home() {
  return (
    <SiteShell>
      <Box bg="brand.navy" color="brand.white" position="relative" overflow="hidden">
        <Box position="absolute" w={{ base: '420px', md: '760px' }} h={{ base: '420px', md: '760px' }} border="1px solid rgba(201,168,76,.16)" borderRadius="full" right={{ base: '-280px', md: '-260px' }} top={{ base: '-80px', md: '-250px' }} />
        <Box position="absolute" w={{ base: '300px', md: '540px' }} h={{ base: '300px', md: '540px' }} border="1px solid rgba(201,168,76,.11)" borderRadius="full" right={{ base: '-200px', md: '-150px' }} top={{ base: '-20px', md: '-140px' }} />
        <Container maxW="1240px" py={{ base: 20, md: 28 }} position="relative">
          <Grid templateColumns={{ base: '1fr', lg: '1.25fr .75fr' }} gap={14} alignItems="end">
            <Box textAlign="left" minW={0}><Eyebrow light fontSize={{ base: '16px', md: '20px' }} letterSpacing=".12em" lineHeight="1.5">Ideas for human flourishing</Eyebrow><Heading mt={7} fontWeight="300" fontSize={{ base: '54px', md: '86px', xl: '96px' }} lineHeight="1.05" letterSpacing="normal" textAlign="left"><Box as="span" display="block">Ancient wisdom.</Box><Box as="span" display="block" color="brand.gold" fontStyle="italic" position="relative" left="-.04em">Modern clarity.</Box></Heading></Box>
            <Stack spacing={7} pb={{ lg: 2 }}><Text color="rgba(253,250,245,.72)" fontSize={{ base: '17px', md: '19px' }} lineHeight="1.8">Translating civilisational wisdom into practical ideas for leadership, governance, technology and human flourishing.</Text><HStack spacing={0} gap={4} flexWrap="wrap" justify="flex-end"><Button as={NextLink} href="/about" variant="gold" rightIcon={<FiArrowRight />}>Discover Vishwa Hitay</Button><Button as={NextLink} href="/watch" variant="outlineGold" leftIcon={<FiPlay />}>Watch our stories</Button></HStack></Stack>
          </Grid>
        </Container>
      </Box>

      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="1240px"><Grid templateColumns={{ base: '1fr', md: '.75fr 1.25fr' }} gap={{ base: 8, md: 20 }}><Box><Eyebrow>About Vishwa Hitay</Eyebrow><Heading mt={4} fontSize={{ base: '40px', md: '56px' }} fontWeight="400" lineHeight="1">Wisdom that serves the world.</Heading></Box><Box><Text fontFamily="heading" color="brand.navy" fontSize={{ base: '27px', md: '35px' }} lineHeight="1.35">Vishwa <Box as="span" fontFamily="body" fontStyle="normal" display="inline-block" verticalAlign="middle" lineHeight="1">-</Box> the world.<br />Hitay <Box as="span" fontFamily="body" fontStyle="normal" display="inline-block" verticalAlign="middle" lineHeight="1">-</Box> the welfare and well-being of all.</Text><Text mt={6} color="#514b44" lineHeight="1.9" fontSize="16px">Vishwa Hitay is a global ideas platform dedicated to translating civilisational wisdom into practical clarity for the challenges of modern life — leadership, governance, technology, and human flourishing. It speaks to leaders, students, founders, policymakers, technologists and seekers who want depth without dogma, and tradition without rigidity.</Text><Flex justify="flex-end" mt={7}><Link as={NextLink} href="/about" display="inline-flex" alignItems="center" gap={2} color="brand.saffron" fontWeight="600">Our story <FiArrowRight /></Link></Flex></Box></Grid></Container>
      </Box>

      <Box bg="brand.navy" color="brand.white" py={{ base: 16, md: 22 }}>
        <Container maxW="1240px">
          <Box maxW="780px" mb={10}>
            <Eyebrow light>Six-pillar framework</Eyebrow>
            <Heading mt={4} fontSize={{ base: '40px', md: '55px' }} fontWeight="400" lineHeight="1.05">One vision. Six dimensions.</Heading>
            <Text mt={6} color="rgba(255,255,255,.62)" lineHeight="1.85">Three expanding units of life meet three forces that shape them—connecting the family, society, and the world with leadership, prosperity, and technology.</Text>
          </Box>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing="1px" bg="rgba(255,255,255,.12)">
            {pillars.map(pillar => (
              <Box key={pillar.number} bg="brand.navy" p={7} minH="170px" display="flex" alignItems="center">
                <Heading fontSize="27px" fontWeight="400">{pillar.title}</Heading>
              </Box>
            ))}
          </SimpleGrid>
          <Flex justify="flex-end" mt={8}><Button as={NextLink} href="/framework" variant="outlineGold" rightIcon={<FiArrowRight />}>Explore the framework</Button></Flex>
        </Container>
      </Box>

      <Box bg="brand.parchment" py={{ base: 16, md: 22 }}>
        <Container maxW="1240px"><Flex justify="space-between" align="end" gap={6} mb={10} flexWrap="wrap"><Box><Eyebrow>Our foundation</Eyebrow><Heading mt={4} fontSize={{ base: '40px', md: '56px' }} fontWeight="400">A clear north star.</Heading></Box><Text maxW="420px" color="#625b52" lineHeight="1.8">Timeless principles become most powerful when they illuminate the choices in front of us today.</Text></Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="1px" bg="brand.mist" border="1px solid" borderColor="brand.mist"><Box bg="brand.white" p={{ base: 8, md: 12 }}><Text fontFamily="mono" color="brand.gold" fontSize="11px">01 / VISION</Text><Heading my={5} fontSize="34px" fontWeight="400">Civilisational wisdom, globally relevant.</Heading><Text color="#514b44" lineHeight="1.85">To become the world&apos;s leading platform for applying civilisational wisdom to contemporary global challenges.</Text></Box><Box bg="brand.navy" color="brand.white" p={{ base: 8, md: 12 }}><Text fontFamily="mono" color="brand.gold" fontSize="11px">02 / MISSION</Text><Heading my={5} fontSize="34px" fontWeight="400">Flourishing through timeless principles.</Heading><Text color="rgba(255,255,255,.68)" lineHeight="1.85">To identify, articulate and promote timeless principles that contribute to human flourishing, ethical leadership, social harmony and global well-being.</Text></Box></SimpleGrid>
        </Container>
      </Box>

      <Box py={{ base: 16, md: 22 }}><Container maxW="1240px"><Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={14} alignItems="center"><Box><Eyebrow>Explore our work</Eyebrow><Heading mt={4} fontSize={{ base: '42px', md: '62px' }} fontWeight="400" lineHeight="1">Many formats.<br />One purpose.</Heading><Text mt={6} maxW="500px" color="#625b52" lineHeight="1.85">Watch films and reels. Listen to deep conversations. Read considered essays. Join gatherings that turn reflection into community.</Text></Box><SimpleGrid columns={2} spacing={4}>{['Watch', 'Listen', 'Read', 'Events'].map((label, index) => <Box key={label} as={NextLink} href={['/watch','/podcasts','/blogs','/events'][index]} bg={index === 0 ? 'brand.saffron' : 'brand.parchment'} color={index === 0 ? 'white' : 'brand.navy'} p={{ base: 6, md: 8 }} minH="165px" display="flex" flexDirection="column" justifyContent="space-between" _hover={{ transform: 'translateY(-3px)' }} transition=".2s"><Flex justify="space-between" align="end" mt="auto"><Heading fontSize={{ base: '25px', md: '30px' }} fontWeight="400">{label}</Heading><FiArrowRight /></Flex></Box>)}</SimpleGrid></Grid></Container></Box>

      <Box py={{ base: 16, md: 22 }}>
        <Container maxW="1240px">
          <Eyebrow>Initiatives</Eyebrow>
          <Heading mt={4} fontSize={{ base: '40px', md: '56px' }} fontWeight="400">Ideas, brought to life.</Heading>
          <Box mt={10} py={10} borderTop="1px solid" borderColor="brand.mist">
            <Heading as="h3" fontSize={{ base: '28px', md: '36px' }} fontWeight="400" color="brand.navy">Coming soon</Heading>
            <Text mt={4} color="#625b52" fontSize="18px" lineHeight="1.8">Details of our initiatives will be shared here. Stay tuned.</Text>
          </Box>
        </Container>
      </Box>

      <Box bg="brand.ink" color="brand.white" py={{ base: 16, md: 22 }}>
        <Container maxW="1240px">
          <Eyebrow light>Blogs</Eyebrow>
          <Heading mt={4} fontSize={{ base: '40px', md: '56px' }} fontWeight="400">Read. Reflect. Reimagine.</Heading>
          <Box mt={10} py={10} borderTop="1px solid" borderColor="rgba(255,255,255,.13)">
            <Heading as="h3" fontSize={{ base: '28px', md: '36px' }} fontWeight="400" color="brand.gold">Coming soon</Heading>
            <Text mt={4} color="rgba(255,255,255,.72)" fontSize="18px" lineHeight="1.8">New essays and reflections will be shared here. Stay tuned.</Text>
          </Box>
        </Container>
      </Box>


      <Box bg="brand.parchment" py={{ base: 14, md: 18 }}><Container maxW="1240px" textAlign="center"><Text fontFamily="heading" fontSize={{ base: '32px', md: '48px' }} color="brand.navy">What if better ideas could build a better world?</Text><Text mt={4} color="#625b52">Join a growing community of thoughtful leaders, learners and seekers.</Text><Flex justify="flex-end" mt={7}><Button as={NextLink} href="/contact" variant="gold" rightIcon={<FiArrowRight />}>Join Vishwa Hitay</Button></Flex></Container></Box>
    </SiteShell>
  );
}
