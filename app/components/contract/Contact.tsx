// Import necessary modules from Next.js and React
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "../contractlist/ContractList";
import inputs from "../../constants/input"; // Assuming you have a custom Input component
import { ContactType } from "../contract/types"; // Create a types file to define types/interfaces

// Import styles
import styles from "../contract/Contact.module.css";

const Contact = () => {
    // Define component state using TypeScript types
    const [contacts, setContacts] = useState<ContactType[]>([]);
    const [alert, setAlert] = useState<string>("");

    // Define state for individual contact
    const [contact, setContact] = useState<ContactType>({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: ""
    });

    // Define event handlers
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setContact(prevContact => ({ ...prevContact, [name]: value }));
    };

    const addHandler = () => {
        if (!contact.name || !contact.email || !contact.lastName || !contact.phone) {
            setAlert("Please enter valid data!");
            return;
        }
        setAlert("");
        const newContact: ContactType = { ...contact, id: uuidv4() };
        setContacts(prevContacts => [...prevContacts, newContact]);
        // setContact({
        //     name: "",
        //     lastName: "",
        //     email: "",
        //     phone: "",
        // });
    };

    const deleteHandler = (id: string) => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        setContacts(newContacts);
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {/* Use custom Input component */}
                {inputs.map(input => (
                    <input
                        key={input.name}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        // value={contact[input.name]}
                        onChange={changeHandler}
                    />
                ))}
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div className={styles.alert}>
                {alert && <p>{alert}</p>}
            </div>
            <ContactList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
    );
};

export default Contact;
