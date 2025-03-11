import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EAE9E9]-800">
      <h1 className="text-4xl font-bold">404 - Pagina no encontrada.</h1>
      <p className="mt-2 text-[#666666]-300">
        Ops! La pagina no se encuentra disponible.
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-gray-700 text-[#FFFFFF] hover:bg-[#BE0F0F] rounded"
      >
        volver a Home
      </Link>
    </div>
  );
};

export default NotFound;
