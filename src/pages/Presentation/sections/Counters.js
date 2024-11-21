import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={3}
              suffix="+"
              title="Años de experiencia"
              description="Expertos en soluciones Salesforce en la nube
Contamos con especialistas con más de tres años de experiencia desarrollando e implementando soluciones en plataformas como Sales Cloud, Service Cloud. Dominan automatizaciones, adaptaciones personalizadas así como las funcionalidades estándar, asegurando resultados que transforman procesos empresariales."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={4}
              suffix="+"
              title="Industrias"
              description="Trayectoria comprobada en sectores clave
Nuestros expertos han desarrollado proyectos del sector inmobiliario, financiero, automotriz y bienes de consumo, integrando tecnología y estrategia para optimizar operaciones y alcanzar los objetivos de negocio de cada cliente."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={8}
              suffix="+"
              title="Certificaciones"
              description="Excelencia técnica respaldada por credenciales reconocidas
Nuestro equipo está avalado con certificaciones oficiales de Salesforce, que reflejan un dominio integral en el ecosistema de la plataforma. Estas incluyen: 
Salesforce AI Specialist y AI Associate, expertos en soluciones basadas en inteligencia artificial.
Salesforce Field Service Consultant, especializado en optimización de operaciones de campo.
Sales Cloud Consultant y Service Cloud Consultant, con enfoque en la gestión de ventas y atención al cliente.
Platform App Builder y Administrator, que garantizan capacidad para configurar, personalizar y administrar la plataforma.
Estas credenciales aseguran un enfoque estratégico y altamente técnico en cada solución implementada."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
