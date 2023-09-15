import HeadLine from "../components/templates/HeadLine"
import HeaderVsl from "../components/templates/HeaderVsl"
import VideoSalesLater from "../components/templates/VideoSalesLater"
import SalesVsl from "../components/templates/SalesVsl"
import Whatsapp from "../components/templates/Whatsapp"

const Vsl = () => {
    return (
        <div className="w-screen">
            <HeaderVsl />
            <HeadLine />
            <VideoSalesLater />
            <SalesVsl />
            <Whatsapp />
        </div>
    )
}

export default Vsl