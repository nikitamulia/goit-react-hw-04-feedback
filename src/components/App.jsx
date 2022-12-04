import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export default function App(){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    switch(e){
      case 'good':
      setGood(prevState => prevState + 1)
      break;
      case 'neutral':
      setNeutral(prevState => prevState + 1)
      break;
      case'bad':
      setBad(prevState => prevState + 1)
      break;
      default:
        return;
    }
   
  }
  const totalStatistics = () => {
    return good + bad + neutral
  }
  const positivePercentage = () => {
    return totalStatistics ? Math.round(good/(good + bad + neutral)*100) : 0
  }
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
    <FeedbackOptions
         options={['good', 'bad', 'neutral']}
          onLeaveFeedback={onLeaveFeedback}>
    </FeedbackOptions>
    </Section>
   { totalStatistics() ? <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={totalStatistics()} positivePercentage={positivePercentage()}></Statistics>
   </Section> 
   : <Notification message="There is no feedback"></Notification>}
  </div>
  )
}
