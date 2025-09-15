import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <img src="/printforge-logo.svg" className="hidden lg:block"/>
          <img src="/printforge-logo-icon.svg" className="block lg:hidden"/>
        </header>
        {children}
      </body>
    </html>
  );
}