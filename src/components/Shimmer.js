
import RestrauntCard from "../components/RestrauntMenu";
const Shimmer = () => {
    return (
        <>
            <div className="resturant-list flex flex-wrap shadow-lg  max-w-screen-2xl justify-center">
                {Array(15)
                    .fill("").map((e, index) => (
                        <div key={index}
                            className="w-64 h-72 m-3 p-4 shadow-lg shadow-zinc-500 flex-wrap">
                            <div className="w-56 basis- h-36 shadow-lg justify-center  shadow-stone-500"> </div>
                            <div className="w-44 h- mt-4 shadow-md shadow-black p-3 justify-start"></div>
                            <div className="w-48 h-3 mt-4 shadow-black  shadow-md p-2 justify-start"></div>
                            <div className="w-full h-3 mt-4 shadow-black  shadow-md p-2 justify-start"></div>

                        </div>

                    ))}


            </div>
        </>
    );
}
export default Shimmer;