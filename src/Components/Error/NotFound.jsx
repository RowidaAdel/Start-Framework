import React from 'react';
import Title from '../Title/Title';
import error from '../../assets/error.jfif';

export default function NotFound() {
    return (
        <>
            <div className="NotFound d-flex flex-column justify-content-center align-items-center vh-100">
                <Title text="Not Found Page" />
                <img src={error} alt="error 404" className="w-25 mt-4" />
            </div>
        </>
    );
}
