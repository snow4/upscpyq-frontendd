import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getupscquizquestion } from "../actions/asyncActions";
import Card from "../hoc/card";
import { Spin, Alert } from "antd";

import Layout from "../components/Layout";

const Wrapper = styled.div``;
const Container = styled.div`
  display: grid;
  grid-column-gap: 2em;
  margin: 0 6em 0 0.03em;
  > h1 {
    text-align: center;
  }
`;

const Result = styled.div`
  position: fixed;
  right: 32px;
  bottom: 102px;
  z-index: 2147483640;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  cursor: pointer;
  background: grey;
  padding: 1em;
`;
class Questions extends Component {
  state = {
    query: "",
    correct: 0,
  };

  componentDidMount = () => {
    // this.props.subjectQuery("History");
    const url = window.location.href.split("=")[1];
    this.setState({ query: url });

    getupscquizquestion(url);
  };

  totalCorrect = (data) => {
    this.setState({ correct: this.state.correct + 1 });
  };

  render() {
    const { upscQuestion } = this.props;
    console.log("total correct called", upscQuestion);
    const Question = upscQuestion ? (
      upscQuestion.map((d, i) => {
        return <Card {...d} count={i} totalCorrect={this.totalCorrect} />;
      })
    ) : (
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    );

    return (
      <Layout title={this.state.query}>
        <Wrapper>
          <Result>Total Correct : {this.state.correct}</Result>
          <Container>
            {/* <h1>{this.state.query}</h1> */}
            {Question}
          </Container>
        </Wrapper>
      </Layout>
    );
  }
}

const mapStateToProps = (store) => {
  console.log("store", store);
  return {
    upscQuestion: store.upscQuizQuestions,
    loader: store.loader,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    subjectQuery: (data) => dispatch(getupscSubjectQuery(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
