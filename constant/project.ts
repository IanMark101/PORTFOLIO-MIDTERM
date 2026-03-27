export type Project_type = {
  imageUrl: string
  title: string
  description: string
  category: string[]
  link: string
}

type categories_type = {
  categoryType: string
}

export const featured_projects: Project_type[] = [
  {
    imageUrl: "/cpu.jpg",
    title: "CPU SCHEDULER",
    description:
      "Simulate and visualize CPU scheduling in real-time. Compare algorithms, track process states, and optimize system performance efficiently.",
    category: ["web application", "react"],
    link: "https://os-cpu-sched-proj.vercel.app/",
  },
  {
    imageUrl: "/hotel.jpg",
    title: "HOTEL BOOKING ANALYTICS",
    description:
      "Track and analyze room bookings in real-time. Visual dashboards provide insights into occupancy trends, helping optimize space usage and scheduling.",
    category: ["web application", "NextJs"],
    link: "https://it-track-defense-proj.vercel.app/",
  },
  {
    imageUrl: "/online.jpg",
    title: "PC Online E-Commerce System",
    description:
      "An online platform for buying and selling PCs and accessories. Features include secure checkout, inventory management, order tracking, and sales analytics.",
    category: ["web application", "NextJs"],
    link: "https://it-track-defense-proj.vercel.app/",
  },
]

export const categories: categories_type[] = [
  {
    categoryType: "web application",
  },
  {
    categoryType: "NextJs",
  },
  {
    categoryType: "react",
  },
]
