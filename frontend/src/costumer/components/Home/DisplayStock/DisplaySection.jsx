import React from 'react';
import DisplayItem from './DisplayItem'; // Importing DisplayItem component
import fImg1 from './featuredStock/featured (1).png'; // Importing image for featured item 1
import fImg2 from './featuredStock/featured (2).png'; // Importing image for featured item 2
import fImg3 from './featuredStock/featured (3).png'; // Importing image for featured item 3
import fImg4 from './featuredStock/featured (4).png'; // Importing image for featured item 4
import fImg5 from './featuredStock/featured (5).jpg'; // Importing image for featured item 5
import fImg6 from './featuredStock/featured (6).jpg'; // Importing image for featured item 6
import fImg7 from './featuredStock/featured (7).jpg'; // Importing image for featured item 7
import fImg8 from './featuredStock/featured (8).jpg'; // Importing image for featured item 8

// Component to display a section of featured items
const DisplaySection = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    {/* Title for the section */}
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
                    {/* Description for the section */}
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                </div>
                {/* First grid for displaying featured items */}
                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                    {/* DisplayItem components for the first four items */}
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
                {/* Second grid for displaying featured items */}
                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                    {/* DisplayItem components for the next four items */}
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

export default DisplaySection; // Exporting DisplaySection component
