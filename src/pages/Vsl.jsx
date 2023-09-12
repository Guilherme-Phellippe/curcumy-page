import HeadLine from "../components/templates/HeadLine"
import HeaderVsl from "../components/templates/HeaderVsl"
import VideoSalesLater from "../components/templates/VideoSalesLater"
import Comments from "../components/templates/Comments"
import SalesVsl from "../components/templates/SalesVsl"

const Vsl = () => {
    return (
        <div className="w-screen">
            <HeaderVsl />
            <HeadLine />
            <VideoSalesLater />
            <SalesVsl />
            <Comments />
        </div>
    )
}

export default Vsl