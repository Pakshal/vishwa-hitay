import { Box, Container, Heading, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import SiteShell from '../../components/SiteShell';
import PageHeader from '../../components/PageHeader';

function PolicySection({ title, children }) {
  return (
    <Box as="section">
      <Heading as="h2" fontSize={{ base: '26px', md: '30px' }} fontWeight="400" color="brand.navy">{title}</Heading>
      <Stack mt={4} spacing={4}>{children}</Stack>
    </Box>
  );
}

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Privacy Policy" title="Your trust matters.">How Vishwa Hitay Foundation collects, uses and protects your personal information.</PageHeader>
      <Container maxW="780px" py={16}>
        <Stack spacing={10} color="#625b52" fontSize="16px" lineHeight="1.9">
          <Stack spacing={4}>
            <Text>Vishwa Hitay Foundation operates the <Link href="https://vishwahitay.com" color="brand.navy" textDecoration="underline">vishwahitay.com</Link> website to share civilisational wisdom and practical ideas for leadership, governance, technology and human flourishing, and to connect visitors with our initiatives, events and community.</Text>
            <Text>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone wishes to associate with said website.</Text>
            <Text>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. Our Privacy Policy was created with the help of the Privacy Policy Template and the Privacy Policy Generator.</Text>
          </Stack>

          <PolicySection title="Information Collection and Use">
            <Text>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</Text>
          </PolicySection>

          <PolicySection title="Log Data">
            <Text>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer&apos;s Internet Protocol (&quot;IP&quot;) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</Text>
          </PolicySection>

          <PolicySection title="Cookies">
            <Text>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the website that you visit and are stored on your computer&apos;s hard drive.</Text>
            <Text>Our website uses these &quot;cookies&quot; to collect information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</Text>
          </PolicySection>

          <PolicySection title="Service Providers">
            <Text>We may employ third-party companies and individuals due to the following reasons:</Text>
            <UnorderedList pl={5} spacing={2}>
              <ListItem>To facilitate our Service;</ListItem>
              <ListItem>To provide the Service on our behalf;</ListItem>
              <ListItem>To perform Service-related services; or</ListItem>
              <ListItem>To assist us in analyzing how our Service is used.</ListItem>
            </UnorderedList>
            <Text>We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</Text>
          </PolicySection>

          <PolicySection title="Security">
            <Text>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</Text>
          </PolicySection>

          <PolicySection title="Links to Other Sites">
            <Text>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</Text>
          </PolicySection>

          <PolicySection title="Children's Privacy">
            <Text>Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.</Text>
          </PolicySection>

          <PolicySection title="Changes to This Privacy Policy">
            <Text>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</Text>
          </PolicySection>

          <PolicySection title="Contact Us">
            <Text>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</Text>
            <Text fontWeight="700" color="brand.navy">Vishwa Hitay Foundation</Text>
            <Text>Email: <Link href="mailto:marmikoffice@gmail.com" color="brand.navy" textDecoration="underline" overflowWrap="anywhere">marmikoffice@gmail.com</Link></Text>
            <Text>Registered office:<br />6th Floor, 601–604, Ratnanjali Square,<br />Prenatirth Derasar Road, Jodhpur Char Rasta,<br />Ahmedabad, Ahmadabad City,<br />Gujarat, India – 380015</Text>
          </PolicySection>
        </Stack>
      </Container>
    </SiteShell>
  );
}
