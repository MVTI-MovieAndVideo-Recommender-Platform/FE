import React from 'react';
import classNames from 'classnames';

const LoadingSpinner = ({ loadingTime }) => {
    return (
        <div className={classNames('flex', 'flex-col', 'items-center', 'justify-center', 'h-screen', 'bg-black', 'bg-opacity-75', 'text-white', 'text-xl')}>
            <div className={classNames('border-4', 'border-gray-300', 'border-t-4', 'border-t-blue-500', 'rounded-full', 'w-24', 'h-24', 'animate-spin')}></div>
            <p className={classNames('mt-4')}>Loading... {loadingTime} seconds</p>
        </div>
    );
};

export default LoadingSpinner;
