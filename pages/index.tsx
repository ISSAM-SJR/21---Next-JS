 // pages/index.tsx
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1>Welcome to My Portfolio</h1>
        <p>I specialize in TypeScript and Next.js development.</p>
      </div>
    </Layout>
  );
}
