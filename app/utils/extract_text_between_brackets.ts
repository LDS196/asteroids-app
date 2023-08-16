export function extractTextBetweenBrackets(str: string) {
  const regex = /\(([^)]+)\)/
  const match = str.match(regex)

  if (match) {
    return match[1].trim()
  } else {
    return null
  }
}
