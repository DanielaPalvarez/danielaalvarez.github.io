import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mi Portafolio</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/about" className="hover:underline">Sobre mí</Link>
        <Link to="/projects" className="hover:underline">Proyectos</Link>
        <Link to="/contact" className="hover:underline">Contacto</Link>
      </div>
    </nav>
  );
}
