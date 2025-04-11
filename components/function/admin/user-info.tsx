import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserInfo({
  name,
  email,
  avatar,
}: {
  name: string
  email: string
  avatar: string
}) {
  return (
    <>
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="rounded-lg">UN</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{name}</span>
        <span className="truncate text-xs">{email}</span>
      </div>
    </>
  )
}
