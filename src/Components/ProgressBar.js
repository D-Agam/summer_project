// import React from 'react';

// const ProgressBar = ({ progress }) => {
//   return (
//     <div className="progress-container h-2 bg-gray-200 rounded-full">
//       <div
//         className="progress-bar h-2 bg-blue-600 rounded-full transition-all duration-300"
//         style={{ width: `${progress}%` }}
//       ></div>
//     </div>
//   );
// };

// export default ProgressBar;


import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;

