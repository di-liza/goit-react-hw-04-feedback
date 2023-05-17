import { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedBack/FeedbackOptions';
import Statistics from './Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBackOptions = { good, bad, neutral };

  const incrementValue = option => {
    const setFunctions = {
      good: setGood,
      neutral: setNeutral,
      bad: setBad,
    };

    if (setFunctions[option]) setFunctions[option](prev => prev + 1);
  };

  const countTotalFeedback = () => {
    return Object.values(feedBackOptions).reduce((acc, val) => acc + val, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positive = good;
    return Math.round((positive / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedBackOptions)}
          onLeaveFeedback={incrementValue}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </>
  );
}
