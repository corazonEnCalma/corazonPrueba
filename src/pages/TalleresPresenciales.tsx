import CircleNavTalleres from '../components/CircleNavTalleres';


const TalleresPresenciales: React.FC = () => {
  

  return (
    <div className="px-4 pt-32 pb-16 bg-sky">
      <h1 className="text-4xl font-bold text-center mb-12 text-ocean-dark font-decorative flex items-center justify-center gap-4">
        Talleres <span className="text-corazon-shadow">Presenciales</span>
      </h1>
      <CircleNavTalleres />
    </div>
  );
};

export default TalleresPresenciales; 