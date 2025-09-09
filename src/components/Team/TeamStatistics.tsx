import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { transformStatistics } from "@/utils/team"
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";



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
                        return (<Grid container>
                            <Grid size={3}>
                                <span>{row.column1}</span>
                            </Grid>
                            <Grid size={3}>
                                <span>{row.column2}</span>
                            </Grid>
                            <Grid size={3}>
                                <span>{row.column3}</span>
                            </Grid>
                            <Grid size={3}>
                                <span>{row.column4}</span>
                            </Grid>
                        </Grid>)
                    })
                    }

                </CardContent>
            </Card>


        </Box>
    )
}