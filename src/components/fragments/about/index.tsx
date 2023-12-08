import Section from "@/components/Section";
import HeroSectionAbout from "./HeroSection";
import { Title } from "../Title";

const About = () => {
    return (
        <Section className="my-16 lg:my-0 bg-secondary py-8">
            <div id="about" className="flex flex-col items-center justify-center w-full">
                <Title label="About Me"/>
            </div>
            <HeroSectionAbout/>
        </Section>
    )
}
export default About;