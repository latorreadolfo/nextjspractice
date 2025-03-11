import "./globals.css";
import { Header } from "../components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="bg-[#EAE9E9] text-[#4D4D4D] min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto p-6 rounded-lg shadow-lg">
            {children}
          </main>
          <footer className="text-center py-4 bg-[#BE0F0F] text-white">
            © {new Date().getFullYear()} MAPFRE PARAGUAY - Todos los derechos
            reservados.
          </footer>
        </div>
      </body>
    </html>
  );
}
