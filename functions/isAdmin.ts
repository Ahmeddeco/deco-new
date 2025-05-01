import { checkRole } from "@/utils/roles"
import { redirect } from "next/navigation"

export const IsAdmin = async () => {
  const isAdmin = await checkRole('admin')
  if (!isAdmin) {
    redirect('/')
  }
  return
}