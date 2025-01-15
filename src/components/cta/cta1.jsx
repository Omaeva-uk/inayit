import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Cta1 = () => {
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
            flex: 1,
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

     <div className="flex-1 flex flex-col gap-5 justify-between my-5 p-5">
        <h2 className="text-2xl md:text-3xl text-gray-800">Contact us</h2>
        <div>
            <ul className="space-y-3 font-Exo">
                <li className="flex items-center gap-5"><i className="fa-solid w-[30px] text-primary text-2xl md:text-3xl fa-envelope"></i><p className="text-sm md:text-md">info@inayit.com</p></li>
                <li className="flex items-center gap-5"><i className="fa-solid w-[30px] text-primary text-3xl md:text-3xl fa-phone"></i><p className="text-sm md:text-md ">+44-75860 31157</p></li>
                <li className="flex items-center gap-5"><i className="fa-solid w-[30px] text-primary text-3xl md:text-3xl fa-location-dot"></i><p className="text-sm md:text-md max-w-sm ">340 Winterthur Way, Basingstoke, Hampshire, RG21 7UQ, United Kingdom</p></li>
            </ul>
        </div>
        <div className="h-[250px] md:h-[320px] rounded-3xl overflow-hidden">
            <video src="/abt.mp4" className="w-full h-full object-cover" autoPlay muted loop></video>
        </div>
     </div>
    </Box>
  );
};

export default Cta1;
