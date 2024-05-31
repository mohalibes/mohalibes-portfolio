"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { projects } from '@/app/data/projects-data';
import { Container, Title, Text, Badge, Space } from '@mantine/core';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Import lightgallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


const ProjectDetails = () => {
  const params = useParams();
  const projectId = params.projectId;
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Function to initialize lightGallery
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div>
      <Title order={2}>{project.title}</Title>
      <Space h="xl" />
      <Text size="md">{project.description}</Text>
      <Space h="xl" />

      {/* Image Gallery */}
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {project.images.map((image, index) => (
          <a key={index} href={image}>
            <img alt={`image-${index}`} src={image} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default ProjectDetails;
