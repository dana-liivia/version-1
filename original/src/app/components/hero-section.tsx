import style from "./stylings/hero-section.module.css";

interface HeroSectionProps {
    className?: string
}

export default function HeroSection() {
    return (
        <div className={style.container}>
            <h1>hello world.</h1>
            <h2>happy to meet you & welcome to my slice of the www.</h2>
        </div>
    );
}