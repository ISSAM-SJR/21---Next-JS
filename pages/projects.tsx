// pages/projects.tsx (updated)
import Layout from '../components/Layout';

export async function getServerSideProps() {
  const projects = ['Portfolio Site', 'Todo App'];
  return { props: { projects } };
}

export default function Projects({ projects }: { projects: string[] }) {
  return (
    <Layout>
      <h2>Projects</h2>
      <ul>
        {projects.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </Layout>
  );
}
