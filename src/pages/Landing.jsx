import React from 'react';
import Spinner from "../pages/Spinner";
import Share from "../pages/Share";

const Landing = () => {
  return (
    <div className="landing-container mt-5">
      <Spinner />
      <Share />

      {/* Styles */}
      <style jsx>{`
        .landing-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px; /* Adjust this for spacing between components */
          padding: 20px; /* Add padding around the container */
        }

        @media (max-width: 768px) {
          .landing-container {
            gap: 15px; /* Reduce spacing on smaller screens */
            padding: 10px;
          }
        }

        @media (max-width: 480px) {
          .landing-container {
            gap: 10px;
            padding: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
