import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Project_type } from "@/constant/project"
import { Button } from "../ui/button"
import Link from "next/link"
import { Badge } from "../ui/badge"
type MyCardProps = {
  project: Project_type
}
export function CardLayout({ project }: MyCardProps) {
  return (
    <Card className="relative w-full max-w-sm pt-0 transition-all duration-500 hover:scale-102 hover:shadow-2xl hover:shadow-cyan-500/70">
      <Link href={project.link} target="_blank">
        <Image
          src={project.imageUrl}
          alt={`project: ${project.imageUrl}`}
          width={500}
          height={500}
          className="aspect-video"
        />
      </Link>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <CardDescription>{project.description}</CardDescription>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="text-foreground">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/projects">
          <Button>View Project</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
