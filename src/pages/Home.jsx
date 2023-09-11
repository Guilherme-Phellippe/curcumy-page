import Header from "../components/templates/Header"
import Main from "../components/templates/Main"
import CommonQuestions from "../components/templates/CommonQuestions"
import Depoiments from "../components/templates/Depoiments"
import Depoiments2 from "../components/templates/Depoiments2"
import Sale from "../components/templates/Sale"
import Section1 from "../components/templates/Section1"
import Section10 from "../components/templates/Section10"
import Section11 from "../components/templates/Section11"
import Section2 from "../components/templates/Section2"
import Section3 from "../components/templates/Section3"
import Section4 from "../components/templates/Section4"
import Section5 from "../components/templates/Section5"
import Section6 from "../components/templates/Section6"
import Section7 from "../components/templates/Section7"
import Section8 from "../components/templates/Section8"
import Section9 from "../components/templates/Section9"
import Footer from "../components/templates/Footer"
import { Suspense, useEffect, useState } from "react"

const Home = () => {
    const [canLoad, setLoad] = useState();

    useEffect(()=>{
        const timerout = setTimeout(()=>{
            setLoad(true)
            clearTimeout(timerout)
        }, 3000)
    },[])

    return (
        <div className="w-screen">
            <Header />
            <Suspense fallback={<span>Loading...</span>}><Main /></Suspense>
            {
                canLoad &&
                <>
                    <Suspense fallback={<span>Loading...</span>}><Section1 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section2 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Depoiments /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section3 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section4 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section5 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section6 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section7 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section8 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section9 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section10 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Depoiments2 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Sale /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section11 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><CommonQuestions /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Footer /></Suspense>
                </>
            }
        </div>
    )
}

export default Home