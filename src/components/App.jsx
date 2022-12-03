// import Counter from "./counter/Counter.jsx";
import React from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends React.Component{
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  onLeaveFeedback = e => {
    this.setState({[e]: this.state[e] + 1});
  }
  totalStatistics = () =>{
   return this.state.good + this.state.bad + this.state.neutral
  }
  positivePercentage = () => {
    return this.totalStatistics ? Math.round(this.state.good/(this.state.good + this.state.bad + this.state.neutral)*100) : 0
  }

  
  render(){
  const { good, neutral, bad } = this.state;
  
      return(
        <div
        style={{
          height: 600,
          display: 'flex',
          flexDirection: 'column',
          fontSize: 30,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        </Section>
       { this.totalStatistics() ? <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} total={this.totalStatistics()} positivePercentage={this.positivePercentage()}></Statistics>
       </Section> 
       : <Notification message="There is no feedback"></Notification>}
      </div>
      );
  }
}


