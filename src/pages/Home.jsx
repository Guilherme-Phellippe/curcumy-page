import Depoiments from "../components/templates/Depoiments"
import Header from "../components/templates/Header"
import Main from "../components/templates/Main"
import Section1 from "../components/templates/Section1"
import Section2 from "../components/templates/Section2"
import Section3 from "../components/templates/Section3"
import Section4 from "../components/templates/Section4"
import Section5 from "../components/templates/Section5"
import Section6 from "../components/templates/Section6"

const Home = ()=> { 
    return(
        <div className="w-screen">
            <Header />
            <Main />
            <Section1 />
            <Section2 />
            <Depoiments />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </div>
    )
}

export default Home