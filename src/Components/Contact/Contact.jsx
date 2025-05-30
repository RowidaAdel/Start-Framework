import React from 'react';
import { useEffect } from 'react';
import Title from '../Title/Title';


export default function Contact() {
    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <>
            <div className="contact d-flex flex-column justify-content-center align-items-center vh-100">
                <Title text="conatct section" />
                <form className="w-50 mx-auto mt-5">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="username" placeholder="userName" />
                        <label htmlFor="username">userName</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="userage" placeholder="userAge" />
                        <label htmlFor="userage">userAge</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="useremail" placeholder="userEmail" />
                        <label htmlFor="useremail">userEmail</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="userpass" placeholder="userPassword" />
                        <label htmlFor="userpass">userPassword</label>
                    </div>
                    <button type="submit" className="submit text-white">send Message</button>
                </form>
            </div>
        </>
    );
}