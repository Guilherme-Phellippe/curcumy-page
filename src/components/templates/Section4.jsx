const Section4 = () => {

    return (
        <div className="w-full h-[80vh] flex flex-col items-center justify-center pt-8 bg-[#f7f8ee]">

            <h2 className="text-[#522a10] text-5xl text-center font-bold py-4">
                Conheça nossas instalações!
            </h2>
            <h2 className="text-[#d7a225] text-xl text-center font-bold ">
                O Curcumy é feito nos padrões mais rigorosos da indústria
            </h2>
            <div className="w-3/4 flex justify-evenly my-8">
                <iframe
                    src="https://player.vimeo.com/video/811242492?h=e8c548aea6&badge=0&autopause=0&player_id=0&app_id=58479"
                    className="w-[300px] h-[500px]"
                ></iframe>
                <iframe
                    src="https://player.vimeo.com/video/811242450?h=e6ee44cbb5&badge=0&autopause=0&player_id=0&app_id=58479"
                ></iframe>
            </div>
        </div>
    )
}

export default Section4