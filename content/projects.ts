import { Project } from '@types';

const projects: Project[] = [
  {
    title: 'Rememoir',
    description:
      'Eine Fullstack App in der Nutzer Daten wie Links oder Notizen sicher durch Verschlüsselung gesammelt speichern können.',
    descriptionEn:
      'A fullstack App that allows Users to securly save data like links or notes.',
    tech: ['Vue', 'Express.js', 'Typescript', 'GraphQL', 'RxDB'],
    slug: 'rememoir',
    type: 'Fullstack',
    githubUrl: 'https://github.com/venturh/rememoir',
    pageUrl: 'https://intelligent-top-production.up.railway.app/',
    year: '2021',
  },
  {
    title: 'Discord Util Bot',
    description:
      'Ein persönlicher Discord Bot, der den aktuellen Status eines Nutzers anzeigt',
    descriptionEn:
      'Personal discord bot to display the current status of a selected user.',
    tech: ['Node', 'Express', 'Typescript', 'Redis', 'DiscordJS'],
    slug: 'discordapi',
    type: 'Backend',
    githubUrl: 'https://github.com/Venturh/discordapi',
    pageUrl: 'https://discord-api-production.up.railway.app/presence',
    year: '2021',
  },
  {
    title: 'werpers.dev',
    description:
      'Meine persönliche Website auf der ich meine Erfahrungen und Projekte teile.',
    descriptionEn:
      'My personal portfolio, where I display my current works and experiences.',
    tech: ['React', 'Next.js', 'Typescript'],
    slug: 'werpers.dev',
    type: 'Frontend',
    githubUrl: 'https://github.com/venturh/werpers.dev',

    pageUrl: 'https://werpers.dev/',
    year: '2020',
  },
  {
    title: 'EIA Note',
    description: 'Eine hybride Todo App',
    descriptionEn: 'A hybrid todo app',
    tech: ['React', 'Ionic', 'Typescript'],
    slug: 'eianote',
    type: 'Frontend',
    githubUrl: 'https://github.com/Venturh/EIANote',
    pageUrl: 'https://eianode.web.app/',
    year: '2020',
  },
  {
    title: 'Yee',
    description: 'Eine Desktop App zur Steuerung von Yeelight Smart Lichtern.',
    descriptionEn:
      'A desktop app for mac and windows to manage Yeelight Smart Lamps.',
    tech: ['Vue', 'Electron'],
    slug: 'yee',
    type: 'Frontend',
    githubUrl: 'https://github.com/Venturh/Yee',
    pageUrl: '',
    year: '2020',
  },
  {
    title: 'Pokecoin Miner',
    description:
      'Das ist mein erstes Webprojekt, erstellt für den Webengine Kurs der Hochschule.',
    descriptionEn: 'This is my first web app build for my uni webengine class.',
    tech: ['React', 'Bootstrap'],
    slug: 'pokecoin',
    type: 'Frontend',
    githubUrl: 'https://github.com/Venturh/pokecoin-miner',
    pageUrl: 'https://pokecoinminer.netlify.com/',
    year: '2019',
  },
];

export default projects;
