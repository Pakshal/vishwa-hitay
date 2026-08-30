import { Box, Container, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { FiPlay } from 'react-icons/fi';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';

const videos = [{ type: 'Video', title: 'Civilisational Wisdom for a Changing World', time: '12:40' }, { type: 'Video', title: 'What Does Vishwa Hitay Mean?', time: '06:18' }, { type: 'Reel', title: 'One idea: Vasudhaiva Kutumbakam', time: '00:58' }];
export default function WatchPage() { return <SiteShell><PageHeader eyebrow="Watch" title="Stories that make ideas visible.">Films, conversations and short-form reflections designed for a thoughtful pause.</PageHeader><Container maxW="1180px" py={16}><SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>{videos.map((video, i) => <Box key={video.title}><Box bg={i === 0 ? 'brand.navy' : 'brand.parchment'} color={i === 0 ? 'brand.gold' : 'brand.saffron'} aspectRatio="16/10" display="grid" placeItems="center" fontSize="34px"><FiPlay /></Box><Grid templateColumns="1fr auto" gap={4} mt={5}><Box><Text color="brand.saffron" fontSize="10px" letterSpacing=".15em" textTransform="uppercase">{video.type}</Text><Heading mt={2} fontSize="25px" fontWeight="400">{video.title}</Heading></Box><Text fontFamily="mono" fontSize="10px">{video.time}</Text></Grid></Box>)}</SimpleGrid></Container></SiteShell>; }
