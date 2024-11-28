import React from 'react';
import './App.css'; // Make sure App.css is imported
import Card from "./components/Card.tsx";
import { CardProps } from './components/Card.tsx';

const items: CardProps[] = [
  { 
    content: (
      <>
        <h2 
          style={{ 
            fontSize: '3rem', 
            margin: '1rem auto'
          }}
        >
          Create and schedule content {' '}
          <span 
            style={{ 
              color: 'hsl(256, 67%, 59%)', 
              fontStyle: 'italic' }}
            >
            quicker.
          </span>
        </h2>
        <img 
          src="/images/illustration-create-post.webp" 
          alt="create-post" 
          style={{  
            height: "auto",
            maxWidth: '90%',
            marginTop: '1rem',
            alignSelf: 'center'
          }} 
        />  
      </>
    ),
    style: {
      background: "hsl(31, 66%, 93%)",
      gridRow: 'span 5',
      fontWeight: 'bold'
    },
  },
  { 
    content: (
      <>
        <h2 
          style={{ 
            fontSize: '4rem', 
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          Social Media {' '}
          <span 
            style={{ 
              color: 'hsl(39, 100%, 71%)'}}
            >
            10x
          </span> {' '}
          <span 
            style={{ 
              fontStyle: 'italic' }}
            >
            Faster
          </span> with AI
        </h2>
        <img 
          src="/images/illustration-five-stars.webp" 
          alt="five-stars"
          style={{  
            height: "auto",
            maxWidth: '300px',
            marginTop: '1rem',
            alignSelf: 'center'
          }} 
        />  
        <p 
          style={{ 
            textAlign: 'center', 
            fontSize: '2rem',
            margin: '0 auto' 
          }}
        >{ "Over 4,000 5-star reviews" }</p>
      </>
    ),
    style: {
      background: "hsl(256, 67%, 59%)",
      color: 'white',
      gridColumn: 'span 2',
      gridRow: 'span 4'
    }
  },
  { 
    content: (
      <div
      >
        <h2 
          style={{ 
            fontSize: '3rem', 
            margin: '0 auto'
          }}
        >
          { "Schedule to social media." }</h2>
        <img 
          src="/images/illustration-schedule-posts.webp" 
          alt="schedule-posts"
          style={{  
            height: "auto",
            maxWidth: '120%',
            marginTop: '1rem',
            alignSelf: 'center',
            marginLeft: '10%'
          }} 
        />  
        <p 
          style={{ 
            fontSize: '1.5rem' 
          }}
        >{ "Optimize post timings to publish content at the perfect time for your audience." }</p>
      </div>
    ),
    style: {
      background: "hsl(254, 88%, 90%)",
      gridRow: 'span 8'
    }
  },
  { 
    content: (
      <>
        <img 
          src="/images/illustration-multiple-platforms.webp" 
          alt="multiple-platforms"
          style={{  
            height: "auto",
            maxWidth: '120%',
            marginTop: '1rem',
            alignSelf: 'center',
            marginLeft: '20%',
            marginBottom: '1rem'
          }} 
        />  
        <h2 
          style={{ 
            fontSize: '2.3rem', 
            margin: '0 auto'
          }}
        >
          { "Manage multiple accounts and platforms." }
        </h2>
      </>
    ),
    style: {
      background: "white",
      gridRow: 'span 4'
    }
  },
  { 
    content: (
      <>
        <h2 
          style={{ 
            fontSize: '3rem', 
            margin: '0 auto'
          }}
        >
          { "Maintain a consistent posting schedule." }</h2>
        <img 
          src="/images/illustration-consistent-schedule.webp" 
          alt="consistent-schedule"
          style={{  
            height: "auto",
            maxWidth: '90%',
            marginTop: '1rem',
            alignSelf: 'center'
          }} 
        />  
      </>
    ),
    style: {
      background: "hsl(39, 100%, 71%)",
      gridRow: 'span 4'
    }
  },
  { 
    content: (
      <div
        style={{
          display: 'flex', 
          flexDirection: 'column',
          alignContent: 'center',
          height: '100%'
        }}
      >
        <h2 
          style={{ 
            fontSize: '3rem', 
            margin: '0 auto',
            flexGrow: '1'
          }}
        >
          { "Write your content using AI." }</h2>
        <img 
          src="/images/illustration-ai-content.webp" 
          alt="ai-content"
          style={{  
            height: "auto",
            maxWidth: '90%',
            marginTop: '1rem',
            alignSelf: 'center',
          }} 
        />  
      </div>
    ),
    style: {
      background: "hsl(39, 100%, 71%)",
      gridRow: 'span 7'
    }
  },
  { 
    content: (
      <>
        <h2 
          style={{ 
            fontSize: '5rem', 
            margin: '0 0',
            textAlign: 'left'
          }}
        >
          { ">56%" }</h2>
        <span
          style={{
            margin: '1rem 0',
            fontSize: '1.5rem'
          }}
        >{ "faster audience growth" }</span>
        <img 
          src="/images/illustration-audience-growth.webp" 
          alt="audience-growth"
          style={{  
            height: "auto",
            maxWidth: '90%',
            marginTop: '1rem',
            alignSelf: 'center'
          }} 
        />  
      </>
    ),
    style: {
      background: "white",
      gridRow: 'span 4'
    }
  },
  { 
    content: (
      <div
        id='grow-followers-card'
      >
        <img 
          src="/images/illustration-grow-followers.webp" 
          alt="grow-followers"
          style={{  
            height: "auto",
            marginTop: '1rem',
            alignSelf: 'center'
          }} 
        />
        <h2 
          style={{ 
            fontSize: '3rem', 
            margin: '0 auto'
          }}
        >
          { "Grow followers with non-stop content." }</h2>  
      </div>
    ),
    style: {
      background: "hsl(256, 67%, 59%)",
      color: 'white',
      flexDirection: 'row-reverse',
      gridColumn: 'span 2',
      gridRow: 'span 4'
    }
  },
];

const App: React.FC = () => {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <Card
          key={index}
          style={item.style} 
          content={item.content}        />
      ))}
    </div>
  );
};

export default App;