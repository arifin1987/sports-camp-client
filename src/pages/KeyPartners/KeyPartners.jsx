import SectionTitle from "../../components/SectionTitle/SectionTitle";


const KeyPartners = () => {
    return (
        <div>
            <SectionTitle

            subHeading={"Our Honorable Partners"}
            heading={"Our Key Partners"}
            ></SectionTitle>
            <div className="md:flex justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold">Mr. Samson</h2>
                    <img src="/image/corp1.avif" alt=""  />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio molestiae ex, tenetur maxime architecto, distinctio atque quasi repellendus voluptas rerum? Repudiandae minima consectetur cumque reprehenderit consequatur error incidunt officia?</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Mr. Jack</h2>
                    <img src="/image/corp2.avif" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio molestiae ex, tenetur maxime architecto, distinctio atque quasi repellendus voluptas rerum? Repudiandae minima consectetur cumque reprehenderit consequatur error incidunt officia?</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Mr. Sparrow</h2>
                    <img src="/image/corp3.avif" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio molestiae ex, tenetur maxime architecto, distinctio atque quasi repellendus voluptas rerum? Repudiandae minima consectetur cumque reprehenderit consequatur error incidunt officia?</p>
                </div>
            </div>
        
        </div>
    );
};

export default KeyPartners;