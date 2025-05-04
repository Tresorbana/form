import useInput from "./useInput";

export default function ContactForm({ onAdd }) {
  const name = useInput("");
  const email = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.value.includes("@")) return alert("Invalid email");
    onAdd({ name: name.value, email: email.value });
    name.reset(); email.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name.value} onChange={name.onChange} placeholder="Name" />
      <input value={email.value} onChange={email.onChange} placeholder="Email" />
      <button type="submit">Add Contact</button>
    </form>
  );
}
