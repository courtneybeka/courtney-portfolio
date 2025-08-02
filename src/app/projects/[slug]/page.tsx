import { notFound } from 'next/navigation';
import { projectsData } from '@/data/project-details';
import { projects } from '@/data/projects';
import ProjectClient from './ProjectClient'; // Corrected import path

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug.replace('/projects/', ''),
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} slug={slug} />;
} 