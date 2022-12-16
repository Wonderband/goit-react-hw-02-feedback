import styles from './Notification.module.css'
export const Notification = ({ showMessage, message }) => {
    return (
        <p className={showMessage ? '' : styles.invisible }>{message}</p>
    )
 }