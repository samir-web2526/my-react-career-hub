

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row  items-center mt-3'>
                <div>
                    <div>
                    <h1 className='text-7xl font-bold mb-6'>One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    </div>
                    <div className='mt-6'>
                        <button  className='btn bg-[#7E90FE]'>Get Started</button>
                    </div>
                </div>
                <div>
                    <img src="../../assets/media/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;