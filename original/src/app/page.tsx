import Header from "@/app/components/header";
import HeroSection from "@/app/components/hero-section";
import SkillSection from "@/app/components/skill-section";
import ExperiencesSection from "@/app/components/experiences-section";
import HobbiesSection from "@/app/components/hobbies-section";
import Footer from "@/app/components/footer";
import AboutMeSection from "@/app/components/about-me-section";

export default function Home() {
  return (
      <div>
          <Header></Header>
          <HeroSection></HeroSection>
          {/*<AboutMeSection></AboutMeSection>*/}
          <SkillSection></SkillSection>
          <ExperiencesSection></ExperiencesSection>
          <HobbiesSection></HobbiesSection>
          {/* contact form */}
          <Footer></Footer>
      </div>
  );
}
