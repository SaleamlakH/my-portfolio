import style from './stack-card.module.css';

function StackCard({ children }) {
  return <div class={style.stack}>{children}</div>;
}

export default StackCard;
