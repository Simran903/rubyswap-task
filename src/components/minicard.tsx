import React from 'react';

type MiniCardProps = {
  title: string;
  value: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export const MiniCard: React.FC<MiniCardProps> = ({
  title,
  value,
  description,
  buttonText,
  onClick,
  isDisabled = false,
}) => {
  return (
    <div className="bg-stone-950 rounded-xl shadow-lg px-6 pt-6 flex flex-col">
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className='text-2xl font-medium'>{value}</p>
      </div>
      <div className="flex justify-between items-center">

      <p className="text-sm text-gray-400">{description}</p>
      <button
          onClick={onClick}
          className={`text-white font-semibold text-2xl py-2 px-4 rounded-lg transition-all duration-300 ${
            isDisabled
              ? 'cursor-not-allowed'
              : 'hover:text-[#50FA7B] transform hover:scale-105'
          }`}
          disabled={isDisabled}
        >
        {buttonText}
      </button>
      </div>
    </div>
  );
};