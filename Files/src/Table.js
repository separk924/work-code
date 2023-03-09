import React from "react";
import './Table.css';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';

/**
 * Table() created a table
 * @param {object} columns the column structure
 * @param {object} data the data
 * @returns The table
 */
function Table({ columns, data }) {

    // Table component logic and UI come here
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        prepareRow,
        setGlobalFilter,
    } = useTable(
        { columns, data }, 
        useSortBy,
    );
    const { globalFilter } = state;

    return (
        <div>
            <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}
                        className={
                            column.isSorted ?
                            column.isSortedDesc ?
                            "desc" : "asc" : ""}>
                        {column.render("Header")}
                        <div>
                            {column.canFilter ? column.render('Filter') : null}
                        </div>
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
    );
 }

export default Table;