export const Contact = ({ contact, deleteContact, id }) => {
  return (
      <li>
          {contact.name}: {contact.phoneNumber} 
          <button onClick={() => deleteContact(id)}>delete</button>
    </li>
  )
}
