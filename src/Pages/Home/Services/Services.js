import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride treatment',
            description: 'Allow only patient in treatment room,Visitors wait in visitor room.Serial maintain mendatory please.',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity filling',
            description: 'Allow only patient in treatment room,Visitors wait in visitor room.Serial maintain mendatory please.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Allow only patient in treatment room,Visitors wait in visitor room.Serial maintain mendatory please.',
            img: whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-semibold text-primary uppercase'>Our Services</h3>
                <h2 className='text-2xl font-semibold'>Services we provide</h2>
            </div>
            <div className='grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;