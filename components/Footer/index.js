import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Container = styled.div`
  background: #1a1a00;
`;

class Header extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>Footer</Container>
      </Wrapper>
    );
  }
}

export default Header;
