import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  iconColor = 'text-corazon'
}) => {
  return (
    <div className="bg-sand-light p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col h-full">
      <div className={`${iconColor} mb-4 flex justify-center`}>
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center text-ocean-dark">{title}</h3>
      <p className="text-ocean-medium mb-4 text-center flex-grow">{description}</p>
      <div className="mt-auto pt-4 text-center">
        <a 
          href="#saber-mas" 
          className="inline-block text-corazon hover:text-corazon-shadow font-medium text-sm transition-colors"
        >
          Saber más →
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;