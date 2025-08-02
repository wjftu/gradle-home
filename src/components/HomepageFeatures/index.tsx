import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  url?: string;
  imgPath: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Java Tutorials',
    imgPath: '/img/java.jpeg',
    url: '/java',
    description: (
      <>
        Master the fundamentals and advanced features of Java, 
        one of the most widely-used and time-tested programming languages in the world. 
      </>
    ),
  },
  {
    title: 'Kotlin Tutorials',
    imgPath: '/img/kotlin.jpeg',
    url: '/kotlin',
    description: (
      <>
        Discover Kotlin, the modern, expressive, and concise language
      </>
    ),
  },
  {
    title: 'Data Structure and Algorithm',
    imgPath: '/img/algorithms.jpeg',
    url: '/algorithm',
    description: (
      <>
        Data Structure and Algorithm in modern JVM Language.
        Clean and annotated algorithms problem solutions.
      </>
    ),
  },
  {
    title: 'Spring Boot 3',
    imgPath: '/img/spring.png',
    url: '/springboot3',
    description: (
      <>
        Spring Boot is a powerful and widely used open-source Java fromework that simplifies the development of Java applications.
      </>
    ),
  }
];

function Feature({ title, description, url, imgPath }: FeatureItem) {
  return (
    <div className="col col--4 text--center">
      <div>
        {url ? (
          <a href={url}>
            <img src={imgPath} alt={title} width="200" />
          </a>
        ) : (
          <img src={imgPath} alt={title} width="200" />
        )}
      </div>
      <div className="padding-horiz--md">
        <h3>{url ? <a href={url}>{title}</a> : title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
