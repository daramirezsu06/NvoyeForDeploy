import { Grid, Stack } from '@mui/material';
import BulletedList from '../components/bulletedList';
import TableHubs from '../components/table';
import TextButton from '../components/textButton';
import SubCategory_Header from '../components/subCategory_Header';
import Finance2 from '../components/finance2';
import RecommendedTasks2 from '../components/recommendedTasks2';
import ResourceList2 from '../components/resourceList2';
import { subHubsJson } from '../components/subHubsJson';

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
    <Grid container spacing={2} sx={{ px: 2 }}>
      <Grid item xs={8}>
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
            <TextButton info={overview} />
            {PrincipalContent.map((component, index) =>
              renderComponent(component, index)
            )}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stack spacing={2}>
          {rightContend.map((component, index) =>
            renderComponent(component, index)
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}
