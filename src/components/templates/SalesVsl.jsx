import Section10 from "./Section10"
import Sale from "./Sale"
import CommonQuestions from "./CommonQuestions"
import { useEffect, useState } from "react"

const SalesVsl = () => {
    const [showContainerSale, setContainerSale] = useState();


    useEffect(() => {
        const interval = setInterval(() => {
            const playUser = JSON.parse(localStorage.getItem("play")) || [];
            const result1 = playUser.reduce((acc, currentValue) => acc + Number(currentValue), 0);
            const date = new Date();
            const days = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
            const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            const currenttimeFormated = days + hours + minutes + seconds;
            const timerWatching = (currenttimeFormated - result1)
            console.log(timerWatching)
            if (timerWatching >= 1920) {
                setContainerSale(true)
                clearInterval(interval)
            }
        }, 60000)

        return () => clearInterval(interval)
    }, [])


    return (
        showContainerSale &&
        <div className="flex flex-col mt-28">
            <Sale />
            <Section10 />
            <CommonQuestions />
        </div>
    )
}

export default SalesVsl