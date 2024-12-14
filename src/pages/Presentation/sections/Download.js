/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import Container from "@mui/material/Container";
// import Tooltip from "@mui/material/Tooltip";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  const [formData, setFormData] = useState({
    // 00Nak00000EULfG: "",
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone: "",
    url: "",
    description: "",
    // name: "",
    // email: "",
    // subject: "",
    // message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:victor7rodriguez6@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid
            container
            item
            xs={12}
            lg={7}
            justifyContent="center"
            mx="auto"
            // component="form"
            // onSubmit={handleSubmit}
          >
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Contáctanos
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
              mb={3}
            >
              Llena el siguiente formulario para enviarnos un mensaje.
            </MKTypography>
            <form
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dak00000CTZLF"
              method="POST"
            >
              <Grid container spacing={2}>
                <input type="hidden" name="oid" value="00Dak00000CTZLF" />
                <input
                  type="hidden"
                  name="retURL"
                  value="https://www.orozcorp-innovations.com/presentation"
                />

                {/* <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="productInterest-label">Producto de Interés</InputLabel>
                    <Select
                      labelId="productInterest-label"
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      required
                      variant="filled"
                      sx={{
                        color: "lightgray",
                        ".MuiSelect-icon": { color: "lightgray" },
                      }}
                    >
                      <MenuItem value="">--Seleccionar--</MenuItem>
                      <MenuItem value="Quickstart">Quickstart</MenuItem>
                      <MenuItem value="Implementation">Implementación</MenuItem>
                      <MenuItem value="Support">Consultoría y Soporte</MenuItem>
                    </Select>
                  </FormControl>
                </Grid> */}

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="filled"
                    sx={{
                      input: {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Apellidos"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="filled"
                    sx={{
                      input: {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Compañía"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="filled"
                    sx={{
                      input: {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="filled"
                    sx={{
                      input: {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Teléfono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    variant="filled"
                    sx={{
                      input: {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Sitio Web"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    fullWidth
                    variant="filled"
                    sx={{
                      input: {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    Comentarios adicionales
                  </Typography>
                  <TextareaAutosize
                    minRows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    variant="filled"
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Comentarios adicionales"
                    variant="filled"
                    name="description"
                    multiline
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-root": {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="success" fullWidth>
                    Enviar
                  </Button>
                </Grid>

                {/* <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Nombre"
                    variant="filled"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                      input: {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Correo Electrónico"
                    variant="filled"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                      input: {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Asunto"
                    variant="filled"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    sx={{
                      input: {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Mensaje"
                    variant="filled"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-root": {
                        color: "lightgray",
                      },
                    }}
                  />
                </Grid> */}
                {/* <Grid item xs={12} textAlign="center">
                  <Button type="submit" variant="contained" color="success">
                    Enviar
                  </Button>
                </Grid> */}
              </Grid>
            </form>
          </Grid>
        </Container>
      </MKBox>
      {/* <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Available on these technologies
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Bootstrap 5 - Most popular front-end component library">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container> */}
    </MKBox>
  );
}

export default Download;
