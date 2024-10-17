import Image from 'next/image';
import IMG from "@/../../public/images/Carrer.png";
import Button from '../ui/Button';

const Carrer = () => {
    return (
        <div className="mt-8">
            <div className="relative w-full h-52">
                <Image
                    src={IMG}
                    alt="Graduation Banner"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="absolute inset-0"
                />

                {/* Content Section */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 gap-3">

                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Let’s work Together
                        </h2>
                        <p className="text-base md:text-lg text-white leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
                            habitasse platea dictumst. Fusce non venenatis velit.
                        </p>
                    </div>
                    <div>
                        <Button text='View Vacancies' bgColor='bg-white' className='' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Carrer;
