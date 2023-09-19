import { WhatsappLogo } from "@phosphor-icons/react";
import formatNumber from "../scripts/FormatNumber";
import { useRef } from "react";
import OptimizedImg from "../components/utils/OptimizedImg"

const Presell = () => {
    const refContainerInputNumberClient = useRef();

    const handleFormatNumber = ({ currentTarget }) => {
        const result = formatNumber(currentTarget.value);
        refContainerInputNumberClient.current.querySelector("input").value = result;
        currentTarget.value = result
    }

    const handleSubmitForm = () => {
        const input = refContainerInputNumberClient.current.querySelector("input");
        if (input.value) {
            window.location.href = "/vsl"
        } else {
            refContainerInputNumberClient.current.style.border = "1px solid red"
            refContainerInputNumberClient.current.querySelector("p#message-error").style.display = "block"
        }
    }

    return (
        <div className="w-screen min-h-screen bg-gradient-to-br from-green-400 via-green-100 to-white grid place-items-center">
            <div className="w-full flex flex-col items-center md:gap-4">

                <div className="w-full flex flex-col items-center">
                    <h1 className="w-full md:w-3/4 text-center text-xl md:text-4xl leading-snug font-bold text-green-950 p-2">
                        Para ter acesso ao vídeo completo que vai ajudar você a se livrar de suas dores
                    </h1>
                    <h2 className="text-center text-2xl md:text-5xl leading-snug font-bold uppercase text-green-950 p-1">Faça sua inscrição:</h2>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-center gap-4 items-center py-8">
                    <div className="w-3/4  md:w-[500px]">
                        <OptimizedImg imgs={"https://i.ibb.co/3sgqLvH/Design-sem-nome-30-removebg-preview-1.webp"} alt="Dois idosos felizes" />
                    </div>
                    <div
                        className="p-4 flex flex-col items-center justify-center gap-4 bg-green-700 rounded-xl shadow-md"
                    >
                        <label className="text-white font-bold pb-4 text-xl text-center">Deixe seu whatsapp para ter acesso ao vídeo:</label>
                        <div
                            className="flex items-center justify-start bg-zinc-100 px-4 rounded-xl relative"
                            ref={refContainerInputNumberClient}
                        >
                            <div className="p-2">
                                <WhatsappLogo className="fill-green-600 text-3xl" />
                            </div>
                            <input
                                type="tel"
                                placeholder="(xx) x xxxx-xxxx"
                                autoComplete="on"
                                className="w-3/5 bg-zinc-100 text-xl my-4 rounded-xl outline-none"
                                onChange={handleFormatNumber}
                            />
                            <p
                                id="message-error"
                                className="w-full text-sm md:text-md text-center text-red-900 font-bold hidden absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white p-1 rounded-xl"
                            >Digite seu número correto antes de proseguir...</p>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmitForm}
                            className="bg-green-300 w-full p-4 text-xl text-green-900 font-bold cursor-pointer mt-10"
                        >Acessar conteúdo grátis</button>
                        <span
                            className="text-zinc-100/40 underline cursor-pointer"
                            onClick={() => window.location.href = "/vsl"}
                        >Pular</span>
                    </div>
                </div>

            </div>

            <span className="w-full md:w-1/2 flex justify-center text-center">
                Esse não não está sobre a autoridade do Facebook por isso qualquer conteúdo que for exibido nessa página está por inteira responsabilidade de seus produtos!
            </span>
        </div>
    )
}

export default Presell