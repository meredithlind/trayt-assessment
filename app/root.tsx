import type { LinksFunction } from '@remix-run/node'
import styles from './tailwind.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { AppHeader } from './components/app-header'
import { AppSidebar } from './components/app-sidebar'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AppHeader />
        <div className="container">
          <div className="flex h-screen">
            <AppSidebar />
            <main className="flex-1 p-5 mx-auto">
              <Outlet />
            </main>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
