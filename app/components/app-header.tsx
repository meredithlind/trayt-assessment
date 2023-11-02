import { Link } from '@remix-run/react'

export const AppHeader = () => {
  const headerLinks = [
    'Sign In',
    'En Español',
    'Locations',
    'Contact Us',
    'Help',
  ]
  return (
    <div className="sticky top-0 h-14 bg-blue-800 z-10 flex justify-end">
      {headerLinks.map((l) => (
        <Link to="." key={l} className="text-white p-2">
          {l}
        </Link>
      ))}
    </div>
  )
}
