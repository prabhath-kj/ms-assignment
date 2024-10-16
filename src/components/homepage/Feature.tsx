import React from 'react';

const Feature = () => {
    return (
        <section className="px-4 mt-8 md:px-6 lg:px-12 xl:px-22 2xl:px-44">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Content */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                        Lorem ipsum dolor sit amet, consectetur
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        mattis velit nulla. In hac habitasse platea dictumst. Fusce non
                        venenatis velit. Proin luctus malesuada mauris vitae mattis.
                    </p>
                </div>

                {/* Right Content */}
                <div className="space-y-6">
                    <div className="border-l-2 border-black p-4 ">
                        <h3 className="font-bold text-lg text-black">Lorem ipsum</h3>
                        <p className="text-gray-600 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla.
                        </p>
                    </div>
                    <hr />
                    <div className="border-l-2 border-black p-4 ">
                        <h3 className="font-bold text-lg text-black">Lorem ipsum</h3>
                        <p className="text-gray-600 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
