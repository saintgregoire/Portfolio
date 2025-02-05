import { Button, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      style={{
        marginTop: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <TextField
        fullWidth
        id="input-name"
        label="Name"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        fullWidth
        id="input-email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        fullWidth
        id="input-message"
        label="Message"
        name="message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
