

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center">
            <h4 className="text-blue-500 mb-2 my-10">{subHeading}</h4>
            <h2 className="text-5xl mb-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;