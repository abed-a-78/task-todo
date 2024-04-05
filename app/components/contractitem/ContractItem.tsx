// Import React (optional, for clarity and React-specific types like React.FC)
import React from 'react';
// Import styles
import styles from './ContactItem.module.css';

// Define an interface for the contact data
interface ContactData {
    id: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
}

// Define an interface for the component props
interface ContactItemProps {
    data: ContactData;
    deleteHandler: (id: string) => void; // Assuming deleteHandler is a function that takes an id (string) and returns void
}

// Component
const ContactItem: React.FC<ContactItemProps> = ({ data: { id, name, lastName, email, phone }, deleteHandler }) => {
    return (
        <div>
            <li className={styles.item}>
                <p>
                    {`${name} ${lastName}`} :
                </p>
                <p>
                    <span>📧</span>{email}
                </p>
                <p>
                    <span>☎️</span>{phone}
                </p>
                <button onClick={() => deleteHandler(id)}>🗑️</button>
            </li>
        </div>
    );
};

export default ContactItem;
