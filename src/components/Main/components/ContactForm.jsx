import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isValid, errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Submit form", data);
    reset();
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        marginTop: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <TextField
        error={errors.name && true}
        fullWidth
        id="input-name"
        label="Name"
        {...register("name")}
        helperText={errors.name && errors.name.message}
      />
      <TextField
        error={errors.email && true}
        fullWidth
        id="input-email"
        label="Email"
        type="email"
        {...register("email")}
        helperText={errors.email && errors.email.message}
      />
      <TextField
        error={errors.message && true}
        fullWidth
        id="input-message"
        label="Message"
        {...register("message")}
        multiline
        rows={4}
        helperText={errors.message && errors.message.message}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={!isValid}
        sx={{ mt: 0.5 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
