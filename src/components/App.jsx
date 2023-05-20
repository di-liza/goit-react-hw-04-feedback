import { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedBack/FeedbackOptions';
import Statistics from './Statistics';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const incrementValue = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, val) => acc + val, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positive = feedback.good;
    return Math.round((positive / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={incrementValue}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={feedback.good}
          bad={feedback.bad}
          neutral={feedback.neutral}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </>
  );
}
