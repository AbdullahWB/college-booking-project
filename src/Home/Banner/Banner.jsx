import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Shared/Container';

const Banner = () => {
    return (
        <Container>
            <div className='my-[150px] mx-[25px] grid grid-cols-2 gap-5'>
                <div className='mt-[100px]'>
                    <span className='text-sm text-primary font-bold'>Child Care & Kindergarten</span>
                    <h1 className='text-7xl text-secondary font-bold mt-[50px] mb-[30px]'>The First <span className='text-primary'>Child Care</span> <br /> Completed Services</h1>
                    <p className='text-gray-500 font-semibold mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                        <Link className='btn btn-primary mr-5 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary mb-5 text-white px-[30px]'>Our Service</Link>
                        <Link className='btn btn-outline btn-primary rounded-full border-2'>Our Pricing</Link>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img className='bg-primary rounded-full h-[600px]' src="https://elkit.wirastudio.co/tapos/wp-content/uploads/sites/14/2022/12/portrait-of-a-woman-wearing-glasses-and-pointing-with-her-finger-transformed-1-1-757x1024.png" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;