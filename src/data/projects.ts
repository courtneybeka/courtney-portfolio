// Project types
export type ProjectCategory = 'All' | 'UX/UI' | 'Branding' | 'Web Design' | 'Mobile Apps';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'All'>;
  image: string;
  slug: string;
  year?: string;
  client?: string;
}

// Projects array - ordered by most recent first
export const projects: Project[] = [
  {
    id: '1',
    title: 'Alberta Parks App Redesign',
    description: 'Complete redesign of the Parks Canada Reservation Service app to improve usability, accessibility, and visual consistency.',
    category: 'UX/UI',
    image: '/img/projects/alberta-parks-app/thumbnail.jpg',
    slug: '/projects/alberta-parks-app',
    year: '2024',
    client: 'Parks Canada (Conceptual)'
  },
  {
    id: '2',
    title: 'Shadows of the Sanatorium Game',
    description: 'Immersive mystery-horror game design with narrative development and UX/UI through collaborative design sprint.',
    category: 'UX/UI',
    image: '/img/projects/shadows-sanatorium/Character Process/DESN433_Moodboard_2DRogue.jpg',
    slug: '/projects/shadows-sanatorium',
    year: '2024',
    client: 'Team Project'
  },
  {
    id: '3',
    title: 'Edmonton 311 App Redesign',
    description: 'UI/UX redesign of the City of Edmonton\'s 311 mobile app for reporting civic issues and improving user experience.',
    category: 'UX/UI',
    image: '/img/projects/edmonton-311-app/DESN342_P3_BekaCourtney_SchaferMax_EmeryJesse_Presentation_Page_21.jpg',
    slug: '/projects/edmonton-311-app',
    year: '2024',
    client: 'City of Edmonton (Conceptual)'
  },
  {
    id: '4',
    title: 'EIFF Brand Elevation',
    description: 'Full rebranding initiative for Edmonton International Film Festival to modernize visual identity and strengthen audience appeal.',
    category: 'Branding',
    image: '/img/projects/eiff-brand-elevation/eiff_logo.jpg',
    slug: '/projects/eiff-brand-elevation',
    year: '2024',
    client: 'Edmonton International Film Festival'
  },
  {
    id: '5',
    title: 'Buffalo Lodge Brand Identity',
    description: 'Final brand identity development with logo refinements and comprehensive marketing collateral suite.',
    category: 'Branding',
    image: '/img/projects/buffalo-lodge/DESN311_P4_Logos-13.png',
    slug: '/projects/buffalo-lodge',
    year: '2024',
    client: 'Buffalo Lodge'
  },
  {
    id: '6',
    title: 'To Learn English Website Redesign',
    description: 'Complete website overhaul for online English learning platform to improve usability and enhance engagement.',
    category: 'Web Design',
    image: '/img/projects/to-learn-english/website assets/secondpage.png',
    slug: '/projects/to-learn-english',
    year: '2024',
    client: 'To Learn English'
  },
  {
    id: '7',
    title: 'Fort Edmonton Park Marketing',
    description: 'Marketing coordination and graphic design including signage, menus, social media, and promotional merchandise.',
    category: 'Branding',
    image: '/img/projects/fort-edmonton-park/social-media/1.jpg',
    slug: '/projects/fort-edmonton-park',
    year: '2024',
    client: 'Fort Edmonton Park'
  },
  {
    id: '8',
    title: 'Insight HR Website & Brand Refresh',
    description: 'Website refresh focused on improving usability, navigation, and visual clarity while aligning with professional tone.',
    category: 'UX/UI',
    image: '/img/projects/insight-hr-ux/homepage.png',
    slug: '/projects/insight-hr-refresh',
    year: '2024',
    client: 'Insight HR'
  },
  {
    id: '9',
    title: 'Health App',
    description: 'A conceptual design for a mobile health app that allows users to track their symptoms, manage medications, and communicate with healthcare providers.',
    category: 'Mobile Apps',
    image: '/img/projects/health-app/DESN313_P2_BekaCourtney_Client.jpg',
    slug: '/projects/health-app',
    year: '2024',
    client: 'Conceptual'
  },
  {
    id: '10',
    title: 'Hurde Logo',
    description: 'A conceptual logo design for a modern and innovative brand.',
    category: 'Branding',
    image: '/img/projects/hurde-logo/hurde.jpg',
    slug: '/projects/hurde-logo',
    year: '2024',
    client: 'Conceptual'
  }
];

// Get featured projects (3 most recent)
export const getFeaturedProjects = (count: number = 3): Project[] => {
  return projects.slice(0, count);
};

// Categories for filter
export const categories: ProjectCategory[] = ['All', 'UX/UI', 'Branding', 'Web Design', 'Mobile Apps']; 