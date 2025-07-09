'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useSession, signOut } from "next-auth/react"

const UserDropdown = () => {
  const { data: session } = useSession()

  if (!session?.user) return null

  const { name, email, image } = session.user

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={image ?? ""} alt={name ?? "User"} />
          <AvatarFallback>
            {name?.[0] ?? "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="flex flex-col">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-muted-foreground truncate">{email}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown