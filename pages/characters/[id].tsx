import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Character } from '../../types';
import Layout from '../../src/components/Layout';
import imageLoader from '../../imageLoader';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import charStyles from "../../styles/Character.module.css"

function CharacterPage({ character }: { character: Character }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.charMain}>
        <h1 className={styles.title}>Character</h1>
        <div className={styles.grid}>
              <a className={styles.arrayCard} key={character.id}>
                <h3>{character.name}</h3>
                <Image
                  loader={imageLoader}
                  unoptimized
                  src={character.image}
                  alt={character.name}
                  width="300"
                  height="300"
                />
                <p>{character.gender}</p>
                <p>{character.species}</p>
                <p>{character.status}</p>
              </a>
           
  
   
      </div>

      </main>
    </div>
  );
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`);
  const character = await res.json();
  return {
    props: {
      character,
    },
  };
};

export default CharacterPage;
