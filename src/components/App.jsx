import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleBtnClick = (option) => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('Ooops');
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  const countPositiveFeedbackPercentage = () => {
    return Math.round(good * 100 / countTotalFeedback())
  }
  return (
    <Container>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={handleBtnClick} />
      </Section>
      <Section title={"Statistics"} >
        {countTotalFeedback() ? (<Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()} />) : (<Notification message="There is no feedback" />)}
      </Section>
    </Container >)
}
