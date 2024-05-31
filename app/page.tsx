"use client"
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { ProjectGrid } from "./components/project-grid";
import { Badge, Button, Container, Flex, Grid, Skeleton, Space, Text, Title, rem, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { SocialLinks } from "./components/social-links";
import { useDisclosure } from "@mantine/hooks";



export default function Home() {
  return (
    <div>
    <Title order={2}>Mohamed Ali BESBES</Title>
    <Title order={3}> <ReactTyped strings={["Data Scientist", "Software Engineer", "ML Engineer"]} typeSpeed={100} loop /></Title>
    <Space h="xl"/>
    <Text size='md'>Hey there👋 My name is Mohamed Ali and I am currently an engineering student in IT at ESPRIT in Tunisia. My interests are in AI and Data Science and I also possess skills in web development with several frameworks.</Text>
    <Space h='xl'/>
    {/* Projects grid */}
    <Title order={4}>projects:</Title>
    <Space h="md" />
      <ProjectGrid/>
      <Space h="xl" />
      {/* Social media links */}
      <Title order={4}>reach me:</Title>
    <Space h="md" />
    <SocialLinks/>
    </div>
  );
}
