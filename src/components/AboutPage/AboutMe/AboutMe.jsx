import React from 'react';
import { followLink } from '../../home/Footer/footerData';

const AboutMe = () => {
    return (
        <section className=''>
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 pt-5 pb-12">
                    <div className="">
                        <img className='' src="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.6435-9/97626451_2422242901399310_7848494460705964032_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFyw1PQqRft96FmC9Noa5Fr649LVgMLUrLrj0tWAwtSsmYqxrrN1PffM8uAu5-1BKayBsgoJ0FG1HiNGxH317D1&_nc_ohc=jpIluWhZeGsAX_JzCAs&_nc_ht=scontent.fdac22-1.fna&oh=bd5256b6b8c0d6a60f42556f24c8edec&oe=6191D0B4" alt="sadikur's rahman creative logo designer profile" />
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="text-xl md:text-lg lg:text-3xl font-semibold text-gray-800">
                            I’m Sadik molla and I started JUST Creative to help businesses grow & make a lasting impact on the world.
                        </h2>
                        <p className="py-2.5 text-sm md:text-base lg:text-xl text-gray-600">
                            We’re an <span className="text-brand">award-winning</span> branding agency, industry-leading design blog and creative community and we help people build brands – the strategic way.
                        </p>
                        <p className="py-2.5 text-sm md:text-base lg:text-xl text-gray-600">
                            <span className="text-brand">Our work</span> enables you to grow your business faster and easier, ensuring your business cuts through the noise and delivers a clear message with a consistent visual style that is goal focused.                        </p>
                        <p className="py-2.5 text-sm md:text-base lg:text-xl text-gray-600">
                            Our strategic thinking, distinctive logos & memorable visual identities will ensure your brand looks polished & professional for years to come.
                        </p>
                    </div>
                </div>
                <h2 className="text-center text-xl md:text-3xl lg:text-5xl font-bold text-gray-800">
                    About Sadikur Showrab
                </h2>
                <hr className='border-primary border-2 w-1/6 rounded-tl-full rounded-br-full my-8 mx-auto' />
                <div className="md:max-w-4xl mx-auto grid grid-cols-6">
                    <div className="col-span-1 flex flex-col gap-4 items-center py-2.5">
                        {
                            followLink.map((l, index) => <a href='/' key={index}>
                                <button title={l.title} className={`p-2 text-2xl text-gray-400 hover:text-white hover:bg-brand duration-500 rounded-full`}>
                                    {l.icon}
                                </button>
                            </a>)
                        }
                    </div>
                    <div className="col-span-5 shadow-md p-3 rounded-lg">
                        <p className="pb-2.5 text-sm md:text-base lg:text-xl text-gray-600">
                            sadikur Cass is a brand designer, strategist, educator, podcaster, business coach, community builder and the founder of JUST Creative, an award-winning branding & design consultancy that doubles as an industry-leading blog.
                        </p>
                        <p className="pb-2.5 text-sm md:text-base lg:text-xl text-gray-600">
                            sadikur helps grow brands strategically and has worked for clients such as Disney, Nintendo and Jerry Seinfeld however he is now focused on bringing this global brand experience to smaller businesses.
                        </p>
                        <p className="pb-2.5 text-sm md:text-base lg:text-xl text-gray-600">
                            For sadikur, design is a lifelong journey of continuously honing his craft, as well as empowering other fellow designers & entrepreneurs to build on theirs, which has allowed him to build a large and loyal following, including this website which has been viewed over 70 million times.
                        </p>
                        <p className="pb-2.5 text-sm md:text-base lg:text-xl text-gray-600">
                            sadikur holds a Bachelor of Visual Communication (Graphic Design Major) from The University of Newcastle, Sydney, Australia and a Brand Master Certification from Brand Master Academy, and over 17 years of experience in the industry with multiple awards on his belt.
                        </p>
                        <p className="pb-2.5 text-sm md:text-base lg:text-xl text-gray-600">
                            He also coaches creatives in his Inner Triangle Coaching Program, either 1:1 or in a group mastermind setting. Yahoo! recently declared him as the “Best Brand Coach to Follow in 2020”.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;