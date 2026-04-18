import style from './footer.module.css';
import SocialLink from '../ui/socialLink/SocialLink';
import * as Icons from '../Icons';
import { socialLinks } from '../ui/socialLink/social-links';

function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.brand}>Sale.amlak</p>
      <p className={style.description}>
        Fullstack developer who know the fundamentals at the age of AI.
      </p>

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
    </footer>
  );
}

export default Footer;
