import Section10 from "./Section10"
import Sale from "./Sale"
import CommonQuestions from "./CommonQuestions"
import { useEffect, useState } from "react"
import { calculateTimerByCurrentTimer } from "../../scripts/calculateTimeWatched"
import Comments from "./Comments"
import Button from "../utils/Button"


const SalesVsl = () => {
    const [showContainer, setContainer] = useState();


    useEffect(() => {
        const interval = setInterval(() => {
            const timerWatched = calculateTimerByCurrentTimer();

            if (timerWatched >= 1580) {
                // eslint-disable-next-line no-undef
                fbq('trackCustom', 'Vsl_ShowCurcumyContent', { describe: "O conteúdo o curcumy para venda foi exibido" });
                setContainer({ comment: true, sales: true })
                clearInterval(interval)
            } else if (timerWatched >= 1000) {
                // eslint-disable-next-line no-undef
                fbq('trackCustom', 'Vsl_ShowComments', { describe: "O conteúdo dos comentários foi exibido" });
                setContainer({ comment: true });
            }

        }, 10000)

        return () => clearInterval(interval)
    }, [])


    const handleClickButtonKnowMore = () => {
        // eslint-disable-next-line no-undef
        fbq('trackCustom', 'Vsl_ClickButtonKnowMore', { describe: "O usuário clicou no botão para saber mais do curcumy" });
        window.location.href = "/"
    }


    return (
        <div className="flex flex-col mt-28">
            {
                showContainer?.sales &&
                <>
                    <Sale page="VSL" />
                    <Section10 />
                    <CommonQuestions />
                    <div className="flex flex-col bg-gradient-to-r from-[#592400] to-[#271200]">
                        <h2 className="text-center text-3xl p-4 font-bold text-white">Ainda está com dúvidas?</h2>
                        <h3 className="text-center text-2xl text-white">Veja mais detalhes do produtos</h3>
                        <Button onClick={handleClickButtonKnowMore} text="Ver mais detalhes" animate={false} />
                    </div>
                </>
            }
            {showContainer?.comment && <Comments />}
        </div>
    )
}

export default SalesVsl