import style from './contact.module.css';

function Contact() {
  return (
    <section id="contact" className={style.contact}>
      <h2 className={style.title}>Contact</h2>

      <form className={style.form}>
        <div className={style.field}>
          <label htmlFor="fullname">Fullname</label>
          <input
            className={style.input}
            type="text"
            name="fullname"
            id="fullname"
            placeholder="your full name"
            required
          />
        </div>

        <div className={style.field}>
          <label htmlFor="email">Email</label>
          <input
            className={style.input}
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className={style.field}>
          <label htmlFor="message">Message</label>
          <textarea
            className={style.textarea}
            name="message"
            id="message"
            placeholder="What you would like to build?"
          ></textarea>
        </div>
      </form>
    </section>
  );
}

export default Contact;
