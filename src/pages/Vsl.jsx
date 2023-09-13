import HeadLine from "../components/templates/HeadLine"
import HeaderVsl from "../components/templates/HeaderVsl"
import VideoSalesLater from "../components/templates/VideoSalesLater"
import SalesVsl from "../components/templates/SalesVsl"

const Vsl = () => {
    return (
        <div className="w-screen">
            <HeaderVsl />
            <HeadLine />
            <VideoSalesLater />
            <SalesVsl />
        </div>
    )
}

export default Vsl