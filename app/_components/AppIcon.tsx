import * as LucideIcons from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import React from 'react';

// Type for valid Lucide icon names
type LucideIconName = keyof typeof LucideIcons;

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: LucideIconName;
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  ...props
}) => {
  // Safely get the icon component
  const IconComponent = LucideIcons[name] as React.ComponentType<{
    size?: number;
    color?: string;
    strokeWidth?: number;
    className?: string;
  }>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return (
      <HelpCircle
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        className={className}
        {...props}
      />
    );
  }

  return <IconComponent 
    size={size}
    color={color}
    strokeWidth={strokeWidth}
    className={className}
    {...props}
  />;
};

export type { LucideIconName };
export default Icon;