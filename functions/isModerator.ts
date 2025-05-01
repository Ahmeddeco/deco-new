import { checkRole } from "@/utils/roles"
import { redirect } from "next/navigation"

export const IsModerator = async () => {
  const isAdmin = await checkRole("admin")
  const IsModerator = await checkRole('moderator')
  if (!IsModerator && !isAdmin) {
    redirect('/')
  }
  return
}