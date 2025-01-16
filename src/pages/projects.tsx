import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'

// Define Project type
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/e-commerce",
    liveUrl: "https://e-commerce-demo.vercel.app"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting app using OpenWeatherMap API.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    tags: ["React", "API Integration", "Tailwind CSS"],
    githubUrl: "https://github.com/username/weather-app",
    liveUrl: "https://weather-app-demo.vercel.app"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A productivity app for managing daily tasks and projects.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-t-lg object-cover w-full h-48"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="mt-2">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}