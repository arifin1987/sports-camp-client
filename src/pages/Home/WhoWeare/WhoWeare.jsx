import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const WhoWeare = () => {
    return (
        <div>
            <SectionTitle
            subHeading={"We are exceptional than others"}
            heading={"Who We Are"}
            ></SectionTitle>
            <div className="md:grid grid-cols-3 gap-2">
                <div>
                    <h1 className="text-2xl text-center">Our Expert Instructors</h1>
                    <p className="border-2 p-2 border-sky-300">A summer camp or sleepaway camp is a supervised program for children conducted during the summer months in some countries. Children and adolescents who attend summer camps are known as campers. Summer school is usually a part of the academic curriculum for a student to make up work not accomplished during the academic year (summer camps can include academic work, but is not a requirement for graduation).</p>
                </div>
                <div>
                    <h1 className="text-2xl text-center">Our Modern Classes</h1>
                    <p className="border-2 p-2 border-sky-300">A summer camp or sleepaway camp is a supervised program for children conducted during the summer months in some countries. Children and adolescents who attend summer camps are known as campers. Summer school is usually a part of the academic curriculum for a student to make up work not accomplished during the academic year (summer camps can include academic work, but is not a requirement for graduation).</p>
                </div>
                <div>
                    <h1 className="text-2xl text-center">Our Beautiful Campus </h1>
                    <p className="border-2 p-2 border-sky-300">A summer camp or sleepaway camp is a supervised program for children conducted during the summer months in some countries. Children and adolescents who attend summer camps are known as campers. Summer school is usually a part of the academic curriculum for a student to make up work not accomplished during the academic year (summer camps can include academic work, but is not a requirement for graduation).</p>
                </div>
            </div>
            
        </div>
    );
};

export default WhoWeare;