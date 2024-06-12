import { useRouteError } from "react-router-dom";
const Error = () =>
{
    const err = useRouteError();
    console.log(err);
    return <div>
        <h1>Oops something went wrong... {err.status}</h1>
    </div>;
};
export { Error };