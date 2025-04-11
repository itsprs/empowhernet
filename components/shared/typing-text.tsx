"use client"

import {
  CursorProps,
  Typewriter,
  TypewriterProps,
} from "react-simple-typewriter"

interface Props extends TypewriterProps, CursorProps {
  cursor: boolean
}

export function TypingText({ cursor, ...props }: Props) {
  return <Typewriter {...props} cursor={cursor} />
}
