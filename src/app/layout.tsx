import "./App.css"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="App">
        {children}
      </body>
    </html>
  );
}
