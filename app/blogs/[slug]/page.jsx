import { notFound } from 'next/navigation';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SiteShell from '../../../components/SiteShell';
import PageHeader from '../../../components/PageHeader';
import { blogs } from '../../../lib/content';

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogDetailPage({ params }) {
  const blog = blogs.find((item) => item.slug === params.slug);
  if (!blog) notFound();
  return (
    <SiteShell>
      <PageHeader eyebrow={blog.category} title={blog.title}>{blog.excerpt}</PageHeader>
      <Container maxW="820px" py={14}>
        <Box bg="brand.parchment" p={{ base: 7, md: 10 }} borderRadius="12px">
          <Heading fontSize="34px" fontWeight="400" mb={5}>Sample article body</Heading>
          <Text fontSize="18px" lineHeight="1.9" color="#4a4540">This is a placeholder article page. Replace this content with your full essay, references, author details, images and call-to-action.</Text>
          <Text fontSize="18px" lineHeight="1.9" color="#4a4540" mt={5}>Recommended structure: hook, ancient source, modern parallel, practical framework, closing reflection and references.</Text>
        </Box>
      </Container>
    </SiteShell>
  );
}
