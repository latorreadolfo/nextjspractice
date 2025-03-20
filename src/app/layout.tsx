import "./globals.css";
import { Header } from "../components/header";
import UserLocation from "@/components/UserLocation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect e o link do Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased ">
        <div className="bg-[#EAE9E9] text-[#4D4D4D] min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto p-6 rounded-lg shadow-lg">
            {children}
          </main>
          <div className="flex flex-col items-center justify-center min-h-screen ">
            <h1 className="text-3xl font-bold mb-4">Bienvenido a mi pagina!</h1>
            <UserLocation />
          </div>
          <footer className="text-center py-4 bg-[#BE0F0F] text-white">
            © {new Date().getFullYear()} MAPFRE PARAGUAY - Todos los derechos
            reservados.
          </footer>
        </div>
      </body>
    </html>
  );
}
