import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1em;
  font-size: 1.2rem;
  background: indigo;
`;

class Header extends Component {
  state = {};
  render() {
    return <Wrapper>Upsc Pyq</Wrapper>;
  }
}

export default Header;
<style jsx>
  {`
    .root {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    header {
      width: 100%;
      display: flex;
      justify-content: space-around;
      pdding: 1em;
      font-size: 1.2rem;
      bacground: indigo;
    }
    header a {
      color: darkgrey;
      text-decoration: none;
    }
    header a:hover {
      font-weight: bold;
      color: lightgrey;
    }
    footer {
      padding: 1em;
    }
  `}
</style>;
