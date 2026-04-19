import SocialLink from '../ui/socialLink/SocialLink';
import { Github } from '../Icons';
import ContributionGrid from './ContributionGrid';
import { useEffect, useState } from 'react';
import style from './contributions.module.css';

function ContributionGraph() {
  const [contributions, setContributions] = useState(null);

  // fetch contributions
  useEffect(() => {
    const controller = new AbortController();

    const getContributions = async () => {
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/SaleamlakH', {
          signal: controller.signal,
        });

        const gitContribution = await response.json();
        setContributions(gitContribution.contributions);
      } catch (error) {
        console.log(error);
      }
    };

    getContributions();

    return () => controller.abort();
  }, []);

  // get the last 52/53 weeks of contribution
  const lastYearContributions = () => {
    const NUMBER_OF_WEEKS_IN_YEAR = 52;
    const NUMBER_OF_WEEKDAYS = 7;

    const allContributions = contributions
      .reduce((arr, contribution) => {
        const date = new Date(contribution.date);
        if (date <= new Date()) {
          arr.push(contribution);
        }

        return arr;
      }, [])
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    // slice the last 52 weeks + current week
    const numLastWeekDays = new Date(allContributions.at(-1).date).getDay() + 1;
    return allContributions.slice(
      -(NUMBER_OF_WEEKS_IN_YEAR * NUMBER_OF_WEEKDAYS + numLastWeekDays),
    );
  };

  const totalContributions = () => {
    return lastYearContributions().reduce((sum, { count }) => (sum += count), 0);
  };

  return (
    <section className={style.contributions}>
      <h2 className={style.title} hidden>
        Contribution
      </h2>

      <div className={style.container}>
        <div className={style.summary}>
          <SocialLink>
            <Github />
          </SocialLink>
          <strong>{contributions ? `${totalContributions()} Contributions` : 'Loading...'}</strong>
        </div>

        <div className={style.calendarFrame}>
          <ContributionGrid contributions={contributions && lastYearContributions()} />
        </div>

        <div className={style.legend}>
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <span className={style.day} data-level={level}></span>
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
}

export default ContributionGraph;
