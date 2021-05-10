import Link from "next/link";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout title="Home">
      <Link href="/subjects">
        <h1>Subject Wise</h1>
      </Link>

      <Link href="/year">
        <h1>Year Wise</h1>
      </Link>
      <Link href="/quiz">
        <h1>Quiz</h1>
      </Link>
    </Layout>
  );
};
