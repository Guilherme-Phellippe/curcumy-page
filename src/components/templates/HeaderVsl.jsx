import axios from "axios";
import { useEffect, useState } from "react"

const HeaderVsl = () => {
    const [city, setCity] = useState();

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                // Obtém as coordenadas de latitude e longitude
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Crie uma URL para a solicitação de geocodificação reversa
                var url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

                const response = await axios.get(url).catch(err => console.log(err))

                if(response.status === 200){
                    const city = response.data.address.city;
                    city ? setCity(city) : setCity("Brasil")
                }else setCity("Brasil")


            })
        } else setCity("Brasil")
    }, [])


    return (
        city &&
        <div className="w-full bg-gradient-to-r from-[#5a2400] to-[#231100]">
            <h2 className="w-full text-xl text-center font-bold text-zinc-100 p-4">
                Selecionamos <span className="text-[#ff0000] uppercase">{city}</span> por que sabemos que as pessoas aqui estão realmente <span className="text-[#ff0000] uppercase">sofrendo</span> com esse problema.
            </h2>
        </div>
    )
}

export default HeaderVsl