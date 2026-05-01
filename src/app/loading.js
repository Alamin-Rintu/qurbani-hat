import { RingLoader} from "react-spinners";

const LoadingPage = () => {
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <RingLoader />
        </div>
    );
};

export default LoadingPage;