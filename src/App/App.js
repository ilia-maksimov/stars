import React, { useState, useEffect } from 'react';
import './App.css';
import Star from '../Star/Star';
import GeneralStat from '../GeneralStat/GeneralStat';
import { buildStarsConfig } from '../utils';

function App() {
  const [points, setPoints] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [starsConfig, setStarsConfig] = useState([]);

  const [fullStarsPreview, setFullStarsPreview] = useState(0);
  const [fullStarsChoosen, setFullStarsChoosen] = useState(0);

  const stat = isNaN(points / clicks) ? 0 : points / clicks;
  const fullStarsNumber = stat.toString().slice(0, 1);
  const part = parseInt(stat.toString().slice(2, 5), 10);

  useEffect(() => {
    if (fullStarsChoosen) {
      setStarsConfig(buildStarsConfig(fullStarsChoosen, null));
    } else if (fullStarsPreview) {
      setStarsConfig(buildStarsConfig(fullStarsPreview, null));
    } else {
      setStarsConfig(buildStarsConfig(fullStarsNumber, part));
    }
  }, [fullStarsPreview, fullStarsChoosen]);

  function togglePreview(showPreview, fullStars) {
    if (showPreview) {
      setFullStarsPreview(fullStars);
    } else {
      setFullStarsPreview(null);
    }
  }

  return (
    <div className="app">
      <GeneralStat stat={stat} voted={clicks} />

      <div className="stars-wrap">
        { starsConfig.map((star, index) =>
          <div
            className="star-wrap"
            key={index}
            onMouseEnter={() => togglePreview(true, index + 1)}
            onMouseLeave={() => togglePreview(false, index + 1)}
            onClick={() => setFullStarsChoosen(index + 1)}
          >
            <Star fill={star.value} isPart={star.isPart}/>
          </div>
        ) }
      </div>

      <div>
        <button 
          className="submit-button"
          onClick={() => {
            setPoints(points + fullStarsChoosen)
            setClicks(clicks + 1)
            setFullStarsPreview(null);
            setFullStarsChoosen(0)
          }}>
           Submit
        </button>
      </div>
    </div>
  );
}

export default App;
