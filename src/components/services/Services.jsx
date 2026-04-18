import { services } from './services';
import * as Icons from '../Icons';
import style from './services.module.css';

function Services() {
  return (
    <section id="services" className={style.services}>
      <h2 className={style.title}>Core Capabilities</h2>

      <div className={style.cardsContainer}>
        {services.map(({ icon, title, description }) => {
          const Icon = Icons[icon];
          return (
            <div className={style.card}>
              <header className={style.header}>
                <span className={style.icon}>
                  <Icon />
                </span>
                <h3 className={style.title}>{title}</h3>
              </header>
              <p className={style.description}>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
