import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  TextField
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { SnackbarContext } from "../../../context/SnackbarContext";
import { DialogContext } from "../../../context/DialogContext";
import { useTranslation } from "react-i18next";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
  checkbox: z.literal(true, {
    errorMap: () => ({
      message: "You need to agree to the terms",
    }),
  }),
});

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const { setOpenSnack, setResult } = useContext(SnackbarContext);

  const { setOpenDialog, setContent } = useContext(DialogContext);

  const handleShowTerms = () => {
    setOpenDialog(true);
    setContent("terms");
  };

  const {
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
      checkbox: false,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(serviceId, templateId, data, publicKey);
      setResult("success");
      setOpenSnack(true);
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setResult("error");
      setOpenSnack(true);
      reset();
    }
  };

  const {t} = useTranslation();

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
        width: "100%",
        maxWidth: "550px",
      }}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.name)}
            fullWidth
            id="input-name"
            label={t("name")}
            helperText={errors.name && errors.name.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.email)}
            fullWidth
            id="input-email"
            label={t("email")}
            type="email"
            helperText={errors.email && errors.email.message}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.message)}
            fullWidth
            id="input-message"
            label={t("message")}
            multiline
            rows={4}
            helperText={errors.message && errors.message.message}
          />
        )}
      />

      <Controller
        name="checkbox"
        control={control}
        render={({ field }) => (
          <Box component="div">
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                {...field}
                checked={field.value}
                sx={{
                  p: "0 .5rem 0 0",
                  color: errors.checkbox ? "#d32f2f" : "inherit",
                }}
              />
                
                <Button
                  variant="text"
                  onClick={handleShowTerms}
                  sx={{
                    p: 0,
                    fontWeight: 400,
                    fontSize: "12px",
                    textTransform: "none",
                    textAlign: 'start',
                    "&:hover": {
                      background: "none",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {t("I agree with")}&nbsp;{t("Terms of Use & Privacy Policy")}
                </Button>
            </Box>
            {errors.checkbox && (
              <FormHelperText sx={{ color: "#d32f2f", mx: "14px" }}>
                {errors.checkbox.message}
              </FormHelperText>
            )}
          </Box>
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isValid}
        sx={{ mt: 0.5 }}
      >
        {t("Submit")}
      </Button>
    </Box>
  );
};

export default ContactForm;
