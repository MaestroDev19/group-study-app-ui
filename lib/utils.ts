import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const groupCards = [
  {
    title: "Discrete Structures Study Group",
    image: "",
    members: 12,
    department: "Computer Science",
    memberLimit: 0,
  },
  {
    title: "Discrete Structures Study Group",
    image: "",
    members: 12,
    department: "Computer Science",
    memberLimit: 0,
  },
  {
    title: "Discrete Structures Study Group",
    image: "",
    members: 12,
    department: "Computer Science",
    memberLimit: 0,
  },
]