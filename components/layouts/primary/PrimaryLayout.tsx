import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
