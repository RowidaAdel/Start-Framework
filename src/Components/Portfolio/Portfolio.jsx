import React, { useState, useEffect } from 'react';
import Title from '../Title/Title';
import photo1 from '../../assets/photo1.jfif';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jfif';
import photo6 from '../../assets/photo6.jpg';
import photo7 from '../../assets/photo7.jpg';
import photo8 from '../../assets/photo8.jpg';



export default function Portfolio() {
    useEffect(() => {
        document.title = "Portfolio";
    }, []);

    const [modal, setModal] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    function openModal(photo) {
        setSelectedPhoto(photo);
        setModal(true);
    }

    function closeModal() {
        setModal(false);
        setSelectedPhoto(null);
    }

    const photos = [photo1, photo2, photo3, photo6, photo7, photo8];

    return (
        <>
            <div className="portfolio d-flex flex-column justify-content-center align-items-center py-5">
                <Title text="PORTFOLIO COMPONENT" />

                <div className="container">
                    <div className="row g-5">
                        {photos.map((photo, index) => (
                            <div
                                className="col-6 col-md-4"
                                key={index}
                                onClick={() => openModal(photo)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="card position-relative overflow-hidden">
                                    <img
                                        src={photo}
                                        alt={`portfolio ${index}`}
                                        className="custom-img w-100"
                                    />
                                    <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100 top-0 start-0">
                                        <i className="fa fa-solid fa-plus fa-3x text-white"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {modal && (
                    <div className="custom-modal" onClick={closeModal}>
                        <div className="custom-modal-content">
                            <img
                                src={selectedPhoto}
                                alt="Selected"
                                loading="lazy"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}