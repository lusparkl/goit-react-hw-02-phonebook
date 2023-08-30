import { Contact } from "./Contact"

export const ContactsGroup = ({contacts, deleteContact}) => {
    return (
        <ul>
            {contacts.map(contact => <Contact key={contact.id} contact={contact} deleteContact={deleteContact} id={contact.id} />)}
      </ul>
  )
}
