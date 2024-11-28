import React from 'react';

export interface CardProps { 
  content: React.ReactNode;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ content, style}) => {
  return (
    <div 
      className='card'
      style={{ 
        background: style?.background || "aliceblue",
        borderRadius: ".5rem", 
        padding: "2rem",
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left', 
        overflow: 'hidden',
        lineHeight: '.8',
        ...style // Spread other styles passed down
      }}
    >
      {content}
    </div>
  );
};

export default Card;