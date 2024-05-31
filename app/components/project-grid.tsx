// /components/ProjectGrid.js
import React, { useState } from 'react';
import { Grid, Text, useMantineTheme, Container, Title, Badge, Space } from '@mantine/core';
import Link from 'next/link';
import { projects } from '../data/projects-data';

export function ProjectGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const theme = useMantineTheme();

  return (
    <div>
      <Grid gutter="xs">
        {projects.map((project, index) => (
          <Grid.Col span={6} key={index}>
            <Link href={project.route} style={{ textDecoration: 'none' }}>
              <Container
                style={{
                  background: theme.colors.gray[9],
                  border: hoveredIndex === index ? `2px solid ${theme.colors.green[6]}` : '2px solid transparent',
                  padding: '20px',
                  boxSizing: 'border-box',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {React.cloneElement(project.icon, {
                  style: {
                    ...(project.icon.props.style || {}),
                    color: hoveredIndex === index ? theme.colors.green[6] : 'white',
                  }
                })}
                <Title order={5} style={{ marginBottom: '10px' }}>{project.title}</Title>
                <Badge color={theme.colors[project.badgeColor][6]} size="md" radius="xs" autoContrast>{project.badgeText}</Badge>
                <Space h="md"></Space>
                <Text size='md' lineClamp={4} style={{ marginBottom: '10px' }}>{project.description}</Text>
                <Title order={5}
                  style={{
                    textDecoration: hoveredIndex === index ? `underline ${theme.colors.green[6]}` : 'none',
                  }}
                >
                  Learn more..
                </Title>
              </Container>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}
