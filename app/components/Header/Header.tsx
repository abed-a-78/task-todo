// Header.module.css
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <h1>Contact App</h1>
            <p>
                <a href='https://github.com/abed-a-78' target="_blank" rel="noopener noreferrer">First resume</a> | React.js Course
            </p>
        </div>
    );
};

export default Header;
