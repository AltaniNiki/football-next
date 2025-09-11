import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import { transformStatistics } from "@/utils/team"
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import styles from "@/components/Team/TeamStatistics.module.css"



export default function TeamStatistics() {

    type statisticType = {
        column1: string | null | number,
        column2: string | null | number,
        column3: string | null | number,
        column4: string | null | number,
        style: string | null | number
    }

    const statistics = useAppSelector((state) => state.team.statistics)

    const [data, setData] = React.useState<statisticType[]>([]);

    React.useEffect(() => {
        var result: statisticType[] = transformStatistics(statistics)
        setData(result)
    }, [])


    return (
        <Box>
            <Card>
                <CardContent>
                    {data.map((row: any, index: number) => {
                        return (<Grid key={row.id} container rowSpacing={1} className={row.style != null ? styles[row.style] : ''} sx={{ borderBottom: '1px solid #E4E8ED' }}>
                            <Grid size={3}>
                                <Typography
                                    sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px' }}
                                    className={row.cellStyle != null ? styles[row.cellStyle] : ''}
                                >
                                    {row.column1}
                                </Typography>
                            </Grid>
                            <Grid size={3}>
                                <Typography
                                    sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px' }}
                                    className={row.cellStyle != null ? styles[row.cellStyle] : ''}
                                >
                                    {row.column2}
                                </Typography>
                            </Grid>
                            <Grid size={3}>
                                <Typography
                                    sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px' }}
                                    className={row.cellStyle != null ? styles[row.cellStyle] : ''}
                                >
                                    {row.column3}
                                </Typography>
                            </Grid>
                            <Grid size={3}>
                                <Typography
                                    sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px' }}
                                    className={row.cellStyle != null ? styles[row.cellStyle] : ''}
                                >
                                    {row.column4}
                                </Typography>
                            </Grid>
                        </Grid>)
                    })
                    }

                </CardContent>
            </Card>


        </Box >
    )
}