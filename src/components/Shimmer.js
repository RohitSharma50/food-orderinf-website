
import RestrauntCard from "../components/RestrauntMenu";
const Shimmer = () => {
    return (
        <>
            <div className="resturant-list flex flex-wrap shadow-lg  max-w-screen-2xl justify-center">
                {Array(10)
                    .fill("").map((e, index) => (
                        <div key={index}
                            className="Shimmer-card  w-64 h-80 m-3 p-10 shadow-lg shadow-zinc-500 flex-wrap">
                            <div className="w-52 h-40 p-1 shadow-lg justify-center shadow-black">

                            </div>
                            <div className="w-48 h-2  shadow-black justify-start"></div>
                        </div>

                    ))}


            </div>
        </>
    );
}
export default Shimmer;