import React, { useState } from 'react';
import './Tooltip.css'; 

const Tooltip = ({ position, children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const getTooltipStyle = () => {
    switch (position) {
      case 'top':
        return { top: '-30px', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
        return { top: '30px', left: '50%', transform: 'translateX(-50%)' };
      case 'right':
        return { top: '50%', left: '30px', transform: 'translateY(-50%)' };
      case 'left':
        return { top: '50%', right: '30px', transform: 'translateY(-50%)' };
      default:
        return {};
    }
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isVisible && (
        <div className={`tooltip ${position}`} style={getTooltipStyle()}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
