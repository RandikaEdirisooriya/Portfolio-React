import React from 'react';

interface ButtonPrimaryProps {
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  label: string;
  icon?: React.ReactNode;
  classes?: string;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ 
  href, 
  target = "_self", 
  label, 
  icon, 
  classes = "" 
}) => {
  return href ? (
    <a href={href} target={target} className={`btn btn-primary ${classes}`}>
      {label}
      {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
    </a>
  ) : (
    <button className={`btn btn-primary ${classes}`}>
      {label}
      {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
    </button>
  );
};

export const ButtonOutline: React.FC<ButtonPrimaryProps> = ({ 
  href, 
  target = "_self", 
  label, 
  icon, 
  classes = "" 
}) => {
  return href ? (
    <a href={href} target={target} className={`btn btn-outline ${classes}`}>
      {label}
      {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
    </a>
  ) : (
    <button className={`btn btn-outline ${classes}`}>
      {label}
      {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
    </button>
  );
};