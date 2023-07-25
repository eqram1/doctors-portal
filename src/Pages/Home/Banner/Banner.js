import React from 'react';
import chair from "../../../assets/images/chair.png";

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-green-600">Treatment Chair</h1>
                    <p className="py-4 text-sm font-semibold">Allow only patient in treatment room,Visitors wait in visitor room.Serial maintain mendatory.Hygienic profer uniform & Clean environment compulsory & request to all for maintain please.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;