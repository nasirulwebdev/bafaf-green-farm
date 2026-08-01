import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-5">
            <h1 className="text-7xl font-bold text-red-600">
                404
            </h1>

            <p className="text-xl">
                Page Not Found
            </p>

            <Link
                to="/"
                className="btn btn-primary"
            >
                Go Home
            </Link>
        </div>
    );
}

export default NotFound;