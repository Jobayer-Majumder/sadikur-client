import React from 'react';


const randomImage = [
    'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/05/minimalism.png?auto=format&q=60&w=2060&h=1545&fit=crop&crop=faces',
    'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/118601928/original/f807d667a684fa28e0831504d9e6afa36cc2273f/do-minimalist-logo-design-with-full-copyrights-103d.jpg',
    'https://images-platform.99static.com/zjmEu9iNJOx6D5lDVLBoWlDAvO4=/157x612:1412x1867/500x500/top/smart/99designs-contests-attachments/97/97224/attachment_97224175',
    'https://thumbs.dreamstime.com/b/abstract-silver-roof-logo-design-black-background-abstract-silver-roof-logo-design-107205438.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjQha3n7inDf-TcLPyDQfMC1tIt5xvEjTy1PpL9Y80JuUy0010r0TV2NRt35kzTkMe8o&usqp=CAU',
    'https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094726/artisan-oz.jpg',
    'https://i.pinimg.com/originals/28/f8/73/28f8739bb203be30d878fabe65e291b9.png',
    'https://img.freepik.com/free-vector/minimalist-lion-logo_44523-4.jpg?size=626&ext=jpg',
    'https://t3.ftcdn.net/jpg/03/21/89/36/360_F_321893630_Z4PHwtQv0GXdn22DXnl76G8zdgn3mhVB.jpg'
]



const SingleWork = ({ work }) => {

    const a = Math.floor(Math.random() * randomImage.length);

    return (
        <>
            <div>
                <img src={randomImage[a]} className='w-full h-72 rounded-md border-b-4 cursor-pointer border-transparent hover:border-primary duration-500' alt="logo" />
                <h3 className="font-semibold text-gray-800 py-2">
                    {work.title}
                </h3>
                <p className="text-sm text-gray-800">
                    {work.description}
                </p>
            </div>
        </>
    );
};

export default SingleWork;