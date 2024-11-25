import React, { useState, useEffect, useRef } from 'react';
import SpinAndWin from 'react-spin-game';
import 'react-spin-game/dist/index.css';

const Spinner = () => {
  const freeSpinGifts = [
    ['oops!!!', 'red'],
    ['$70', 'purple'],
    ['$20', 'aqua'],
    ['$25', 'tomato'],
    ['$90', 'cadetblue'],
    ['$5', 'chocolate'],
  ];
  const [wdth, setWdth] = useState('');
  const [margin, setMargin] = useState('');
  const [time, setTime] = useState(0);
  const [data, setData] = useState(freeSpinGifts);

  useEffect(() => {
    if (localStorage.width) {
      setWdth(localStorage.width);
      setMargin(localStorage.margin);
    } else {
      // Default responsive settings
      const isMobile = window.innerWidth <= 768;
      setWdth(isMobile ? '80' : '50');
      setMargin(isMobile ? '5' : '25');
    }
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const ref = useRef();

  const handleClick = () => {
    const shuffledData = shuffleArray([...freeSpinGifts]);
    setData(shuffledData);
    setTime(getRandomInt(1, 20));
    ref.current.handleSpin();
  };

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <>
      <div
        className="spinner-container"
        style={{ width: `${wdth}vw`, marginLeft: `${margin}vw` }}
      >
        <div className="text-center" style={{ height: '100vh' }}>
          <div>
            <SpinAndWin horizantalText={true} hideButton={true} time={time} ref={ref} data={data} />
            <button
              className="spin-btn"
              onClick={handleClick}
            >
              Spin
            </button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .spinner-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .spin-btn {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 1rem;
          color: #fff;
          background-color: #28a745;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .spin-btn:hover {
          background-color: #218838;
        }

        @media (max-width: 768px) {
          .spinner-container {
            width: 80vw;
            margin-left: 5vw;
          }

          .spin-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .spinner-container {
            width: 100%;
            margin-left: 0;
          }

          .spin-btn {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default Spinner;
