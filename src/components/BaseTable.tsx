import * as React from "react";
import TableContainer from "@mui/material/TableContainer"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TableHead from "@mui/material/TableHead"
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper"


type HeaderProps = {
    title: string,
    code: string,
    show: boolean,
    key: string
}


type BasicTableProps = {
    headers: HeaderProps[];
    data: Record<string, any>[];
    page?: number;
    perPage?: number;
    onPageChange?: (newPage: number) => void,
    onRowsPerPageChange?: (event: unknown) => void,
    supportPagination?: boolean
};

export default function BasicTable({ headers, data, page, perPage, supportPagination, onPageChange, onRowsPerPageChange }: BasicTableProps) {
    const optionsList = [5, 10, 30, 50]
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="basic-table">
                <TableHead>
                    <TableRow>
                        {headers.map((h: HeaderProps) => {
                            return (
                                <TableCell key={h.key}>
                                    {h.title}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((d: any) => {
                        return (<TableRow key={'id_row_' + d.id}>
                            {headers.map((h: HeaderProps) => {
                                return (
                                    <TableCell key={'id_' + d.id + '_' + h.key}>
                                        {d[h.key]}
                                    </TableCell>
                                )
                            })}
                        </TableRow>)
                    })}
                </TableBody>
                {supportPagination && (<TableFooter>
                    <TableRow>
                        <TablePagination
                            page={page}
                            count={10}
                            rowsPerPage={perPage}
                            onPageChange={(event, newPage) => {
                                onPageChange(newPage)
                            }}
                            rowsPerPageOptions={optionsList}
                            onRowsPerPageChange={(event) => {

                                onRowsPerPageChange(event.target.value)
                            }}

                        ></TablePagination>
                    </TableRow>
                </TableFooter>)}
            </Table>
        </TableContainer>
    )

} 