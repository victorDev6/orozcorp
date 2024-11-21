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
              subtitle="Expertos en soluciones Salesforce en la nube"
              description="Contamos con especialistas altamente capacitados y con más de tres años de experiencia en el desarrollo e implementación de soluciones Salesforce.
Nuestro equipo domina un amplio espectro de plataformas, incluyendo Sales Cloud, enfocada en la optimización del ciclo de ventas, y Service Cloud, diseñada para elevar la calidad del servicio al cliente mediante herramientas innovadoras y personalizadas."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={8}
              suffix="+"
              title="Certificaciones"
              subtitle="Excelencia técnica respaldada por credenciales reconocidas"
              description="Nuestro equipo está compuesto por profesionales certificados en Salesforce, lo que garantiza un dominio integral de la plataforma y una capacidad comprobada para ofrecer soluciones de alto impacto.
Estas certificaciones oficiales reflejan no solo el conocimiento técnico profundo, sino también nuestra dedicación para mantenernos actualizados en las últimas tendencias e innovaciones dentro del ecosistema de Salesforce."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={4}
              suffix="+"
              title="Industrias"
              subtitle="Trayectoria comprobada en sectores clave"
              description="Nuestro equipo destaca por su dominio en el ecosistema Salesforce, implementando soluciones que aprovechan al máximo las capacidades de plataformas como Sales Cloud y Service Cloud en diversos sectores, incluyendo el automotriz, bienes de consumo, financiero, inmobiliario y más. 
Gracias a nuestro conocimiento especializado, hemos diseñado estrategias personalizadas que optimizan procesos clave, mejoran la experiencia del cliente y potencian el crecimiento de los negocios."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
