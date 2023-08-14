import SectionTitle from "../../components/SectionTitle/SectionTitle";


const Investors = () => {
    return (
        <div>
            <SectionTitle
            subHeading={"Our trusted Investors"}
            heading={"Our Inverstors"}
            ></SectionTitle>
            <div className="md:grid grid-cols-4 gap-4">
                <div>
                    <h1 className="text-center font-bold text-xl">J&J Group</h1>
                    <p className="border-2 border-teal-300 p-2 rounded mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore numquam voluptatum molestiae, fugit tenetur sint facere in maxime quod.</p>
                </div>
                <div>
                    <h1 className="text-center font-bold text-xl">Triangle Group</h1>
                    <p className="border-2 border-teal-300 p-2 rounded mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore numquam voluptatum molestiae, fugit tenetur sint facere in maxime quod.</p>
                </div>
                <div>
                    <h1 className="text-center font-bold text-xl">Circle Group</h1>
                    <p className="border-2 border-teal-300 p-2 rounded mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore numquam voluptatum molestiae, fugit tenetur sint facere in maxime quod.</p>
                </div>
                <div>
                    <h1 className="text-center font-bold text-xl">M&M Group</h1>
                    <p className="border-2 border-teal-300 p-2 rounded mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore numquam voluptatum molestiae, fugit tenetur sint facere in maxime quod.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Investors;