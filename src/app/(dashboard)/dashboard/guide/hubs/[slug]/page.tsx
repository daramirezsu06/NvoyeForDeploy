'use client';
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
} from '@mui/material';
import BulletedList from '../components/bulletedList';
import TableHubs from '../components/table';
import TextButton from '../components/textButton';
import SubCategory_Header from '../components/subCategory_Header';
import Finance2 from '../components/CategoryAditionalInfo';
import RecommendedTasks2 from '../components/recommendedTasks2';
import ResourceList2 from '../components/resourceList2';
import { subHubsJson } from '../components/subHubsJson';
import Link from 'next/link';
import { ChevronRight } from '@mui/icons-material';
import CategoryBottomNavigation from './CategoryBottomNavigation';
import { toCamelCase } from '@/src/utils/helpers/toCamelCase';
import { AditionalInfo } from '../../../user/profile/components/AditionalInfo';
import CategoryAditionalInfo from '../components/CategoryAditionalInfo';
import { useState } from 'react';

export default function SubHubs({
  params,
}: {
  params: { slug: string }; // Permitir un string genérico para `slug`
}) {
  const camelCaseKey = toCamelCase(params.slug); // Convertir el slug

  // Validar si la clave existe en `subHubsJson`
  if (!(camelCaseKey in subHubsJson)) {
    throw new Error(`Invalid slug: ${params.slug}`);
  }

  const { name, tags, overview, PrincipalContent, rightContend, description } =
    subHubsJson[camelCaseKey as keyof typeof subHubsJson];

  const rightContentTitles = rightContend.map((content) => content.data.title);
  const tabs = ['Overview', ...rightContentTitles];

  // Estado para manejar la pestaña activa
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

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
      case 'categoryAditionalInfo':
        return (
          <CategoryAditionalInfo key={index} financeInfo={component.data} />
        );
      case 'resources':
        return <ResourceList2 key={index} resourceInfo={component.data} />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'stretch',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '1440px',
          minHeight: { xs: '100vh', sm: 'calc(100vh - 190px)' },
          // maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
          flex: 1,
          paddingBottom: '190px',
        }}
      >
        {/* Breadcrumbs to be seen only in big screens */}
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
              href={`/dashboard/guide/hubs/subHubs/${name}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {name}
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
            paddingBottom: { xs: '', sm: '190px' },
          }}
        >
          {/* //LEft column */}
          <Stack
            // spacing={2}
            sx={{
              flex: 1,
            }}
          >
            <SubCategory_Header infoHeader={{ name, tags }} />

            {/* tabs to be seen only in small screens */}
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              sx={{
                display: { xs: 'flex', sm: 'none' },
                backgroundColor: '#F5F3F1',
                marginTop: 2,
              }}
            >
              {tabs.map((title, index) => (
                <Tab
                  key={index}
                  label={title}
                  sx={{ textTransform: 'none', fontSize: '1rem' }}
                />
              ))}
            </Tabs>
            {/* Overview component */}
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                p: 3,
                borderRadius: 2,
                backgroundColor: '#F5F3F1',
                marginTop: { xs: 0, sm: 2 },
              }}
            >
              {/* {overview && (
              <TextButton info={{ title: 'Overview', text: overview }} />
            )}
            {PrincipalContent.map((component, index) =>
              renderComponent(component, index)
            )} */}
              {activeTab === 0 ? (
                <>
                  <TextButton info={{ title: 'Overview', text: overview }} />
                  {PrincipalContent.map((component, index) =>
                    renderComponent(component, index)
                  )}
                </>
              ) : (
                renderComponent(
                  rightContend[activeTab - 1], // Ajusta índice para rightContend
                  activeTab - 1
                )
              )}
            </Stack>
          </Stack>

          {/* //Right column */}
          <Stack
            spacing={2}
            sx={{
              display: { xs: 'none', sm: 'block' },
              // width: { xs: '100%', md: '100%' },
              minWidth: { xs: '', md: '350px' },
              maxWidth: { xs: '100%', md: '400px' },
            }}
          >
            {rightContend.map((component, index) =>
              renderComponent(component, index)
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
