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
    title: 'EIFF Brand Elevation',
    description: 'Complete brand elevation for the Edmonton International Film Festival, including logo, poster, ticket, and website concepts.',
    category: 'Branding',
    image: '/img/projects/eiff-brand-elevation/thumbnail.jpg',
    slug: '/projects/eiff-brand-elevation',
    year: '2024',
    client: 'Edmonton International Film Festival'
  },
  {
    id: '2',
    title: 'Insight HR UX',
    description: 'UX/UI design project for Insight HR, focusing on creating an intuitive and efficient human resources management platform.',
    category: 'UX/UI',
    image: '/img/projects/insight-hr-ux/thumbnail.jpg',
    slug: '/projects/insight-hr-ux',
    year: '2024',
    client: 'Insight HR'
  },
  {
    id: '3',
    title: 'Buffalo Lodge',
    description: 'Brand identity and visual design for Buffalo Lodge, creating a cohesive and memorable brand experience.',
    category: 'Branding',
    image: '/img/projects/buffalo-lodge/thumbnail.jpg',
    slug: '/projects/buffalo-lodge',
    year: '2024',
    client: 'Buffalo Lodge'
  },
  {
    id: '4',
    title: 'Fort Edmonton Park',
    description: 'Diverse graphic design assets for Fort Edmonton Park, including menus, social media, email signatures, and pony cards.',
    category: 'Branding',
    image: '/img/projects/fort-edmonton-park/thumbnail.png',
    slug: '/projects/fort-edmonton-park',
    year: '2024',
    client: 'Fort Edmonton Park'
  }
];

// Get featured projects (3 most recent)
export const getFeaturedProjects = (count: number = 3): Project[] => {
  return projects.slice(0, count);
};

// Categories for filter
export const categories: ProjectCategory[] = ['All', 'UX/UI', 'Branding', 'Web Design', 'Mobile Apps']; 