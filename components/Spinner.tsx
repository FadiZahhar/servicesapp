// Assuming spinner is imported from a relative path as before
import spinner from "../assets/svg/spinner.svg";

// If you're using React 17 or newer, you might not need to import React explicitly
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <div>
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </div>
  );
};

export default Spinner;
