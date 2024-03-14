import React from 'react';
import DisplayItem from './DisplayItem';
import fImg1 from './featuredStock/featured (1).png';
import fImg2 from './featuredStock/featured (2).png';
import fImg3 from './featuredStock/featured (3).png';
import fImg4 from './featuredStock/featured (4).png';
import fImg5 from './featuredStock/featured (5).jpg';
import fImg6 from './featuredStock/featured (6).jpg';
import fImg7 from './featuredStock/featured (7).jpg';
import fImg8 from './featuredStock/featured (8).jpg';
const DisplaySection = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                    <DisplayItem
                        imageSrc={fImg1}
                        title="Beoplay M5 Bluetooth Speaker"
                        isNew={true}
                        isSale={false}
                        price={1200}
                        stars={4}
                    />
                    <DisplayItem
                        imageSrc={fImg2}
                        title="Apple Smart Watch 6 - Special Edition"
                        isNew={false}
                        isSale={false}
                        price={22999}
                        stars={5}
                    />
                    <DisplayItem
                        imageSrc={fImg3}
                        title="Apple Smart Watch 6 - Special Edition"
                        isNew={false}
                        isSale={true}
                        price={2700}
                        stars={3}
                        discountedPrice={1300}
                    />
                    <DisplayItem
                        imageSrc={fImg4}
                        title="Martino 75 Bluetooth"
                        isNew={false}
                        isSale={false}
                        price={700}
                        stars={3}
                    />
                    
                </div>
                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                    <DisplayItem
                        imageSrc={fImg5}
                        title="Canon EOS Rebel T7 DSLR"
                        isNew={false}
                        isSale={false}
                        price={36900}
                        stars={4}
                    />
                    <DisplayItem
                        imageSrc={fImg6}
                        title="Fossil Machine Men's Watch"
                        isNew={true}
                        isSale={false}
                        price={8200}
                        stars={5}
                    />
                    <DisplayItem
                        imageSrc={fImg7}
                        title="Titan GT77 "
                        isNew={false}
                        isSale={false}
                        price={828515}
                        stars={5}
                    />
                    <DisplayItem
                        imageSrc={fImg8}
                        title="COCIFER Purses"
                        isNew={false}
                        isSale={true}
                        price={4500}
                        stars={4}
                        discountedPrice={2485}
                    />
                    
                </div>
            </div>
        </section>
    );
};

export default DisplaySection;
