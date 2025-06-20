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
  hideButton,
  style,
  fontDecoration
}) => {
  return (
    <div className="bg-sand-light p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col h-full" style={style}>
      {Icon && (
        <div className={`${iconColor} mb-4 flex justify-center`}>
          <Icon size={32} />
        </div>
      )}
      <h3 className={`text-xl font-semibold ${fontDecoration} mb-3 text-center text-ocean-dark`}>{title}</h3>
      <p className="text-ocean-medium mb-2 text-center flex-grow">{description}</p>
      {!hideButton && (
        <div className="mt-auto pt-2 text-center">
          <a
            href="#saber-mas"
            className="inline-block text-corazon hover:text-corazon-shadow font-medium text-sm transition-colors"
          >
            Saber más →
          </a>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;