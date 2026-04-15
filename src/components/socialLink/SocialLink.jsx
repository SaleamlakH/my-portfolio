import style from './social-link.module.css';

function SocialLink({ href = '#', children }) {
  return (
    <a href={href} className={style.social}>
      {children}
    </a>
  );
}

export default SocialLink;
