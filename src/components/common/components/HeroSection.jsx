const HeroSection = ({ backgroundImage, title, subtitle, overlay = false }) => {
    return (
        <section
            className="w-full bg-center bg-cover bg-no-repeat flex items-center justify-center relative"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            {overlay && <div className="absolute inset-0 bg-black/50"></div>}

            <div className="relative text-center px-6 py-32">
                <h1
                    data-aos="fade-up"
                    className="text-white text-4xl md:text-5xl font-semibold font-heading"
                >
                    {title}
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-white mt-4 text-lg font-heading"
                >
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

export default HeroSection;