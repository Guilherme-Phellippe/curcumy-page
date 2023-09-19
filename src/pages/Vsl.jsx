import HeadLine from "../components/templates/HeadLine"
import HeaderVsl from "../components/templates/HeaderVsl"
import VideoSalesLater from "../components/templates/VideoSalesLater"
import SalesVsl from "../components/templates/SalesVsl"
import Whatsapp from "../components/templates/Whatsapp"
import { Suspense } from "react"

const Vsl = () => {
    return (
        <div className="w-screen bg-gradient-to-tr from-[#F1B681] to-[#ffffff]">
            <Suspense fallback={"Carregando..."}>
                <HeaderVsl />
            </Suspense>
            <Suspense fallback={"Carregando..."}>
                <HeadLine />
            </Suspense>
            <Suspense fallback={"Carregando..."}>
                <VideoSalesLater />
            </Suspense>
            <SalesVsl />
            <Whatsapp />
        </div>
    )
}

export default Vsl