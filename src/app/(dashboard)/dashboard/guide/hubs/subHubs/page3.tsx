import { Grid, Stack } from '@mui/material';
import { jsonPropuesto } from '../components/examples/jsonPropuesto';
import Finance from '../components/finance';
import RecommendedTasks from '../components/recommendedTasks';
import BulletedList from '../components/bulletedList';
import TableHubs from '../components/table';
import TextButton from '../components/textButton';
import Text from '../components/text';
import ResourceList from '../components/resourceList';
import SubCategory_Header from '../components/subCategory_Header';
export default function SubHubs() {
  const { name, tags, overview, detail } = jsonPropuesto.data;
  return (
    <Grid container spacing={2} sx={{ px: 2 }}>
      <Grid item xs={8}>
        <Stack spacing={2}>
          <SubCategory_Header infoHeader={{ name, tags }} />
          <TextButton info={overview} />

          {detail.bulletedLists.map((list, index) => {
            return <BulletedList key={index} bulletInfo={list} />;
          })}
          {detail.tables.map((table, index) => {
            return <TableHubs key={index} tableInfo={table} />;
          })}
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stack spacing={2}>
          <RecommendedTasks recomendedTaskInfo={detail.recomendedTasks} />
          <Finance financeInfo={detail.finance} />
          <ResourceList resourceInfo={detail.resources} />
        </Stack>
      </Grid>
    </Grid>
  );
}
