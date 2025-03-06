import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

const projects: Project[] = [
    {
        title: "Personal Portfolio",
        description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/yourusername/portfolio",
        liveUrl: "https://yourportfolio.com",
    },
    {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce solution with product management, cart functionality, and payment processing.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        githubUrl: "https://github.com/yourusername/ecommerce",
        liveUrl: "https://yourecommerce.com",
    },
    {
        title: "Task Management App",
        description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
        technologies: ["Vue.js", "Firebase", "Vuex", "PWA"],
        githubUrl: "https://github.com/yourusername/taskmanager",
        liveUrl: "https://yourtaskapp.com",
    }
];

export default function Projects() {
    return (
        <main id="projects" className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, idx) => (
                                    <Badge key={idx} variant="secondary">{tech}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            {project.githubUrl && (
                                <Button variant="outline" size="sm" asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </a>
                                </Button>
                            )}
                            {project.liveUrl && (
                                <Button size="sm" asChild>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live Demo
                                    </a>
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}

