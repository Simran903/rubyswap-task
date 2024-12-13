import React from 'react';

type Stat = {
  label: string;
  value: string;
  convertedValue: string;
};

type CardProps = {
  title: string;
  description: string;
  stats: Stat[];
  buttonText: string | string[];
  image?: React.ReactNode;
  isDisabled: boolean | boolean[];
  onClick: (() => void) | (() => void)[];
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  stats,
  buttonText,
  image,
  isDisabled,
  onClick,
}) => {
  return (
    <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-[#228b22b3] rounded-xl px-14 py-8 text-white shadow-lg flex flex-row justify-between items-center">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-400 mb-8">{description}</p>
        {stats.map((stat, index) => (
          <div key={index} className="mb-10 space-y-6">
            <div className="text-sm text-gray-400">{stat.label}</div>
            <div className="flex space-x-8 items-center">
              <span className="text-xl font-bold">{stat.value}</span>
              <span className="text-lg text-gray-400">{stat.convertedValue}</span>
            </div>
          </div>
        ))}
        {Array.isArray(buttonText) && Array.isArray(onClick) && Array.isArray(isDisabled) ? (
          <div className="mt-16 flex justify-center items-center space-x-10">
            {buttonText.map((text, index) => (
              <button
                key={index}
                className={`mt-16 ${
                  isDisabled[index]
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-500'
                } w-full text-white font-semibold py-2 rounded-full`}
                disabled={isDisabled[index]}
                onClick={onClick[index]}
              >
                {text}
              </button>
            ))}
          </div>
        ) : (
          <button
            className={`mt-16 ${
              isDisabled
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-500'
            } w-1/2 text-white font-semibold py-2 rounded-full`}
            disabled={isDisabled as boolean}
            onClick={onClick as () => void}
          >
            {buttonText as string}
          </button>
        )}
      </div>
      {image && <div className="flex justify-center items-center flex-shrink-0">{image}</div>}
    </div>
  );
};