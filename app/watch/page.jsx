import { AspectRatio, Box, Button, Container, Heading, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';

const videos = [
  {
    videoId: 'hFHgI6rZqMk',
    title: 'Capital with conscience',
    speakers: [
      { name: 'Siddharth Shah', role: 'Host, Co-Founder PharmEasy' },
      { name: 'Vishal Gupta', role: 'Managing Partner, Bessemer Venture Partners' },
      { name: 'Ashutosh Taparia', role: 'Founder Ananta Capital and Managing Director of Guardian' },
      { name: 'Karan Sharma', role: 'Managing Director, Avendus' },
      { name: 'Yash Kela', role: 'Founder - Singularity AMC' },
    ],
  },
  {
    videoId: 'v9JI7J1c5mU',
    title: 'Healing the Global Family: Vasudhaiva Kutumbakam and AI Healthcare',
    speakers: [
      { name: 'Siddharth Shah', role: 'Co-Founder PharmEasy' },
      { name: 'Bhushan Akshikar', role: 'MD, GSK Pharma' },
      { name: 'Sanjiv Navangul', role: 'MD & CEO, Bharat Serums & Vaccines Ltd (A Mankind Group Company)' },
      { name: 'Rakesh Mehta', role: 'Former Head Global API business, Sun Pharma' },
      { name: 'Sudarshan Jain', role: 'Secretary General IPA' },
    ],
  },
  {
    videoId: 'Y-DiKa2V8X4',
    title: 'Vasudhaiva Kutumbakam: India’s Economic Philosophy in a Global World',
    speakers: [
      { name: 'Siddharth Shah', role: 'Co-Founder PharmEasy' },
      { name: 'S Gurumurthy', role: 'Part time Director, on the Central Board of the RBI' },
    ],
  },
  {
    videoId: '6GIPWvNr6ug',
    title: 'Beyond algorithms - Protecting HI in world of AI',
    speakers: [
      { name: 'Aman Jain', role: 'Founder, The Tenth House' },
      { name: 'Rishi Bal', role: 'CEO BharatGen' },
      { name: 'Siddharth Gadia', role: 'Co-Founder Zeno Health' },
      { name: 'Dr. Ravi Gudi', role: 'Deputy Director, IITB' },
      { name: 'Kundana K Lal', role: 'Founder Director, Vitti Research' },
    ],
  },
];

export default function WatchPage() {
  return (
    <SiteShell>
      <PageHeader centered eyebrow="Watch" title="Stories that make ideas visible.">Films, conversations and short-form reflections designed for a thoughtful pause.</PageHeader>
      <Container maxW="1180px" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {videos.map((video) => (
            <Box key={video.videoId} as="article" bg="brand.white" border="1px solid" borderColor="brand.mist" borderRadius="10px" overflow="hidden" display="flex" flexDirection="column">
              <AspectRatio ratio={16 / 9}>
                <Box
                  as="iframe"
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  border={0}
                />
              </AspectRatio>
              <Box p={{ base: 6, md: 8 }} flex="1" display="flex" flexDirection="column">
                <Heading as="h2" fontSize={{ base: '26px', md: '30px' }} fontWeight="400" lineHeight="1.2">{video.title}</Heading>
                <Heading as="h3" mt={6} mb={4} fontFamily="body" fontSize="16px" fontWeight="700" color="brand.navy">Speakers</Heading>
                <List spacing={4} mb={8}>
                  {video.speakers.map((speaker) => (
                    <ListItem key={speaker.name}>
                      <Text fontWeight="700" color="brand.navy">{speaker.name}</Text>
                      <Text mt={1} fontSize="16px" color="#625b52" lineHeight="1.6">{speaker.role}</Text>
                    </ListItem>
                  ))}
                </List>
                <Button as="a" href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" variant="gold" rightIcon={<FiExternalLink />} mt="auto" alignSelf="flex-end" aria-label={`Watch ${video.title} on YouTube (opens in a new tab)`}>Watch on YouTube</Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </SiteShell>
  );
}
