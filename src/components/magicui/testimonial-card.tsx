import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import Markdown from "react-markdown"

interface TestimonialCardProps {
  content: string
  author: string
  position: string
  avatarUrl?: string
  authorInitials: string
  date: string
  socialUrl: string
  SocialIcon: LucideIcon
}

export function TestimonialCard({
  content,
  author,
  position,
  avatarUrl,
  authorInitials,
  date,
  socialUrl,
  SocialIcon,
}: TestimonialCardProps) {
  return (
    <Card className="border shadow-sm p-5 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row justify-between">

        {/*Left side*/}
        <div className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="h-12 w-12">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={author} />
            ) : (
              <AvatarFallback>{authorInitials}</AvatarFallback>
            )}
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{author}</span>
              {/*<VerifiedIcon className="h-4 w-4 text-blue-500" />*/}
            </div>
            <span className="text-sm text-muted-foreground">{position}</span>
          </div>
        </div>

        {/*Right side*/}
        <div className="flex flex-col gap-0.5">
          <Link href={socialUrl} className="inline-flex justify-end text-muted-foreground hover:text-blue-500">
            <SocialIcon />
          </Link>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>

      </CardHeader>
      <CardContent className="pt-2">
        <Markdown className="text-sm">{content}</Markdown>
      </CardContent>

    </Card>
  )
}
