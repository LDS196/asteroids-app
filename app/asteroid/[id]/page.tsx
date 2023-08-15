'use client'

type Props = {
  params: {
    id: string
  }
}
export default function Asteroid({ params: { id } }: Props) {
  return <div>{id}</div>
}
