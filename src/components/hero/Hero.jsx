import * as Icons from '../Icons';
import style from './hero.module.css';
import SocialLink from '../ui/socialLink/SocialLink';
import LinkButton from '../ui/linkButton/LinkButton';
import { socialLinks } from '../ui/socialLink/social-links';

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

        {/* Actions */}
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

        {/* Social links */}
        <div className={style.socials}>
          {socialLinks.map(({ href, icon }) => {
            const LinkIcon = Icons[icon];
            return (
              <SocialLink key={href} href={href}>
                <LinkIcon />
              </SocialLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
