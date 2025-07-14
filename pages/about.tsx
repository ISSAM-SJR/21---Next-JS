 // pages/about.tsx
import Layout from '../components/Layout';
import Image from 'next/image';
import profilePic from '../public/me.jpg'; // put the image in /public

export default function About() {
  return (
    <Layout>
      <h2>About Me</h2>
      <Image src={profilePic} alt="My Profile" width={200} height={200} />
      <p>I love building scalable apps with TypeScript.</p>
    </Layout>
  );
}
