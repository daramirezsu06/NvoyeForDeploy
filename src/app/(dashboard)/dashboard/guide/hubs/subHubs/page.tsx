import { Stack } from '@mui/material';
import { jsonPropuesto } from '../components/jsonPropuesto';
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
    <Stack>
      <SubCategory_Header infoHeader={{ name, tags }} />
      <Finance financeInfo={detail.finance} />
      <RecommendedTasks recomendedTaskInfo={detail.recomendedTasks} />
      {detail.bulletedLists.map((list, index) => {
        return <BulletedList key={index} bulletInfo={list} />;
      })}
      {detail.tables.map((table, index) => {
        return <TableHubs key={index} tableInfo={table} />;
      })}

      <TextButton info={overview} />

      <ResourceList resourceInfo={detail.resources} />
    </Stack>
  );
}
