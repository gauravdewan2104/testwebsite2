export const metadata = {
  title: 'My Website',
  description: 'My awesome website with contact form and payment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
