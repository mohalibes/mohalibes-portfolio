// /data/projects-data.js
import { rem } from '@mantine/core';
import { IconRobot, IconHealthRecognition } from '@tabler/icons-react';

export const projects = [
  {
    id: '1',
    icon: <IconRobot style={{ width: rem(40), height: rem(40), paddingBottom: '10px', color: 'white' }} stroke={1.5} />,
    title: 'TANITTrader: Intelligent Trading Platform',
    badgeColor: 'green',
    badgeText: 'Python',
    description: 'By leveraging the power of Machine Learning and statistical models, this project aimed to develop an intelligent trading platform adapted to the Tunisian stock market. The platform allows its users to...',
    route: '/work/1'
  },
  {
    id: '2',
    icon: <IconHealthRecognition style={{ width: rem(40), height: rem(40), paddingBottom: '10px', color: 'white' }} stroke={1.5} />,
    title: 'Hygéia: Healthcare management app',
    badgeColor: 'green',
    badgeText: 'Php',
    description: 'Hygéia is a comprehensive healthcare management app that facilitates the management of patient records, appointments, and medical histories. The app provides an intuitive interface for both patients and healthcare providers...',
    route: '/work/2'
  }
];
