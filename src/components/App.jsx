import { Component } from 'react';
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

export class OLDApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementValue = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positive = this.state.good;
    return Math.round((positive / total) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementValue}
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
}
