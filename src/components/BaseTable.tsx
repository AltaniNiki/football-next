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

type ColumnSlotProps<T> = {
    row: T;                 // όλα τα δεδομένα της γραμμής
    value: any;             // row[h.key] για αυτό το κελί
    header: HeaderProps;    // info για τη στήλη (title, key, align...)
    rowIndex: number;       // index γραμμής
    colIndex: number;       // index στήλης
};


type BasicTableProps<T extends Record<string, any>> = {
    headers: HeaderProps[];
    data: Record<string, any>[];
    page?: number;
    perPage?: number;
    rowKey?: string,
    onPageChange?: (newPage: number) => void,
    onRowsPerPageChange?: (event: unknown) => void,
    // “v-slot” ανά κολόνα: { [header.key]: (props) => ReactNode }
    columnSlots?: Partial<Record<string, (p: ColumnSlotProps<T>) => React.ReactNode>>;
    supportPagination?: boolean
};

export default function BasicTable<T extends Record<string, any>>({ headers, data, page, perPage, supportPagination, rowKey, onPageChange, onRowsPerPageChange, columnSlots = {}, }: BasicTableProps<Τ>) {
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
                    {data.map((row: any, rIdx) => {
                        return (<TableRow key={'id_row_' + row[rowKey]}>
                            {headers.map((h: HeaderProps, cIdx) => {
                                const value = row[h.key];
                                const slot = columnSlots[h.key];

                                return (
                                    <TableCell key={'id_' + row[rowKey] + '_' + h.key}>
                                        {slot ? slot({ row, value, header: h, rowIndex: rIdx, colIndex: cIdx }) : (value ?? "")}
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