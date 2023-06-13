import './css/globals.css'
import { NextAuthProvider } from "./providers";

export const metadata = {
  title: 'Next Stack - Cord Marston',
  description: 'Next (React), MySQL, Next-Auth, Prisma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="">
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="context overflow-auto">
      <NextAuthProvider>{children}</NextAuthProvider>
      </div>
    </body>
  </html>
  )
}
