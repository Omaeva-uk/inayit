import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Cta = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsError(false);

    try {
      const result = await emailjs.send(
        "service_fq85o6f",
        "template_mupmmue",
        formData,
        "ixpMIKPX_xLNzomsg"
      );
      setIsSubmitted(true);
    } catch (error) {
      setIsError(true);
    }

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box
      className="contactSection"
      id="contact-us"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        margin: "50px auto",
        width: "80%",
        padding: "20px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
        gap: "30px",
      }}
    >
      <Box
        className="contactForm"
        sx={{
          width: { xs: "100%", md: "48%" },
          padding: "15px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          marginLeft: { xs: 0, md: "20px" },
          marginTop: { xs: "0px", md: "20px" },
          marginBottom: { xs: "0px", md: "20px" },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            marginBottom: "2rem",
            fontWeight: "normal",
            fontSize: "2rem",
            fontFamily: "'Sen', sans-serif",
            textAlign: "center",
          }}
        >
          Send us a message
        </Typography>

        {isSubmitted ? (
          <Typography variant="h6" sx={{ textAlign: "center", color: "green" }}>
            Thank you! Your message has been sent.
          </Typography>
        ) : (
          <form
            onSubmit={sendEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              required
              margin="normal"
              size="small"
              sx={{
                width: "85%",
                maxWidth: "800px",
                "& .MuiOutlinedInput-root": {
                  padding: "6px 10px",
                  "& fieldset": {
                    borderColor: "#0978fe",
                    borderWidth: "0.5px",
                    borderRadius: "15px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#0978fe",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0978fe",
                    borderWidth: "0.5px",
                  },
                },
                marginBottom: "20px",
              }}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
              required
              margin="normal"
              size="small"
              type="email"
              sx={{
                width: "85%",
                maxWidth: "800px",
                "& .MuiOutlinedInput-root": {
                  padding: "6px 10px",
                  "& fieldset": {
                    borderColor: "#0978fe",
                    borderWidth: "0.5px",
                    borderRadius: "15px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#0978fe",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0978fe",
                    borderWidth: "0.5px",
                  },
                },
                marginBottom: "20px",
              }}
            />
            <TextField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              variant="outlined"
              required
              margin="normal"
              size="small"
              sx={{
                width: "85%",
                maxWidth: "800px",
                "& .MuiOutlinedInput-root": {
                  padding: "6px 10px",
                  "& fieldset": {
                    borderColor: "#0978fe",
                    borderWidth: "0.5px",
                    borderRadius: "15px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#0978fe",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0978fe",
                    borderWidth: "0.5px",
                  },
                },
                marginBottom: "20px",
              }}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              variant="outlined"
              required
              multiline
              rows={4}
              margin="normal"
              size="small"
              sx={{
                width: "85%",
                maxWidth: "800px",
                "& .MuiOutlinedInput-root": {
                  padding: "6px 10px",
                  "& fieldset": {
                    borderColor: "#0978fe",
                    borderWidth: "0.5px",
                    borderRadius: "15px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#0978fe",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0978fe",
                    borderWidth: "0.5px",
                  },
                },
                marginBottom: "20px",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#0978fe",
                color: "#ffffff",
                marginTop: "10px",
                padding: "8px 15px",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              Send Message
            </Button>
          </form>
        )}

        {isError && (
          <Typography variant="body1" sx={{ color: "red", marginTop: "1rem" }}>
            Something went wrong. Please try again later.
          </Typography>
        )}
      </Box>

      <Box
        className="contactDetails"
        sx={{
          width: { xs: "100%", md: "48%" },
          padding: "15px",
          textAlign: "right",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            marginBottom: "2rem",
            fontWeight: "normal",
            fontSize: "2rem",
            fontFamily: "'Sen', sans-serif",
            textAlign: "center",
          }}
        >
          Contact us
        </Typography>
        <ul style={{ listStyle: "none", padding: "0" }}>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginBottom: "15px",
              fontSize: "14px",
              color: "#333",
            }}
          >
            <FaMapMarkerAlt
              style={{
                marginLeft: "15px",
                marginRight: "0",
                fontSize: "22px",
                color: "#0978fe",
              }}
            />
            <span>
              340 Winterthur Way, Basingstoke, Hampshire, RG21 7UQ, United
              Kingdom
            </span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginBottom: "15px",
              fontSize: "14px",
              color: "#333",
            }}
          >
            <FaPhoneAlt
              style={{
                marginLeft: "15px",
                marginRight: "0",
                fontSize: "22px",
                color: "#0978fe",
              }}
            />
            <span>+44-75860 31157</span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginBottom: "15px",
              fontSize: "14px",
              color: "#333",
            }}
          >
            <FaEnvelope
              style={{
                marginLeft: "15px",
                marginRight: "0",
                fontSize: "22px",
                color: "#0978fe",
              }}
            />
            <span>info@inayit.com</span>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginBottom: "15px",
              fontSize: "14px",
              color: "#333",
            }}
          >
            <FaGlobe
              style={{
                marginLeft: "15px",
                marginRight: "0",
                fontSize: "22px",
                color: "#0978fe",
              }}
            />
            <span>www.Inayit.com</span>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Cta;
