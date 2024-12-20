import style from "@/app/components/stylings/header.module.css";

export default function Header() {
    return (
        <div className={style.container}>
            <img src={"logo.png"} alt="logo"/>

        </div>
    );
}