import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";


type PlayerCardProps = {
    name: String,
    photo: String,
    age: String,
    nationality: String,
    birth: String,
    height: String,
    weight: String,
    position: String
}

export default function PlayerCard({ name, photo, age, nationality, birth, height, weight, position }: PlayerCardProps) {

    return (
        <Box sx={{ backgroundColor: '#15181A', borderRadius: '10px', padding: '10px' }}>
            <Grid container>
                <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar variant="square" src={photo} sx={{ width: '95px', height: '95px', backgroundColor: 'white', borderRadius: '10px' }} />
                </Grid>
                <Grid sx={{ marginLeft: '10px' }} size="grow">
                    <Grid container>
                        <Grid size="grow">
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '24px', fontWeight: 600 }}>{name}</Typography>
                        </Grid>
                        <Grid sx={{ justifyContent: 'flex-end' }}>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>{nationality}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }} size={12}>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>Height:</Typography>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>{height}</Typography>
                        </Grid>
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }} size={12}>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>Weight:</Typography>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>{weight}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }} size={12}>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>Birthday:</Typography>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>{birth} ({age} age)</Typography>
                        </Grid>

                    </Grid>
                    <Grid container>
                        <Grid sx={{ display: 'flex', flexDirection: 'row' }} size={12}>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>Position:</Typography>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>{position}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}