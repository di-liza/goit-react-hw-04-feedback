import PropTypes from 'prop-types';
import { NotificationEl } from './Notifications.styled';

export default function Notification({ message }) {
  return <NotificationEl>{message}</NotificationEl>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
