import Image from "next/image";
import styles from "./page.module.css";
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LeagueCard from "@/components/League/LeagueCard";


export default function Home() {
  return (
    <Container>
      <Box>
        <Grid>
          <LeagueCard
            name="Super League"
            logo="https://media.api-sports.io/football/leagues/309.png"
            country="Greece"
            flag="https://media.api-sports.io/flags/sa.svg"
          />
        </Grid>
      </Box>

    </Container>
  );
}
