// pages/about.tsx
import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <h2>About Me</h2>
      <Image src="/AG.jfif" alt="My Profile" width={200} height={200} />
      <p>I love building scalable apps with TypeScript.</p>
    </Layout>
  );
}

