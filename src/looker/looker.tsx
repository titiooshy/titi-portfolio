import React from 'react';
import { useNavigate } from 'react-router-dom';
import PathCard from '../components/ProfileCard';
import engineerImage from '../images/engineer.png';
import designImage from '../images/designer.png';
import researchImage from '../images/research.png';
import adventureImage from '../images/yellow.png';
import './looker.css';

const Looker: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "engineer",
      image: engineerImage,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif" // Dark storm clouds
    },
    {
      name: "design",
      image: designImage,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif" // Flickering neon lights
    },
    {
      name: "research",
      image: researchImage,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif" // Dark, abstract digital lights
    },
    {
      name: "adventurer",
      image: adventureImage,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif" // Dark ocean waves at night
    },
  ];

  const handleProfileClick = (path: { name: string; image: string; backgroundGif: string }) => {
    navigate(`/path/${path.name}`, { state: { profileImage: path.image, backgroundGif: path.backgroundGif } });
  };

  return (
    <div className="look-container">
      <p className='pick-your-path'>Choose Your Path</p>
      <div className="paths">
        {paths.map((path, index) => (
          <ProfileCard
            key={index}
            name={path.name}
            image={path.image}
            onClick={() => handleProfileClick(path)}
          />
        ))}
      </div>
    </div>
  );
};

export default Looker;
