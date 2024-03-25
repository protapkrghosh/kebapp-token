import React from 'react';

const PlusIcon = () => {
  return (
    <div className="relative">
      <div className="w-7 h-7 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full flex justify-center items-center">
        <div className="w-6 h-6 bg-[#0A1E25] rounded-full " />
      </div>
      <div className="w-3 h-[3px] bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-md absolute top-3 left-2" />
      <div className="w-3 h-[3px] bg-gradient-to-l from-[#19C5E2] to-[#19C5E2] rounded-md absolute top-3 left-2 rotate-90" />
    </div>
  );
};

export default PlusIcon;
