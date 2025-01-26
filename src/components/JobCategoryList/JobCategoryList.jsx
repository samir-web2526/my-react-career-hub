import { useEffect, useState } from "react";
import JobCategoy from "../JobCategory/JobCategoy";


const JobCategoryList = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="mb-12">
            <div className="text-center mt-12 mb-12">
            <h1 className="text-4xl font-bold mb-4">Job Category List</h1>
            <p className="text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {
                    categories.map(category=><JobCategoy key={category.id} category={category}></JobCategoy>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;