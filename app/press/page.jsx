import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';
export default function PressPage() { return <SiteShell><PageHeader eyebrow="Press" title="Vishwa Hitay in the world.">News, announcements and resources for media enquiries.</PageHeader><Container maxW="900px" py={16}><Box borderY="1px solid" borderColor="brand.mist" py={10}><Text color="brand.saffron" fontSize="11px" letterSpacing=".16em">PRESS DESK</Text><Heading mt={4} fontSize="32px" fontWeight="400">Media resources are coming soon.</Heading><Text mt={4} color="#625b52">Interview information, background notes and direct press contact details will appear here.</Text></Box></Container></SiteShell>; }
