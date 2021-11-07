import React from 'react';

const text = (percentage) => {
    return window.innerHeight*(percentage/100);
}

const height = (percentage) => {
    return window.innerHeight*(percentage/100);
}

const width = (percentage) => {
    return window.innerWidth*(percentage/100);
}

export { text, height, width }