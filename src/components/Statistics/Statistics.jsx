import PropTypes from 'prop-types';

import Notification from '../Notifications';
import {
  Value,
  StatsItem,
  StatsList,
  Num,
  CountList,
  CountItem,
} from './Statistics.styled.js';

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  const renderStats = () => {
    return (
      <>
        <StatsList>
          <StatsItem>
            <Value>Good:</Value>
            <Num>{good}</Num>
          </StatsItem>
          <StatsItem>
            <Value>Neutral:</Value>
            <Num>{neutral}</Num>
          </StatsItem>
          <StatsItem>
            <Value>Bad:</Value>
            <Num>{bad}</Num>
          </StatsItem>
        </StatsList>

        <CountList>
          <CountItem>
            <Value>Total: {total}</Value>
          </CountItem>
          <CountItem>
            <Value>Posititve Feedback: {positivePercentage || 0}%</Value>
          </CountItem>
        </CountList>
      </>
    );
  };

  return (
    <>
      {total !== 0 ? (
        renderStats()
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
