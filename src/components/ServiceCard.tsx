import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon?: typeof LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  hideButton?: boolean;
  style?: React.CSSProperties;
  fontDecoration?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  iconColor = 'text-corazon',
  style,
  fontDecoration
}) => {
  return (
    <div className="bg-sand-light p-6 rounded-lg shadow-sm hover:shadow-xl hover:bg-gradient-to-br hover:from-sand-light hover:to-ocean-light hover:border-ocean-dark border-2 border-transparent transition-all duration-300 ease-in-out flex flex-col h-full cursor-pointer group" style={style}>
      {Icon && (
        <div className={`${iconColor} mb-4 flex justify-center`}>
          <Icon size={32} />
        </div>
      )}
      <h3 className={`text-xl font-semibold ${fontDecoration} mb-3 text-center text-ocean-dark group-hover:text-ocean-dark`}>{title}</h3>
      <p className="text-ocean-medium mb-2 text-center flex-grow group-hover:text-ocean-dark">{description}</p>
    </div>
  );
};

export default ServiceCard;