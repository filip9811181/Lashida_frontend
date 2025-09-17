import React from 'react';

type EthIconProps = {
  size?: number;
  className?: string;
};

const EthIcon: React.FC<EthIconProps> = ({ size = 19, className }) => {
  return (
    <svg
      width={(12 / 19) * size}
      height={size}
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 9.5L6 19L12 9.5L6 0L0 9.5ZM9.22308 8.99042L6 10.1979L2.77692 8.99048L6 3.8872L9.22308 8.99042ZM3.73731 11.5302L6 12.3779L8.26269 11.5302L6 15.1128L3.73731 11.5302Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

export default EthIcon;
