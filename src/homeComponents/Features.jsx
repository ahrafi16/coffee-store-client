

const Features = () => {

    const features = [
        {
            "id": 1,
            "title": "Awesome Aroma",
            "description": "You will definitely be a fan of the design & aroma of your coffee",
            "logo": "/images/icons/1.png"
        },
        {
            "id": 2,
            "title": "High Quality",
            "description": "We served the coffee to you maintaining the best quality",
            "logo": "/images/icons/2.png"
        },
        {
            "id": 3,
            "title": "Pure Grades",
            "description": "Your coffee is brewed by first roasting the green coffee beans",
            "logo": "/images/icons/3.png"
        },
        {
            "id": 4,
            "title": "Proper Roasting",
            "description": "Carefully roasted to bring out the best flavor and richness",
            "logo": "/images/icons/4.png"
        }
    ]


    return (
        <div className="bg-[#ECEAE3] flex flex-col md:flex-row gap-3 py-8 px-6 md:px-28">
            {
                features.map(feature => (
                    <div className="flex flex-col p-3 gap-3" key={feature.id}>
                        <img className="w-16 h-16" src={feature.logo} alt={feature.title} />
                        <h3 className="text-2xl rancho-regular">{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Features;