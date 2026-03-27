import { Github, Facebook, Instagram, Mail } from "lucide-react"
import * as React from "react"

{
  /*MY SOCIAL MEDIA*/
}
type SocialItem = {
  href: string
  icon: React.ReactNode
  name: string
}

export const socialLinks: SocialItem[] = [
  {
    href: "https://github.com/yourusername",
    icon: <Github className="h-7 w-7" />,
    name: "GitHub",
  },
  {
    href: "https://facebook.com/yourusername",
    icon: <Facebook className="h-7 w-7" />,
    name: "Facebook",
  },
  {
    href: "https://instagram.com/yourusername",
    icon: <Instagram className="h-7 w-7" />,
    name: "Instagram",
  },
  {
    href: "mailto:your.email@example.com",
    icon: <Mail className="h-7 w-7" />,
    name: "Email",
  },
]
