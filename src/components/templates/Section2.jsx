import Button from "../utils/Button"
import ListWithCheck from "../utils/ListWithCheck"

const Section2 = () => {

    const questions = [
       "Sentir dor o tempo todo?",
       "Tomar vários remédios para dor sem resultados satisfatórios?",
       "Idas intermináveis ao consultório médico?",
       "Acaba com a dormência",
       "Sente a perna, ombros, braços, quadris ou a coluna travados?",
       "Deixou de fazer coisas que você gosta por causa da dor?"
    ]



    return (
        <div className="w-full h-[80vh] flex flex-col items-center justify-center py-8">

            <div className="w-4/5 flex">
                <div className="w-1/2">
                    <h2 className="text-[#522a10] text-5xl font-bold py-4">Não permita que a dor tire a sua alegria de viver!</h2>
                    <ListWithCheck list={questions} />
                </div>
                <div className="w-1/2 mt-4 flex flex-wrap justify-center items-start mx-auto p-6 ">
                    <img 
                        src="https://curcumy.net.br/wp-content/uploads/2023/03/imagem1-min.png" 
                        alt="imagem do produto" 
                        className="w-4/5 h-4/5 object-contain"
                    />
                </div>
            </div>

            <Button text={"QUERO CURAR MINHA DOR!"}/>
        </div>
    )
}

export default Section2