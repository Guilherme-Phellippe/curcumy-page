import Button from "../utils/Button";

const depoiments = [
    {
        id: 0,
        link: "https://player.vimeo.com/video/796445877?h=5c686f03c4&badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
        id: 1,
        link: "https://player.vimeo.com/video/796448820?h=cee387a1b4&badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
        id: 2,
        link: "https://player.vimeo.com/video/796441598?h=79a29ec115&ba dge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
        id: 3,
        link: "https://player.vimeo.com/video/765934020?h=0821a4e809"
    },
    {
        id: 4,
        link: "https://player.vimeo.com/video/765934041?h=dd06b2715b"
    },
    {
        id: 5,
        link: "https://player.vimeo.com/video/765934002?h=b9c57623c0"
    },
]

const Depoiments = () => {

    return (
        <div className="w-full h-auto py-4 flex flex-col justify-center items-center bg-[url(https://curcumy.net.br/wp-content/uploads/2023/03/desk3-scaled-1.jpg)] bg-cover">

            <h2 className="w-1/2 p-6 my-4 text-center text-white font-bold text-5xl ">Testado e aprovado por milhares de pessoas!</h2>

            <div className="w-4/5 flex justify-center items-center gap-8">
                {
                    depoiments.map((depoiment, index) =>
                        index < 3 &&
                        <div
                            key={depoiment.id}
                            className={`w-[300px] h-[550px] bg-white snap-center`}
                        >
                            <iframe
                                src={depoiment.link}
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    )
                }
            </div>
            <Button text={"QUERO ESSES RESULTADOS!"} />
            <div className="w-4/5 flex justify-center items-center gap-8 my-8">
                {
                    depoiments.map((depoiment, index) =>
                        index >= 3 &&
                        <div
                            key={depoiment.id}
                            className={`w-[300px] h-[550px] bg-white snap-center`}
                        >
                            <iframe
                                src={depoiment.link}
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    )
                }
            </div>
            <p  className="w-1/2 p-6 text-center text-white font-medium text-3xl">Pessoas satisfeitas que voltaram a ter uma vida em paz e sem dores</p>
            <Button text={"QUERO ESSES RESULTADOS!"} />
        </div>
    )
}

export default Depoiments