import { Link } from 'react-router-dom';

const FormacionOnlinePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Formación Online</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/formacion-online/salud-calidad-vida" className="text-blue-600 hover:underline">
            Programa Mindfulness para mejorar la salud y calidad de tu vida
          </Link>
        </li>
        <li>
          <Link to="/formacion-online/infancia" className="text-blue-600 hover:underline">
            Programa de Mindfulness para la infancia
          </Link>
        </li>
        <li>
          <Link to="/formacion-online/ambito-laboral" className="text-blue-600 hover:underline">
            Programa Mindfulness para reducir el estrés en el ámbito laboral
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FormacionOnlinePage; 