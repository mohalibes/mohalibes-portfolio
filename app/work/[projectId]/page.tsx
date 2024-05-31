// /app/work/[projectId]/page.tsx
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { projects } from '@/app/data/projects-data';
import { Container, Title, Text, Badge, Space } from '@mantine/core';

const ProjectDetails = () => {
  const params = useParams();
  const projectId = params.projectId;
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
<div>
<Title order={2}>{project.title}</Title>
<Space h="xl"/>
<Text size='md'>{project.description}</Text>
</div>
  );
};

export default ProjectDetails;
