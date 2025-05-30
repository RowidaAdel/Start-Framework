import React from 'react';
import homeImage from '../../assets/img.jpg';


import { useEffect } from 'react';
import Title from '../Title/Title';

export default function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <>
            <div className="home d-flex align-items-center flex-column">
                <img className='w-25' src={homeImage} alt="homeImage" />
                <Title text="start Framework" />
                <h3 className="h6 text-center text-white py-4">Graphic Artist - Web Designer - Illustrator</h3>
            </div>
        </>
    );
}
