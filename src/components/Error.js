import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1 className="flex justify-center text-xl">oops!</h1>
            <h2 className="flex justify-center text-xl">Something went wrong!!</h2>
            <h2 className="flex justify-center text-xl">{err.status + ":" + err.statusText}</h2>
        </div>
    );
};
export default Error;