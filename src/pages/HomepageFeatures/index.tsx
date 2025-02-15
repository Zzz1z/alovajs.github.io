import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.features.Simple and familiar">Simple and familiar</Translate>,
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <Translate id="homepage.features.Simple and familiar.desc">
        API design similar to axios, making it easier and more familiar for you to get started
      </Translate>
    )
  },
  {
    title: (
      <Translate id="homepage.features.High performance request strategy">High performance request strategy</Translate>
    ),
    Svg: require('@site/static/img/4.svg').default,
    description: (
      <Translate id="homepage.features.High performance request strategy.desc">
        Different request strategies are provided for different request scenarios to reduce performance problems caused
        by requests
      </Translate>
    )
  },
  {
    title: <Translate id="homepage.features.Request-level cache">Request-level cache</Translate>,
    Svg: require('@site/static/img/5.svg').default,
    description: (
      <Translate id="homepage.features.Request-level cache.desc">
        Provides various server-side data cache modes such as memory mode and persistence mode to improve user
        experience and reduce server pressure
      </Translate>
    )
  },
  {
    title: <Translate id="homepage.features.Lightweight">Lightweight</Translate>,
    Svg: require('@site/static/img/6.svg').default,
    description: (
      <Translate id="homepage.features.Lightweight.desc">compressed version is only 4kb, only 40% of axios</Translate>
    )
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--3 margin-bottom--lg', styles.cardWrapper)}>
      <div>
        <div className={clsx('card__header row', styles.cardHeader)}>
          <Svg
            className={clsx(styles.featureSvg, 'margin-right--md')}
            role="img"
          />
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
