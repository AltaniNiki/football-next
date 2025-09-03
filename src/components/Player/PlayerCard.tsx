import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";


type PlayerCardProps = {
    name: String,
    photo: String,
    age: Number,
    nationlity: String,
    birth: String,
    height: String,
    weight: String,
    position: String
}

export default function PlayerCard({ name, photo, age, nationality, birth, height, weight, position }: PlayerCardProps) {

    return (
        <Box sx={{ backgroundColor: '#00141D', borderRadius: '10px', padding: '10px' }}>
            <Grid container>
                <Grid >
                    <Avatar variant="square" src={photo} sx={{ width: '84px', height: '84px', backgroundColor: 'white', borderRadius: '10px' }} />
                </Grid>
                <Grid sx={{ marginLeft: '10px' }} size="grow">
                    <Grid container>
                        <Grid size="grow">
                            <span>{name}</span>
                        </Grid>
                        <Grid sx={{ justifyContent: 'flex-end' }}>
                            <span>{nationality}</span>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid>
                            <span>Height:</span> <span>{height}</span>
                        </Grid>
                        <Grid sx={{ marginLeft: '10px' }}>
                            <span>Weight:</span> <span>{weight}</span>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid>
                            <span>Birthday:</span> <span>{birth} ({age} age)</span>
                        </Grid>

                    </Grid>
                    <Grid container>
                        <Grid>
                            <span>Position:</span> <span>{position}</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}