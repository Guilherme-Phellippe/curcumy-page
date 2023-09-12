import { Play, SpeakerSlash } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react";
import Types from "prop-types"

const Controls = ({ player }) => {
    const pauseRef = useRef();
    const progressRef = useRef();
    const contentStartVideo = useRef();
    const [play, setPlay] = useState();

    useEffect(() => {
        var counter = Number(localStorage.getItem("timerWatching")) || 0;

        const interval = setInterval(() => {
            if(!play || counter >= 100) clearInterval(interval);

            if (counter <= 87)  counter++
            else if(counter <= 94) counter += 0.15
            else if(counter <= 100) counter += 0.06
            
            progressRef.current.style.width = `${Math.floor(counter)}%`;
        }, 1000);

        return () =>  clearInterval(interval);
    }, [play]);    

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
        player.setCurrentTime(0)
        player.setMuted(false)
        handleSaveProgress(true);
        contentStartVideo.current.style.display = "none"
    }


    const handleSaveProgress = async (canPlay) => {
        const playUser = JSON.parse(localStorage.getItem("play")) || [];
        const pauseUser = JSON.parse(localStorage.getItem("pause")) || [];
        const date = new Date();
        const days = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
        const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        const currenttimeFormated = days + hours + minutes + seconds;

        if (canPlay) {
            playUser.push(currenttimeFormated)
            localStorage.setItem("play", JSON.stringify(playUser))
            setPlay(true)
        } else {
            pauseUser.push(currenttimeFormated)
            localStorage.setItem("pause", JSON.stringify(pauseUser))
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
                onClick={handleStartVideo}
                ref={contentStartVideo}
                className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
            >
                <div className="w-3/4 h-3/4 border-1 border-white bg-yellow-500 flex flex-col justify-center items-center rounded-xl shadow-xl">
                    <h2 className="text-white text-2xl font-bold">Seu video já começou!</h2>
                    <SpeakerSlash className="text-white text-9xl" />
                    <h2 className="text-white text-3xl font-bold">Clique para ouvir...</h2>
                </div>
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