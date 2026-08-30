import NextLink from 'next/link';
import { Box, Button, Container, Divider, Flex, Grid, Heading, HStack, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import SiteShell from '../components/SiteShell';
import { blogs, initiatives, pillars } from '../lib/content';

const Eyebrow = ({ children, light = false }) => <Text color={light ? 'brand.gold' : 'brand.saffron'} fontSize="11px" fontWeight="700" letterSpacing=".22em" textTransform="uppercase">{children}</Text>;

export default function Home() {
  return (
    <SiteShell>
      <Box bg="brand.navy" color="brand.white" position="relative" overflow="hidden">
        <Box position="absolute" w={{ base: '420px', md: '760px' }} h={{ base: '420px', md: '760px' }} border="1px solid rgba(201,168,76,.16)" borderRadius="full" right={{ base: '-280px', md: '-260px' }} top={{ base: '-80px', md: '-250px' }} />
        <Box position="absolute" w={{ base: '300px', md: '540px' }} h={{ base: '300px', md: '540px' }} border="1px solid rgba(201,168,76,.11)" borderRadius="full" right={{ base: '-200px', md: '-150px' }} top={{ base: '-20px', md: '-140px' }} />
        <Container maxW="1240px" py={{ base: 20, md: 28 }} position="relative">
          <Grid templateColumns={{ base: '1fr', lg: '1.25fr .75fr' }} gap={14} alignItems="end">
            <Box><Eyebrow light>Ideas for human flourishing</Eyebrow><Heading mt={7} fontWeight="300" fontSize={{ base: '54px', md: '86px', xl: '96px' }} lineHeight=".91" letterSpacing="-.03em">Ancient wisdom.<br /><Box as="span" color="brand.gold" fontStyle="italic">Modern clarity.</Box></Heading></Box>
            <Stack spacing={7} pb={{ lg: 2 }}><Text color="rgba(253,250,245,.72)" fontSize={{ base: '17px', md: '19px' }} lineHeight="1.8">Translating civilisational wisdom into practical ideas for leadership, governance, technology and human flourishing.</Text><HStack spacing={4} flexWrap="wrap"><Button as={NextLink} href="/about" variant="gold" rightIcon={<FiArrowRight />}>Discover Vishwa Hitay</Button><Button as={NextLink} href="/watch" variant="outlineGold" leftIcon={<FiPlay />}>Watch our stories</Button></HStack></Stack>
          </Grid>
          <Flex mt={{ base: 16, md: 24 }} pt={6} borderTop="1px solid rgba(255,255,255,.13)" justify="space-between" align="center" gap={5}><Text fontFamily="heading" color="brand.gold" fontSize={{ base: '18px', md: '24px' }}>वसुधैव कुटुम्बकम्</Text><Text maxW="470px" textAlign="right" color="rgba(253,250,245,.5)" fontSize="11px" letterSpacing=".1em" textTransform="uppercase">The world is one family</Text></Flex>
        </Container>
      </Box>

      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="1240px"><Grid templateColumns={{ base: '1fr', md: '.75fr 1.25fr' }} gap={{ base: 8, md: 20 }}><Box><Eyebrow>About Vishwa Hitay</Eyebrow><Heading mt={4} fontSize={{ base: '40px', md: '56px' }} fontWeight="400" lineHeight="1">Wisdom that serves the world.</Heading></Box><Box><Text fontFamily="heading" color="brand.navy" fontSize={{ base: '27px', md: '35px' }} lineHeight="1.35">Vishwa — the world.<br />Hitay — the welfare and well-being of all.</Text><Text mt={6} color="#514b44" lineHeight="1.9" fontSize="16px">Vishwa Hitay is a global ideas platform dedicated to translating civilisational wisdom into practical clarity for the challenges of modern life — leadership, governance, technology, and human flourishing. It speaks to leaders, students, founders, policymakers, technologists and seekers who want depth without dogma, and tradition without rigidity.</Text><Link as={NextLink} href="/about" mt={7} display="inline-flex" alignItems="center" gap={2} color="brand.saffron" fontWeight="600">Our story <FiArrowRight /></Link></Box></Grid></Container>
      </Box>

      <Box bg="brand.navy" color="brand.white" py={{ base: 16, md: 22 }}>
        <Container maxW="1240px">
          <Grid templateColumns={{ base: '1fr', lg: '.75fr 1.25fr' }} gap={{ base: 10, lg: 16 }} alignItems="start">
            <Box position={{ lg: 'sticky' }} top={{ lg: '120px' }}><Eyebrow light>Six-pillar framework</Eyebrow><Heading mt={4} fontSize={{ base: '40px', md: '55px' }} fontWeight="400" lineHeight="1.05">One vision.<br />Six dimensions.</Heading><Text mt={6} color="rgba(255,255,255,.62)" lineHeight="1.85">Three expanding units of life meet three forces that shape them—connecting the family, society, and the world with leadership, prosperity, and technology.</Text><Button as={NextLink} href="/framework" mt={8} variant="outlineGold" rightIcon={<FiArrowRight />}>Explore the framework</Button></Box>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="1px" bg="rgba(255,255,255,.12)">{pillars.map(pillar => <Box key={pillar.number} bg="brand.navy" p={7} minH="170px"><Text fontFamily="mono" color="brand.gold" fontSize="10px">{pillar.number}</Text><Heading mt={7} fontSize="27px" fontWeight="400">{pillar.title}</Heading><Text mt={3} color="rgba(255,255,255,.42)" fontSize="10px" letterSpacing=".1em" textTransform="uppercase">{pillar.group}</Text></Box>)}</SimpleGrid>
          </Grid>
        </Container>
      </Box>

      <Box bg="brand.parchment" py={{ base: 16, md: 22 }}>
        <Container maxW="1240px"><Flex justify="space-between" align="end" gap={6} mb={10} flexWrap="wrap"><Box><Eyebrow>Our foundation</Eyebrow><Heading mt={4} fontSize={{ base: '40px', md: '56px' }} fontWeight="400">A clear north star.</Heading></Box><Text maxW="420px" color="#625b52" lineHeight="1.8">Timeless principles become most powerful when they illuminate the choices in front of us today.</Text></Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="1px" bg="brand.mist" border="1px solid" borderColor="brand.mist"><Box bg="brand.white" p={{ base: 8, md: 12 }}><Text fontFamily="mono" color="brand.gold" fontSize="11px">01 / VISION</Text><Heading my={5} fontSize="34px" fontWeight="400">Civilisational wisdom, globally relevant.</Heading><Text color="#514b44" lineHeight="1.85">To become the world&apos;s leading platform for applying civilisational wisdom to contemporary global challenges.</Text></Box><Box bg="brand.navy" color="brand.white" p={{ base: 8, md: 12 }}><Text fontFamily="mono" color="brand.gold" fontSize="11px">02 / MISSION</Text><Heading my={5} fontSize="34px" fontWeight="400">Flourishing through timeless principles.</Heading><Text color="rgba(255,255,255,.68)" lineHeight="1.85">To identify, articulate and promote timeless principles that contribute to human flourishing, ethical leadership, social harmony and global well-being.</Text></Box></SimpleGrid>
        </Container>
      </Box>

      <Box py={{ base: 16, md: 22 }}><Container maxW="1240px"><Eyebrow>Initiatives</Eyebrow><Heading mt={4} mb={10} fontSize={{ base: '40px', md: '56px' }} fontWeight="400">Ideas, brought to life.</Heading><Stack spacing={0}>{initiatives.map((item) => <Grid key={item.number} templateColumns={{ base: '55px 1fr', md: '90px .8fr 1.2fr' }} gap={{ base: 3, md: 8 }} py={8} borderTop="1px solid" borderColor="brand.mist" alignItems="start"><Text color="brand.gold" fontFamily="mono" fontSize="12px">{item.number}</Text><Heading fontSize={{ base: '25px', md: '30px' }} fontWeight="400">{item.title}</Heading><Text gridColumn={{ base: '2', md: 'auto' }} color="#625b52" lineHeight="1.8">{item.description}</Text></Grid>)}</Stack><Button as={NextLink} href="/initiatives" mt={8} variant="outlineGold" color="brand.saffron" borderColor="brand.saffron" rightIcon={<FiArrowRight />}>Explore all initiatives</Button></Container></Box>

      <Box bg="brand.ink" color="brand.white" py={{ base: 16, md: 22 }}><Container maxW="1240px"><Flex justify="space-between" align="end" mb={10} gap={5} flexWrap="wrap"><Box><Eyebrow light>Latest ideas</Eyebrow><Heading mt={4} fontSize={{ base: '40px', md: '56px' }} fontWeight="400">Read. Reflect. Reimagine.</Heading></Box><Link as={NextLink} href="/blogs" color="brand.gold">View all essays →</Link></Flex><SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="1px" bg="rgba(255,255,255,.13)">{blogs.map((blog, index) => <Box key={blog.slug} as={NextLink} href={`/blogs/${blog.slug}`} bg="brand.ink" p={7} minH="310px" display="flex" flexDirection="column" _hover={{ bg: '#24201c' }}><Text color="brand.gold" fontFamily="mono" fontSize="10px">0{index + 1} · {blog.category.toUpperCase()}</Text><Heading mt={9} fontSize="27px" fontWeight="400" lineHeight="1.15">{blog.title}</Heading><Text mt="auto" pt={7} color="rgba(255,255,255,.55)" fontSize="13px" lineHeight="1.7">{blog.excerpt}</Text></Box>)}</SimpleGrid></Container></Box>

      <Box py={{ base: 16, md: 22 }}><Container maxW="1240px"><Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={14} alignItems="center"><Box><Eyebrow>Explore our work</Eyebrow><Heading mt={4} fontSize={{ base: '42px', md: '62px' }} fontWeight="400" lineHeight="1">Many formats.<br />One purpose.</Heading><Text mt={6} maxW="500px" color="#625b52" lineHeight="1.85">Watch films and reels. Listen to deep conversations. Read considered essays. Join gatherings that turn reflection into community.</Text></Box><SimpleGrid columns={2} spacing={4}>{['Watch', 'Listen', 'Read', 'Events'].map((label, index) => <Box key={label} as={NextLink} href={['/watch','/podcasts','/blogs','/events'][index]} bg={index === 0 ? 'brand.saffron' : 'brand.parchment'} color={index === 0 ? 'white' : 'brand.navy'} p={{ base: 6, md: 8 }} minH="165px" display="flex" flexDirection="column" justifyContent="space-between" _hover={{ transform: 'translateY(-3px)' }} transition=".2s"><Text fontFamily="mono" fontSize="10px">0{index + 1}</Text><Flex justify="space-between" align="end"><Heading fontSize={{ base: '25px', md: '30px' }} fontWeight="400">{label}</Heading><FiArrowRight /></Flex></Box>)}</SimpleGrid></Grid></Container></Box>

      <Box bg="brand.parchment" py={{ base: 14, md: 18 }}><Container maxW="1240px" textAlign="center"><Text fontFamily="heading" fontSize={{ base: '32px', md: '48px' }} color="brand.navy">What if better ideas could build a better world?</Text><Text mt={4} color="#625b52">Join a growing community of thoughtful leaders, learners and seekers.</Text><Button as={NextLink} href="/contact" mt={7} variant="gold" rightIcon={<FiArrowRight />}>Join Vishwa Hitay</Button></Container></Box>
    </SiteShell>
  );
}
