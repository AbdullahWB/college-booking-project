import React from 'react';
import Container from '../../Shared/Container';

const Ability = () => {
    return (
        <Container>
            <div className='grid grid-cols-4 gap-10 rounded-xl mt-[150px] py-10 px-5 bg-primary bg-opacity-10 mb-[150px]'>
                <div className='text-center p-5 '>
                    <h1 className='text-primary text-6xl font-bold'>65+</h1>
                    <h3 className='text-secondary text-2xl font-bold my-3'>Branch Totals</h3>
                    <p className='text-gray-500 text-xl font-semibold'>Lorem ipsum dolor</p>
                </div>
                <div className='text-center p-5 '>
                    <h1 className='text-primary text-6xl font-bold'>350+</h1>
                    <h3 className='text-secondary text-2xl font-bold my-3'>Our Team</h3>
                    <p className='text-gray-500 text-xl font-semibold'>Lorem ipsum dolor</p>
                </div>
                <div className='text-center p-5 '>
                    <h1 className='text-primary text-6xl font-bold'>160+</h1>
                    <h3 className='text-secondary text-2xl font-bold my-3'>Our Programs</h3>
                    <p className='text-gray-500 text-xl font-semibold'>Lorem ipsum dolor</p>
                </div>
                <div className='text-center p-5 '>
                    <h1 className='text-primary text-6xl font-bold'>35+</h1>
                    <h3 className='text-secondary text-2xl font-bold my-3'>Our Classes</h3>
                    <p className='text-gray-500 text-xl font-semibold'>Lorem ipsum dolor</p>
                </div>
            </div>
        </Container>
    );
};

export default Ability;