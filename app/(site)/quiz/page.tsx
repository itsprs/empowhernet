"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { quizData } from "@/data/quiz"

export default function QuizPage() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const currentQuestion = quizData[current]

  const handleNext = () => {
    if (selected === currentQuestion.answer) {
      setScore((prev) => prev + 1)
    }

    setSelected(null)

    if (current < quizData.length - 1) {
      setCurrent((prev) => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-12">
      <h1 className="text-center text-4xl font-bold">Empowerment Quiz</h1>

      {!showResult ? (
        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Q{current + 1}: {currentQuestion.question}
            </h2>
            <RadioGroup
              value={selected?.toString() || ""}
              onValueChange={(val) => setSelected(parseInt(val))}
              className="space-y-4"
            >
              {currentQuestion.options.map((opt, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                  />
                  <Label htmlFor={`option-${index}`}>{opt}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <Button onClick={handleNext} disabled={selected === null}>
            {current === quizData.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            You scored {score} out of {quizData.length}!
          </h2>
          <p className="text-muted-foreground mt-4">
            Thanks for participating in the Empowerment Quiz 💪✨
          </p>
        </div>
      )}
    </div>
  )
}
