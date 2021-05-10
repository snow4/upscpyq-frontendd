import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getupscYearQuery } from "../actions/asyncActions";
import Card from "../hoc/card";
const Wrapper = styled.div``;
const Container = styled.div`
  display: grid;
  grid-column-gap: 2em;
  margin: 0 3em 0 3em;
  > h1 {
    text-align: center;
  }
`;
class Questions extends Component {
  state = {
    query: ""
  };

  componentDidMount = () => {
    // this.props.subjectQuery("History");
    const url = window.location.href.split("=")[1];
    this.setState({ query: url });
    if (url.includes("_")) {
      // console.log("url", url.replace("_", " "));
      // this.props.subjectQuery(url.replace("_", " "));
      getupscYearQuery(url);
    } else {
      getupscYearQuery(url);
    }
  };
  render() {
    const { upscQuestion } = this.props;
    // console.log("upscQuestion props", upscQuestion);
    const Question = upscQuestion
      ? upscQuestion.map((d, i) => {
          return <Card {...d} count={i} />;
        })
      : [];

    return (
      <Wrapper>
        <Container>
          <h1>{this.state.query}</h1>
          {Question}
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = store => {
  // console.log("store", store);
  return {
    upscQuestion: store.upscYearQuestions
  };
};
const mapDispatchToProps = dispatch => {
  return {
    subjectQuery: data => dispatch(getupscSubjectQuery(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
