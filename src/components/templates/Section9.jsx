import Button from "../utils/Button"

const Section9 = () => {

    return (
        <div className="w-full py-16 flex flex-col items-center bg-gradient-to-r from-[#592400] to-[#271200]">
            <h2 className="w-full text-white text-2xl sm:text-3xl md:text-4x lg:text-5xl text-center font-bold px-4">
                Não há mais tempo para perder,<br />
                há apenas uma decisão para ser tomada...
            </h2>

            <Button
                text={"EU QUERO O CURCUMY!"}
                onClick={() => window.location.href = "#container-sales"}
            />
        </div>
    )
}

export default Section9