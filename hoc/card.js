import React, { Component } from "react";
import styled from "styled-components";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import Link from "next/link";

const Wrapper = styled.div`
  margin: 0 3em 0 3em;
  @media only screen and (max-width: 600px) {
    margin: unset;
  }
`;
const Container = styled.div`
  padding: 0.5em 1em 0.5em 1em;
  display: grid;
  grid-row-gap: 1em;
  border-bottom: 2px solid #e0e0d1;
`;
const OptionsContainer = styled.div`
  padding-left: 5em;
  display: grid;
  grid-row-gap: 0.2em;
  @media only screen and (max-width: 600px) {
    padding-left: unset;
  }
`;
const Question = styled.div`
  display: grid;
  grid-row-gap: 1em;

  > div {
    line-height: 20px;
    /* font-size: 1em; */
    /* padding: 1em 0 1em 0; */
    white-space: pre-line;
  }
  > b {
    padding-right: 1em;
  }
`;

const Option = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: 0.2fr 8fr;
  grid-gap: 1em;
  background: #d9ffb3;
  > div {
    line-height: 20px;
  }
  > span {
    padding-right: 1em;
    background: #336600;
    color: #fff;
    font-size: 2em;
    border-radius: 50%;
    justify-content: center;
  }
`;

const Count = styled.div`
  /* padding:1em; */
  font-size: 1.3em;
  font-weight: 600;
  padding-right: 0.5em;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1em;
`;
const Explaination = styled.div`
  border: 1px solid #e0e0d1;
  padding: 0.5em 1em 0.5em 1em;
  white-space: pre-line;
`;
const OtherOptions = styled.div`
  display: flex;
  color: #003300;
  font-weight: 700;
  > div {
    margin-right: 3em;
    cursor: pointer;
  }
`;
const Year = styled.div``;

class Card extends Component {
  state = {
    selected: true,
    ShowExplaination: false,
    wrong: false,
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    selectcolor:
      // `${this.state.show}` ? "#336600" :
      "tomato",
  };

  clickHandler = (e) => {
    const { answer, totalCorrect } = this.props;
    // console.log("in click", e.target);
    if (e.target.getAttribute("name") == answer) {
      this.setState({
        selected: false,
        [answer]: true,
        wrong: true,
        ShowExplaination: true,
      });
      if (!this.state.wrong) {
        // totalCorrect();
      }
    } else {
      this.setState({
        wrong: true,
        [answer]: true,
        selected: false,
        ShowExplaination: true,
      });
    }
  };
  explainationHandler = () => {
    this.setState((prevState) => ({
      ShowExplaination: !prevState.ShowExplaination,
    }));
  };
  render() {
    console.log("props", this.props);
    const {
      question,
      option1,
      option2,
      option3,
      option4,
      count,
      answer,
      year,
      explaination,
      subject,
    } = this.props;
    const link = "/questions";
    return (
      <Wrapper>
        <Container>
          <Question>
            <Count>Question {count + 1}</Count>
            <div>{question}</div>
          </Question>
          <OptionsContainer>
            <Option onClick={(e) => this.clickHandler(e)} name="option1">
              <span
              // style={{
              //   color: this.state.selectcolor
              // }}
              >
                <b style={{ display: this.state.selected ? "block" : "none" }}>
                  A
                </b>
                <CloseOutlined
                  style={{
                    color: "red",
                    display: this.state.wrong ? "block" : "none",
                  }}
                />
                <CheckOutlined
                  style={{
                    color: "blue",
                    display: this.state.option1 ? "block" : "none",
                  }}
                />
              </span>
              <div name="option1">{option1}</div>
            </Option>
            <Option onClick={(e) => this.clickHandler(e)} name="option2">
              <span>
                <b style={{ display: this.state.selected ? "block" : "none" }}>
                  B
                </b>
                <CloseOutlined
                  style={{
                    color: "red",
                    display: this.state.wrong ? "block" : "none",
                  }}
                />
                <CheckOutlined
                  style={{
                    color: "blue",
                    display: this.state.option2 ? "block" : "none",
                  }}
                />
              </span>
              <div name="option2">{option2}</div>
            </Option>
            <Option onClick={(e) => this.clickHandler(e)} name="option3">
              <span>
                <b style={{ display: this.state.selected ? "block" : "none" }}>
                  C
                </b>
                <CloseOutlined
                  style={{
                    color: "red",
                    display: this.state.wrong ? "block" : "none",
                  }}
                />
                <CheckOutlined
                  style={{
                    color: "blue",
                    display: this.state.option3 ? "block" : "none",
                  }}
                />
              </span>
              <div name="option3">{option3}</div>
            </Option>
            <Option onClick={(e) => this.clickHandler(e)} name="option4">
              <span>
                <b style={{ display: this.state.selected ? "block" : "none" }}>
                  D
                </b>

                <CloseOutlined
                  style={{
                    color: "red",
                    display: this.state.wrong ? "block" : "none",
                  }}
                />
                <CheckOutlined
                  style={{
                    color: "blue",
                    display: this.state.option4 ? "block" : "none",
                  }}
                />
              </span>
              <div name="option4">{option4}</div>
            </Option>
          </OptionsContainer>
          <OtherOptions style={{ display: this.state.show }}>
            {/* {this.state.selected} */}
            {/* answer : {answer} */}
            <Year>UPSC {year}</Year>
            <div>
              <Link href={{ pathname: link, query: { keyword: subject } }}>
                {subject}
              </Link>
            </div>

            <div onClick={this.explainationHandler}>Explaination</div>
          </OtherOptions>
          <Explaination
            style={{ display: this.state.ShowExplaination ? "block" : "none" }}
          >
            {explaination}
          </Explaination>
        </Container>
      </Wrapper>
    );
  }
}

export default Card;
