import { projects } from '@/data/projects';
import ProjectView from './project-view';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const project = projects[resolvedParams.id];

    if (!project) {
        return {
            title: 'Project Not Found | CMDC',
        };
    }

    return {
        title: `${project.title} | CMDC Projects`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description,
            images: [project.image],
        }
    };
}

// 2. The Page Component
export default async function Page({ params }) {
    const resolvedParams = await params;
    return <ProjectView id={resolvedParams.id} />;
}

export async function generateStaticParams() {
    return Object.keys(projects).map((index) => ({
        id: index.toString(),
    }));
}