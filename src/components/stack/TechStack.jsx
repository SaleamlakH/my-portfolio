import StackCard from './StackCard';
import * as Icons from '../Icons';
import { techStacks } from './techStacks';
import style from './tech-stack.module.css';

function TechStack() {
  return (
    <section id="stack" className={style.techStack}>
      <h2>Tech Stack</h2>

      {techStacks.map(({ category, stacks }) => (
        <div className={style.category}>
          <h3>{category}</h3>

          <div className={style.cardsContainer}>
            {stacks.map(({ name, icon }) => {
              const StackIcon = Icons[icon];
              return (
                <StackCard>
                  <StackIcon />
                  {name}
                </StackCard>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

export default TechStack;
