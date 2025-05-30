import React from 'react';

export default function Title({ text }) {
    return (
        <div>
            <h2 className='title text-center text-uppercase fs-1 mt-4'>{text}</h2>
            <div className="d-flex align-items-center justify-content-center my-3 custom-divider">
                <div className="line" />
                <span className="mx-3 fs-4">★</span>
                <div className="line" />
            </div>

        </div>
    );
}