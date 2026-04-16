import * as Icons from '../Icons';
import style from './hero.module.css';
import SocialLink from '../ui/socialLink/SocialLink';
import LinkButton from '../ui/linkButton/LinkButton';

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.content}>
        <div className={style.texts}>
          <h1 className={style.header}>Sale Habtamu</h1>
          <p className={style.description}>
            A full stack developer who enjoys turning ideas into real, working products. I care
            about writing clean code and building things that actually matter.
          </p>
        </div>
        <div className={style.actions}>
          <LinkButton href="#projects" variant="primary">
            Projects
            <Icons.ArrowRight />
          </LinkButton>

          <LinkButton href="#" variant="secondary">
            <Icons.Download />
            Resume
          </LinkButton>
        </div>

        <div className={style.socials}>
          <SocialLink href="#">
            <Icons.Github />
          </SocialLink>
          <SocialLink>
            <Icons.LinkedIn />
          </SocialLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
