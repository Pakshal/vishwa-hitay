import { Container, Table, Tbody, Td, Th, Thead, Tr, Box } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';
import { references } from '../../lib/content';

export default function ReferencesPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="References" title="Sources behind the posts.">Maintain transparency by listing the texts, articles and research used to create podcasts, blogs and social posts.</PageHeader>
      <Container maxW="980px" py={14}>
        <Box overflowX="auto" border="1px solid" borderColor="brand.mist" borderRadius="12px">
          <Table variant="simple" bg="brand.white">
            <Thead bg="brand.ink"><Tr><Th color="brand.gold">Reference</Th><Th color="brand.gold">Used For</Th></Tr></Thead>
            <Tbody>{references.map((item) => <Tr key={item.title}><Td fontWeight="600">{item.title}</Td><Td color="#4a4540">{item.use}</Td></Tr>)}</Tbody>
          </Table>
        </Box>
      </Container>
    </SiteShell>
  );
}
