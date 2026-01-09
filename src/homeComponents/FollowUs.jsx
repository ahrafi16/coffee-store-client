

const FollowUs = () => {

    const images = [
        {
            'id': '1',
            'imgAddress': '/images/cups/Rectangle 9.png'
        },
        {
            'id': '10',
            'imgAddress': '/images/cups/Rectangle 10.png'
        },
        {
            'id': '11',
            'imgAddress': '/images/cups/Rectangle 11.png'
        },
        {
            'id': '12',
            'imgAddress': '/images/cups/Rectangle 12.png'
        },
        {
            'id': '13',
            'imgAddress': '/images/cups/Rectangle 13.png'
        },
        {
            'id': '14',
            'imgAddress': '/images/cups/Rectangle 14.png'
        },
        {
            'id': '15',
            'imgAddress': '/images/cups/Rectangle 15.png'
        },
        {
            'id': '16',
            'imgAddress': '/images/cups/Rectangle 16.png'
        },
    ]

    return (
        <div>
            <div className="flex  flex-col gap-3 items-center my-6">
                <p className="text-xl">Follow Us Now</p>
                <h2 className="text-3xl font-extrabold rancho-regular">Follow on Instagram</h2>
            </div>
            <div className="grid my-6 grid-cols-1 md:grid-cols-4 gap-6">
                {
                    images.map((i) => (
                        <img key={i.id} className="w-full p-6 md:p-0 duration-200 hover:scale-105" src={i.imgAddress} alt=""></img>
                    ))
                }

            </div>
        </div>
    );
};

export default FollowUs;