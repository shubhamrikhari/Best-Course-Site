import HeroSection from './Components/HeroSection';
const Home = () => {
    const data = {
        name : "Shubham Rikhari", 
        image : "./images/logo1.jpg"
    }
    return (
        <>
            <HeroSection {...data} />
        </>
    )
}

export default Home;