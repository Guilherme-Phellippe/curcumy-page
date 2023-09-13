import { ArrowUDownLeft, Play, SpeakerSlash } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react";
import Types from "prop-types"
import { getTimeCurrent } from "../../scripts/calculateTimeWatched";

const Controls = ({ player }) => {
    const pauseRef = useRef();
    const progressRef = useRef();
    const contentStartVideo = useRef();
    const [play, setPlay] = useState();
    const [userAlreadyWatching, setUserAlreadyWatching] = useState();

    useEffect(() => {
        const timerWatched = JSON.parse(localStorage.getItem("timerWatched"));
        var counter = timerWatched ? timerWatched.timer : 0;

        const interval = setInterval(() => {
            if (!play || counter >= 100) clearInterval(interval);

            if (counter <= 87) counter++
            else if (counter <= 94) counter += 0.15
            else if (counter <= 100) counter += 0.06

            progressRef.current.style.width = `${Math.floor(counter)}%`;
        }, 1000);

        return () => clearInterval(interval);
    }, [play]);


    useEffect(() => {
        const timerWatched = localStorage.getItem("timerWatched");

        if (timerWatched ) setUserAlreadyWatching(true)
        else setUserAlreadyWatching(false)
    }, [])

    const handlePlayPause = async () => {
        if (!player) return

        const btnPlay = pauseRef.current;
        const isPaused = await player.getPaused();
        if (isPaused) {
            btnPlay.style.opacity = "0"
            handleSaveProgress(true);
            player.play();
        } else {
            btnPlay.style.opacity = "1"
            handleSaveProgress(false);
            player.pause();
        }
    }

    const handleStartVideo = () => {
        localStorage.removeItem("timerWatched")
        player.setCurrentTime(0)
        player.setMuted(false)
        handleSaveProgress(true);
        contentStartVideo.current.style.display = "none"
    }

    const handleContinueVideo = () => {
        const timerWatched = JSON.parse(localStorage.getItem("timerWatched"));
        player.setCurrentTime(timerWatched.timer)
        player.setMuted(false)
        handleSaveProgress(true);
        contentStartVideo.current.style.display = "none"
    }

    const handleSaveProgress = async (canPlay) => {
        const currentTime = Number(getTimeCurrent())
        var timerWatched = JSON.parse(localStorage.getItem("timerWatched")) || { timer: 0, play: currentTime , pause: currentTime };

        if (canPlay) {
            timerWatched.play = Number(currentTime)
            localStorage.setItem("timerWatched", JSON.stringify(timerWatched))
            setPlay(true)
        } else {
            timerWatched.pause = Number(currentTime)
            localStorage.setItem("timerWatched", JSON.stringify(timerWatched))
            setPlay(false)
        }
    }

    return (
        <>
            <div
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                ref={pauseRef}
                style={{ opacity: 0 }}
                onClick={handlePlayPause}
            >
                <div
                    className="w-[100px] h-[100px] bg-yellow-500/80 flex justify-center items-center cursor-pointer rounded-full"
                >
                    <Play className="text-6xl fill-white" />
                </div>
            </div>

            <div
                ref={contentStartVideo}
                className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
            >
                {
                    userAlreadyWatching ?
                        <div className="w-[90%] h-4/5 sm:w-3/4 sm:h-3/4 border-1 border-white bg-yellow-500 flex flex-col items-center rounded-xl shadow-xl">
                            <h2 className="text-white text-2xl font-bold text-center py-4">Você já começou a assistir esse vídeo</h2>
                            <div className="flex flex-col gap-4 text-xl text-white font-bold">
                                <div 
                                    className="flex items-center gap-2"
                                    onClick={handleContinueVideo}
                                >
                                    <div className="w-[30px] h-[30px] grid place-items-center rounded-full border-2 border-white">
                                        <Play />
                                    </div>
                                    Continuar assistindo?
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    onClick={handleStartVideo}
                                >
                                    <div className="w-[30px] h-[30px] grid place-items-center rounded-full border-2 border-white">
                                        <ArrowUDownLeft />
                                    </div>
                                    Assistir do inicio?
                                </div>
                            </div>
                        </div>
                        :
                        <div
                            onClick={handleStartVideo}
                            className="w-4/5 h-4/5 sm:w-3/4 sm:h-3/4 border-1 border-white bg-yellow-500 flex flex-col justify-center items-center rounded-xl shadow-xl"
                        >
                            <h2 className="text-white text-2xl font-bold">Seu video já começou!</h2>
                            <SpeakerSlash className="text-white text-9xl" />
                            <h2 className="text-white text-3xl font-bold">Clique para ouvir...</h2>
                        </div>
                }
            </div>

            <div className="w-full h-[10px] absolute bottom-0 left-0 flex justify-start">
                <div
                    ref={progressRef}
                    className="w-[0%] h-full bg-yellow-600"
                ></div>
            </div>
        </>
    )
}

Controls.propTypes = {
    player: Types.shape({
        getPaused: Types.func,
        play: Types.func,
        pause: Types.func,
        setMuted: Types.func,
        setCurrentTime: Types.func,
    }),
}

export default Controls