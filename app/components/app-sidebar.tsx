import { Link } from '@remix-run/react'

export const AppSidebar = () => {
  const navLinks = [
    'Personal',
    'Small Business',
    'Wealth Management',
    'Business & Institutions',
    'About Us',
  ]
  return (
    <aside className="w-48 bg-gray-100 h-screen flex flex-col">
      {navLinks.map((l) => (
        <Link to="." key={l} className="p-2">
          {l}
        </Link>
      ))}
    </aside>
  )
}
