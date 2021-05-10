import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";

import { subjects } from "../constant/constant";

const Wrapper = styled.div``;
const Container = styled.div`
  /* margin: 0 3em 0 3em;
  @media only screen and (max-width: 600px) {
    margin: unset;
  } */
`;
const Subject = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  > h2 {
    cursor: pointer;
    border: 1px solid #666;
  }
`;

export default () => {
  const Subs = subjects.map(d => {
    const link = "/questions";
    // Router.push("/questions");
    return (
      <Link href={{ pathname: link, query: { keyword: d } }}>
        <h2>{d.replace("_", " ")}</h2>
      </Link>
    );
  });
  return (
    <Layout title="Choose Subjects">
      <Wrapper>
        <Container>
          <Subject>{Subs}</Subject>
        </Container>
      </Wrapper>
    </Layout>
  );
};
