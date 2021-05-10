import Link from "next/link";
import Layout from "../components/Layout";
import { years } from "../constant/constant";

export default () => {
  const Subs = years.map(d => {
    const link = "/yearwisequestions";
    // Router.push("/questions");
    return (
      <Link href={{ pathname: link, query: { keyword: d } }}>
        <h2>{d.replace("_", " ")}</h2>
      </Link>
    );
  });
  return (
    <Layout title="Choose Subjects">
      {/* <Link> */}
      <h2>Year Wise</h2>
      {/* </Link> */}
      {Subs}
    </Layout>
  );
};
