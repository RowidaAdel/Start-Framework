import React from 'react';
import { useEffect } from 'react';
import Title from '../Title/Title';



export default function About() {
    useEffect(() => {
        document.title = "About";
    }, []);
    return (
        <>
            <div className="about d-flex flex-column justify-content-center align-items-center">
                <Title text="About component" />
                <div className='container row d-flex justify-content-center align-items-center'>
                    <div className="col-md-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                    </div>
                    <div className="col-md-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                    </div>
                </div>
            </div>
        </>
    );
}