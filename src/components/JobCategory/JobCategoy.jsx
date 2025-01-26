

const JobCategoy = ({category}) => {

    return (
        <div className="bg-base-200 rounded px-10 py-10">
            <img src={category.logo} alt="" />
            <h1 className="font-bold text-2xl mt-3 mb-3">{category.category_name}</h1>
            <p className="text-xl">{category.availability}</p>
        </div>
    );
};

export default JobCategoy;