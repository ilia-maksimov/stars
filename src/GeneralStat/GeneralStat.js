import React from 'react';
import './GeneralStat.css';

const GeneralStat = props => {
  return (
    <div>
      <p>Общий рейтинг: { props.stat }</p>
      <p>Участников проголосовало: { props.voted }</p>
    </div>
  );
}

export default GeneralStat;
