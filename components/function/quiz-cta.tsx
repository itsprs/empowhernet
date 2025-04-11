import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QuizCTA() {
  return (
    <div className="border-primary bg-muted/40 w-full space-y-6 rounded-2xl border border-dashed p-6 text-center md:p-10">
      <div className="flex justify-center">
        <Sparkles className="text-primary h-10 w-10 animate-bounce" />
      </div>
      <h2 className="text-3xl font-bold md:text-4xl">
        Take the Empowerment Quiz!
      </h2>
      <p className="text-muted-foreground mx-auto max-w-2xl">
        Test your knowledge about gender equality, inspiring women, and global
        progress toward empowerment.
      </p>
      <Button asChild>
        <Link href="/quiz">Start Quiz</Link>
      </Button>
    </div>
  )
}
