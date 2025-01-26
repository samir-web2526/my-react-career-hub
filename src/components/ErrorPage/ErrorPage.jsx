import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-48">
            <h3 className="text-5xl mb-8 text-red-600">Ooopssss!!!</h3>
            <Link to={"/"}><button className="btn px-4">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;