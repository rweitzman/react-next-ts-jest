// index.tsx
import type { GetStaticProps, NextPage } from 'next';
import React, { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import imageLoader from '../imageLoader';
import styles from '@styles/Home.module.css';
import { Character, GetCharacterResults } from 'types';

const Home: FC<{ characters: Character[] }> = ({ characters }) => (
  <div className={styles.container}>
    <Head>
      <title>Robin Weitzman Next App with Jest/TS Boiler Plate</title>
      {/* change icon to...?? */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>
        {/* change the url */}
        Welcome to Robin Weitzman's <a href="https:nextjs.org">Next/Jest/Ts Boiler Plate Code! </a>
      </h1>

      <p className={styles.description}>Featuring the basic, starter layout for the following:</p>

      <div className={styles.documentation}>
        <div className={styles.grid}>
          <a href="https:nextjs.org/docs" className={styles.docCard}>
            <h3>Next.js - click for docs&rarr;</h3>
          </a>

          {/* Jest documemtation URL  */}

          <a href="https://jestjs.io/docs/getting-started" className={styles.docCard}>
            <h3>Jest - click for docs &rarr;</h3>
          </a>

          {/* Tyoescript url docs  */}
          <a href="https://www.typescriptlang.org/docs/" className={styles.docCard}>
            <h3>Typescript - click for docs&rarr;</h3>
          </a>
        </div>
      </div>

      <h1 className={styles.title}>
        Starter Code for Rendering Array from API - example:{' '}
        <a href="https://rickandmortyapi.com">https://rickandmortyapi.com </a>
      </h1>

      <p className={styles.description}>Click on an item below to go to its own page</p>
      <div className={styles.grid}>
        {characters.map((character) => {
          return (
            <Link href={`/characters/${character.id}`}>
              <a className={styles.arrayCard} key={character.id}>
                <h3>{character.name}</h3>
                <Image
                  loader={imageLoader}
                  unoptimized
                  src={character.image}
                  alt={character.name}
                  width="200"
                  height="200"
                />
                <p>{character.gender}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </main>
  </div>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
