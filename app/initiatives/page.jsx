import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';
import { initiatives } from '../../lib/content';

export default function InitiativesPage() { return <SiteShell><PageHeader eyebrow="Initiatives" title="Ideas, brought to life.">Programmes designed to move civilisational wisdom from reflection into meaningful practice.</PageHeader><Container maxW="1180px" py={16}>{initiatives.map(item => <Grid key={item.number} templateColumns={{ base: '55px 1fr', md: '90px .8fr 1.2fr' }} gap={7} py={9} borderTop="1px solid" borderColor="brand.mist"><Text fontFamily="mono" color="brand.gold">{item.number}</Text><Heading fontSize="30px" fontWeight="400">{item.title}</Heading><Text gridColumn={{ base: '2', md: 'auto' }} color="#625b52" lineHeight="1.8">{item.description}</Text></Grid>)}</Container></SiteShell>; }
