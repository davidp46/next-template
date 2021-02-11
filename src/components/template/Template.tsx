import { FC, ReactNode } from 'react';
import Head from 'next/head';

interface PropsType {
  title: String;
  children: ReactNode;
}

const Template: FC<PropsType> = ({ title, children }: PropsType) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Template;
