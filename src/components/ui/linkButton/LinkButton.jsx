import style from './link-button.module.css';

function LinkButton({ href, children, variant = 'primary' }) {
  return (
    <a href={href} className={style[variant]}>
      {children}
    </a>
  );
}

export default LinkButton;
