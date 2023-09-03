import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'stage', headerName: 'Stage', width: 130 },
  { field: 'asigneee', headerName: 'Asigneee', width: 130 },
  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
    width: 170,
  },
  { field: 'contacts', headerName: 'Contacts', width: 130 },
  { field: 'clients', headerName: 'Clients', width: 70 },
  { field: 'priorty', headerName: 'Priorty', width: 70 },
  { field: 'lastContacted', headerName: 'Last Contacted', width: 120 },
  { field: 'duedates', headerName: 'Due Dates', width: 90 },
  { field: 'notes', headerName: 'Notes', width: 180 },
  { field: 'opportunity', headerName: 'Opportunity', width: 100 },
  { field: 'company', headerName: 'Company', width: 90 },
  { field: 'creationDate', headerName: 'Creation Date', width: 100 },
  { field: 'incomingOutgoing', headerName: 'Incoming/Outgoing', width: 140 },
  { field: 'clientBudget', headerName: 'Client Budget', width: 100 },
  { field: 'submissionDate', headerName: 'Personal Submission Date', width: 180 },
  { field: 'files', headerName: 'Files', width: 70 },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DealsTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}