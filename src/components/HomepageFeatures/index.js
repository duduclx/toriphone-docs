import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Collaborate',
    Svg: require('@site/static/img/homepage/undraw_community.svg').default,
    description: (
      <>
        We create, learn, and grow together. You are no longer alone!
      </>
    ),
  },
  {
    title: 'Create',
    Svg: require('@site/static/img/homepage/undraw_progressive_app.svg').default,
    description: (
      <>
        You can easily create your ecosystem, and participate in the community.
      </>
    ),
  },
  {
    title: 'Enjoy',
    Svg: require('@site/static/img/homepage/undraw_happy_music.svg').default,
    description: (
      <>
        You now have all the keys in hand, and everything becomes simpler! Enjoy!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
