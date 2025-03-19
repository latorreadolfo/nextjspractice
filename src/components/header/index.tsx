import Link from "next/link";
export function Header() {
  return (
    <header className="bg-[#BE0F0F] text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MAPFRE</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/polizas" className="hover:text-gray-400">
                Pólizas
              </Link>
            </li>
            <li>
              <Link
                href="https://www.mapfre.com.py/contacto/"
                className="hover:text-gray-400"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
