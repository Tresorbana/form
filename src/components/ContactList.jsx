export default function ContactList({ contacts, onDelete }) {
    return (
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            {c.name} - {c.email}
            <button onClick={() => onDelete(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  