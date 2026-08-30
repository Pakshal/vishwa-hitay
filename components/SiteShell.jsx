'use client';

import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Button, Container, Divider, Flex, HStack, IconButton, Link, SimpleGrid, Stack, Text, useDisclosure, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerCloseButton } from '@chakra-ui/react';
import { FiArrowUpRight, FiMenu } from 'react-icons/fi';
import { navItems } from '../lib/content';

function NavLinks({ onNavigate }) {
  return navItems.map((item) => (
    <Link key={item.href} as={NextLink} href={item.href} onClick={onNavigate} fontSize="12px" fontWeight="500" letterSpacing=".08em" color="brand.navy" opacity={0.76} _hover={{ opacity: 1, color: 'brand.saffron', textDecoration: 'none' }}>
      {item.label}
    </Link>
  ));
}

export default function SiteShell({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="brand.white">
      <Box as="nav" position="sticky" top="0" zIndex="100" bg="rgba(253,250,245,.94)" backdropFilter="blur(16px)" borderBottom="1px solid" borderColor="brand.mist">
        <Container maxW="1240px" py={3}>
          <Flex align="center" justify="space-between" gap={7}>
            <HStack as={NextLink} href="/" spacing={3} flexShrink={0} _hover={{ textDecoration: 'none' }}>
              <Box position="relative" w="52px" h="52px" overflow="hidden" borderRadius="6px"><Image src="/logo.jpeg" alt="Vishwa Hitay" fill sizes="52px" style={{ objectFit: 'cover' }} priority /></Box>
              <Box display={{ base: 'none', sm: 'block' }}><Text fontFamily="heading" fontWeight="600" fontSize="23px" color="brand.navy" letterSpacing=".06em" lineHeight="1">Vishwa Hitay</Text><Text color="brand.saffron" fontSize="8px" mt={1} letterSpacing=".12em" textTransform="uppercase">Shaping a Better World for All</Text></Box>
            </HStack>
            <HStack spacing={{ lg: 5, xl: 7 }} display={{ base: 'none', lg: 'flex' }}><NavLinks /></HStack>
            <Button as={NextLink} href="/contact" rightIcon={<FiArrowUpRight />} variant="gold" size="sm" display={{ base: 'none', md: 'inline-flex' }}>Join the conversation</Button>
            <IconButton display={{ base: 'inline-flex', lg: 'none' }} icon={<FiMenu />} onClick={onOpen} aria-label="Open menu" variant="ghost" color="brand.navy" fontSize="22px" />
          </Flex>
        </Container>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}><DrawerOverlay /><DrawerContent bg="brand.white"><DrawerCloseButton color="brand.navy" /><DrawerBody pt={20}><Stack spacing={7}><NavLinks onNavigate={onClose} /><Divider /><Link as={NextLink} href="/contact" onClick={onClose} color="brand.saffron">Contact us</Link></Stack></DrawerBody></DrawerContent></Drawer>
      <Box as="main">{children}</Box>
      <Box as="footer" bg="brand.ink" color="rgba(253,250,245,.65)" pt={16} pb={8}>
        <Container maxW="1240px">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} alignItems="start">
            <Box><Text fontFamily="heading" color="brand.white" fontSize="34px">Vishwa Hitay</Text><Text mt={3} maxW="280px" lineHeight="1.8" fontSize="14px">Civilisational wisdom. Contemporary clarity. The well-being of all.</Text></Box>
            <Box><Text color="brand.gold" fontSize="11px" letterSpacing=".18em" textTransform="uppercase" mb={4}>Explore</Text><SimpleGrid columns={2} gap={3}>{[...navItems, { label: 'Press', href: '/press' }, { label: 'Contact', href: '/contact' }].map(item => <Link key={item.href} as={NextLink} href={item.href} fontSize="13px" _hover={{ color: 'brand.gold' }}>{item.label}</Link>)}</SimpleGrid></Box>
            <Box><Text color="brand.gold" fontSize="11px" letterSpacing=".18em" textTransform="uppercase" mb={4}>Stay connected</Text><Text fontFamily="heading" color="brand.white" fontSize="25px" lineHeight="1.2">Ideas worth carrying into the world.</Text><Button as={NextLink} href="/contact" mt={5} size="sm" variant="outlineGold">Become a subscriber</Button></Box>
          </SimpleGrid>
          <Divider my={9} borderColor="whiteAlpha.200" />
          <Flex justify="space-between" gap={4} flexWrap="wrap" fontSize="11px">
            <Text>© {new Date().getFullYear()} Vishwa Hitay. All rights reserved. · CIN: U85500GJ2025NPL169102</Text>
            <Link as={NextLink} href="/privacy">Privacy Policy</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
