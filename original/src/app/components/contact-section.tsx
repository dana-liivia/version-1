import style from "@/app/components/stylings/hobbies-section.module.css";


export default function ContactSection() {
    return (
        <div className={style.container}>
            <form id="contact-form" method="POST" action="/api/contact">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="email">E-Mail:</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="message">Nachricht:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Absenden</button>
            </form>
        </div>
    );
}