// Import React (if you're using specific types or React.FC for functional components)
import React from 'react';
import styles from "./ContactList.module.css";
import ContactItem from "../contractitem/ContractItem"; // Corrected the path

// Assuming you have defined your types in the same file or imported them
interface Contact {
    id: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
}

interface ContactListProps {
    contacts: Contact[];
    deleteHandler: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, deleteHandler }) => {
    return (
        <div className={styles.container}>
            <h3>Contact List</h3>
            {
                contacts.length > 0 ? (
                    <ul className={styles.contacts}>
                        {contacts.map((contact) => (
                            <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler} />
                        ))}
                    </ul>
                ) : <p className={styles.message}>No Contacts Yet</p>
            }
        </div>
    );
};

export default ContactList;
