import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className='text-white d-flex flex-column justify-content-center align-items-center text-center'>
                <div className="footer-text py-5 w-100">
                    <div className="container-fluid">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <h5 className="fw-bold">LOCATION</h5>
                                <p>2215 John Daniel Drive <br /> Clark, MO 65243</p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="fw-bold">AROUND THE WEB</h5>
                                <div className="d-flex justify-content-center gap-3 mt-2">
                                    <a href="#" className="d-flex align-items-center justify-content-center border rounded-circle text-white hover-icon" style={{ width: "40px", height: "40px" }}>
                                        <i className="bi bi-facebook fs-5" />
                                    </a>
                                    <a href="#" className="d-flex align-items-center justify-content-center border rounded-circle text-white hover-icon" style={{ width: "40px", height: "40px" }}>
                                        <i className="bi bi-twitter fs-5" />
                                    </a>
                                    <a href="#" className="d-flex align-items-center justify-content-center border rounded-circle text-white hover-icon" style={{ width: "40px", height: "40px" }}>
                                        <i className="bi bi-linkedin fs-5" />
                                    </a>
                                    <a href="#" className="d-flex align-items-center justify-content-center border rounded-circle text-white hover-icon" style={{ width: "40px", height: "40px" }}>
                                        <i className="bi bi-globe fs-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h5 className="fw-bold">ABOUT FREELANCER</h5>
                                <p>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-3 footer-bottom w-100'>
                    <p className='text-center'>Copyright © Your Website 2021</p>
                </div>
            </footer>
        </>
    );
}