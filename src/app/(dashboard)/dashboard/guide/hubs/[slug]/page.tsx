import { Box, Breadcrumbs, Container, Grid, Stack } from '@mui/material';
import BulletedList from '../components/bulletedList';
import TableHubs from '../components/table';
import TextButton from '../components/textButton';
import SubCategory_Header from '../components/subCategory_Header';
import Finance2 from '../components/finance2';
import RecommendedTasks2 from '../components/recommendedTasks2';
import ResourceList2 from '../components/resourceList2';
import { subHubsJson } from '../components/subHubsJson';
import Link from 'next/link';
import { ChevronRight } from '@mui/icons-material';

export default function SubHubs({
  params,
}: {
  params: { slug: keyof typeof subHubsJson };
}) {
  const { name, tags, overview, PrincipalContent, rightContend, description } =
    subHubsJson[params.slug];

  const renderComponent = (
    component: { type: string; data: any },
    index: number
  ) => {
    switch (component.type) {
      case 'list':
        return <BulletedList key={index} bulletInfo={component.data} />;
      case 'table':
        return <TableHubs key={index} tableInfo={component.data} />;
      case 'recomendedTasks':
        return (
          <RecommendedTasks2 key={index} recomendedTaskInfo={component.data} />
        );
      case 'financial':
        return <Finance2 key={index} financeInfo={component.data} />;
      case 'resource':
        return <ResourceList2 key={index} resourceInfo={component.data} />;
      default:
        return null;
    }
  };

  return (
    <Container
      sx={{
        // px: 2,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: { xs: '100vh', sm: 'calc(100vh - 64px)' },
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },

        flex: 1,
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'row',
          width: '100%',
          paddingTop: 3,
        }}
      >
        <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRight />}>
          <Link
            href="/dashboard/guide/hubs"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Hubs
          </Link>
          <Link
            href="/dashboard/guide/hubs/subHubs"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Hub Name
          </Link>
          <Link
            href="/dashboard/guide/hubs/subHubs/actualCategory"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            actual category
          </Link>
        </Breadcrumbs>
      </Box>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
          gap: 3,
          paddingTop: 3,
        }}
      >
        {/* //LEft column */}
        <Stack spacing={2}>
          <SubCategory_Header infoHeader={{ name, tags }} />
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              p: 3,
              borderRadius: 2,
              backgroundColor: '#F5F3F1',
            }}
          >
            {overview && (
              <TextButton info={{ title: 'Overview', text: overview }} />
            )}
            {PrincipalContent.map((component, index) =>
              renderComponent(component, index)
            )}
          </Stack>
        </Stack>

        {/* //Right column */}
        <Stack spacing={2}>
          {rightContend.map((component, index) =>
            renderComponent(component, index)
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
