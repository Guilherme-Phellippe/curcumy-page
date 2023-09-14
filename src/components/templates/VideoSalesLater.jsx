import { useEffect, useRef, useState } from "react"
import Vimeo from "@vimeo/player";
import Controls from "../utils/Controls";
import { SpeakerSimpleHigh } from "@phosphor-icons/react";
import { addPauseLocalStorage } from "../../scripts/calculateTimeWatched";

const VideoSalesLater = () => {
    const containerFrameRef = useRef();
    const [player, setPlayer] = useState();

    useEffect(() => {
        const iframe = containerFrameRef.current.querySelector("iframe")
        const playerVimeo = new Vimeo(iframe, { id: '863621288', });
        // eslint-disable-next-line no-undef
        fbq('trackCustom', 'Vsl_VideoLoad', { describe: "O video da vsl foi carregado!" });
        setPlayer(playerVimeo)
    }, [])

    useEffect(() => {
        function addTimerPause(e) {
            e.preventDefault();
            // eslint-disable-next-line no-undef
            fbq('trackCustom', 'Vsl_UserLeftThePage', { describe: "O usuário saiu da página" });
            addPauseLocalStorage();
        }

        window.addEventListener("beforeunload", addTimerPause)

        return () => window.removeEventListener("beforeunload", addTimerPause)
    })


    return (
        <div className="flex flex-col my-8 mb-32">
            <h2 className="flex justify-center items-center gap-1 sm:gap-4 font-bold text-lg sm:text-2xl text-black my-4">
                <SpeakerSimpleHigh /> Por favor, verifique se o som está ligado.
            </h2>
            <div className="w-full flex justify-center">
                <div
                    ref={containerFrameRef}
                    className="w-[370px] h-[250px] bg-black sm:w-[600px] sm:h-[330px] md:w-[750px] md:h-[380px] lg:w-[850px] lg:h-[480px] relative"
                >
                    <iframe
                        src="https://player.vimeo.com/video/863621288?badge=0&autoplay=1&muted=1&player_id=0&controls=0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="w-full h-full shadow-xl "
                        title="202309121148"
                    ></iframe>



                    <Controls
                        player={player}
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoSalesLater