import PropTypes from "prop-types";
import styles from './Notification.module.css'
export const Notification = ({ showMessage, message }) => {
    return (
        <p className={showMessage ? '' : styles.invisible }>{message}</p>
    )
}

Notification.propTypes = {
    showMessage: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
}
