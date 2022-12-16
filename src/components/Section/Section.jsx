import styles from './Section.module.css'
export const Section = ({ title, children }) => { 
    return (
        <section 
        style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}>
            <h3>{title}</h3>
            { children }
        </section>
    )
} 