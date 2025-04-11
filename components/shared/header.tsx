export function Header({
  children,
  container,
}: Readonly<{ children: React.ReactNode; container?: boolean }>) {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-y border-dashed">
      <nav
        className={`${container ? "container border-x border-dashed" : "px-4"} flex min-h-16 flex-wrap items-center justify-between gap-2 py-3`}
      >
        {children}
      </nav>
    </header>
  )
}
