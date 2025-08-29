import Image from "next/image";
import styles from "./page.module.css";
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TeamCard from "@/components/Team/TeamCard";

export default function Home() {
  return (
    <Container>
      <Box>
        <Grid>
          <TeamCard
            name="Arsenal"
            logo="https://media.api-sports.io/football/teams/33.png"
            national="England"
            venue="Old Trafford"
            venueCapacity={76212}></TeamCard>
        </Grid>
      </Box>

    </Container>
  );
}
