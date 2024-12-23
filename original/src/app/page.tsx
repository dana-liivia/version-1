import Header from "@/app/components/header";
import HeroSection from "@/app/components/hero-section";
import SkillSection from "@/app/components/skill-section";
import ExperiencesSection from "@/app/components/experiences-section";
import HobbiesSection from "@/app/components/hobbies-section";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <div>
            <Header></Header>
            <section id="about-me"><HeroSection></HeroSection></section>
            <section id="skills"><SkillSection></SkillSection></section>
            <section id="experiences"><ExperiencesSection></ExperiencesSection></section>
            <section id="hobbies"><HobbiesSection></HobbiesSection></section>
            <section id="footer"><Footer></Footer></section>
        </div>
    );
}
