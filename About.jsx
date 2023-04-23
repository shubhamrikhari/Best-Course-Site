import HeroSection from "./Components/HeroSection";
const About = () => {
    const data = {
        name : "Shubham Rikhari",
        image : "./images/download.jpeg"
    }
    return (
        <>
            <HeroSection {...data}/>
        </>
    )
};

export default About; 