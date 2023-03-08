import PropTypes from 'prop-types';
import { NotifyText } from './Notification.styled';

export const Notification = ({ message }) => {
    return <NotifyText>{message}</NotifyText>
}

Notification.propTypes = {
    message: PropTypes.string,
}