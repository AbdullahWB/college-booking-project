import React from 'react';
import Container from '../../Shared/Container';

const AboutUs = () => {
    return (
        <Container>
            <div className='grid grid-cols-2 gap-10 mb-[150px]'>
                <div className='grid grid-cols-2 gap-8'>
                    <div>
                        <img className='object-cover rounded-xl' src="https://elkit.wirastudio.co/tapos/wp-content/uploads/sites/14/elementor/thumbs/happy-baby-playing-with-toy-blocks-in-the-kindergarten--pyk5vfey3qlbdvfwpxtpll16fos6ytjdyt9pbjrpd4.jpg" alt="" />
                    </div>
                    <div className='grid grid-rows-2'>
                        <img className='object-cover rounded-xl h-[350px] w-full' src="https://elkit.wirastudio.co/tapos/wp-content/uploads/sites/14/elementor/thumbs/tutor-hugging-adorable-kids-on-carpet-in-kindergarten-1-pysk2n7n0bpk0ejlawo2ayffmiw89513pvyg3zuhjs.jpg" alt="" />
                        <img className='object-cover rounded-xl h-[415px] w-full' src="https://elkit.wirastudio.co/tapos/wp-content/uploads/sites/14/elementor/thumbs/leisure-in-kindergarten-pyk5veh54rbbr2yfm6xc2yg23y81v3p0bi7pxr8dhc.jpg" alt="" />
                    </div>
                </div>
                <div className='flex justify-center flex-col'>
                    <span className='text-sm text-primary font-bold'>About Us</span>
                    <h1 className='text-secondary text-6xl font-bold mt-[50px] mb-[30px]'>We Are a Team <span className='text-primary'>Professionals</span> <br /> For Child Care And <br /> Kindergarten</h1>
                    <p className='text-gray-500 font-semibold mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button className='btn btn-primary w-[20%] rounded-full text-white'>Learn More</button>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;