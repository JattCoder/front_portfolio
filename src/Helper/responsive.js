import React from 'react';

const responsiveText = (num) => {
    const { width, height } = window.screen;
    return (width/height)*num;
}

export { responsiveText }