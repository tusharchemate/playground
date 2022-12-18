import { useEffect, useState } from 'react';
import Progress from './progess';
const ProgessBar = () => {
  
  const [completed, setCompleted] = useState(10);
  const [color, setColor] = useState('pink');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCompleted(completed + 10);
    }, 3000);

    if (completed === 50) {
      setColor('yellow');
    }

    if (completed === 80) {
      setColor('orange');
    }

    if (completed === 100) {
      clearInterval(timer);
      setColor('green');
    }
  }, [completed]);

  return (
    <div>
      <Progress completed={completed} color={color} />
    </div>
  );
};

export default ProgessBar;
