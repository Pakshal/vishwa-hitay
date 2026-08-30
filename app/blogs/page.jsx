import NextLink from 'next/link';
import { Badge, Button, Container, SimpleGrid, Text } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';
import InfoCard from '../../components/InfoCard';
import { blogs } from '../../lib/content';

export default function BlogsPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Blogs" title="Essays for applied wisdom.">Sample blog cards that can later be connected to a CMS, markdown folder or database.</PageHeader>
      <Container maxW="1180px" py={14}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {blogs.map((blog) => <InfoCard key={blog.slug} label={blog.category} title={blog.title}><Text mb={5}>{blog.excerpt}</Text><Button as={NextLink} href={`/blogs/${blog.slug}`} variant="gold" size="sm">Read article</Button></InfoCard>)}
        </SimpleGrid>
      </Container>
    </SiteShell>
  );
}
