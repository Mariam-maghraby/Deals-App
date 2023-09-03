import { useMemo } from 'react';
import {
  MRT_GlobalFilterTextInput,
  MRT_ToggleFiltersButton,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';
import { Box, Button, Flex, Menu, Text, Title } from '@mantine/core';
import { IconUserCircle, IconSend } from '@tabler/icons-react';
import { data } from './makeData';

const Example = () => {
  const columns = useMemo(
    () => [
      {
        id: 'deal', //id used to define `group` column
        header: 'Deals',
        columns: [
          {
            accessorKey: 'dealName', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Name',
            size: 70,
          },
          {
            accessorKey: 'stage',
            header: 'Stage',
            size: 150,
            filterVariant: 'select',
            mantineFilterRangeSliderProps: {
              color: 'indigo',

            },
            //custom conditional format and styling
            Cell: ({ cell }) => (
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    cell.getValue() === 'Lost'
                      ? theme.colors.red[9]
                      : cell.getValue() === 'Negotiation'
                        ? theme.colors.violet[9]
                        : cell.getValue() === 'Proposal'
                          ? theme.colors.green[9]
                          : cell.getValue() === 'Won'
                            ? theme.colors.yellow[9]
                            : theme.colors.blue[9],
                  borderRadius: '4px',
                  color: '#fff',
                  maxWidth: '12ch',
                  padding: '4px',
                  textAlign: 'center',
                })}
              >
                {cell.getValue()}
              </Box>
            ),
          },
          {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
            id: 'assignee', //id is still required when using accessorFn instead of accessorKey
            header: 'Assignee',
            size: 200,
            filterVariant: 'autocomplete',
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <img
                  alt="avatar"
                  height={30}
                  src={row.original.avatar}
                  style={{ borderRadius: '50%' }}
                />
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: 'salary',
            header: 'Value',
            size: 150,
            filterVariant: 'range-slider',
            mantineFilterRangeSliderProps: {
              color: 'indigo',
              label: (value) =>
                value?.toLocaleString?.('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }),
            },
            //custom conditional format and styling
            Cell: ({ cell }) => (
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    cell.getValue() < 50_000
                      ? theme.colors.red[9]
                      : cell.getValue() >= 50_000 && cell.getValue() < 75_000
                        ? theme.colors.yellow[9]
                        : theme.colors.green[9],
                  borderRadius: '4px',
                  color: '#fff',
                  maxWidth: '9ch',
                  padding: '4px',
                  textAlign: 'center',
                })}
              >
                {cell.getValue()?.toLocaleString?.('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Box>
            ),
          },
          {
            accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            header: 'Email',
            size: 300,
          },
          {
            accessorKey: 'priority',
            header: 'Priority',
            size: 150,
            filterVariant: 'select',
            mantineFilterRangeSliderProps: {
              color: 'indigo',

            },
            //custom conditional format and styling
            Cell: ({ cell }) => (
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    cell.getValue() === 'High'
                      ? theme.colors.orange[9]
                      : cell.getValue() === 'Medium'
                        ? theme.colors.orange[5]
                        : theme.colors.orange[3],
                  borderRadius: '4px',
                  color: '#fff',
                  maxWidth: '12ch',
                  padding: '4px',
                  textAlign: 'center',
                })}
              >
                {cell.getValue()}
              </Box>
            ),
          },
          {
            accessorFn: (row) => {
              //convert to Date for sorting and filtering
              const sDay = new Date(row.dueDate);
              sDay.setHours(0, 0, 0, 0); // remove time from date (useful if filter by equals exact date)
              return sDay;
            },
            id: 'lastActivity',
            header: 'Last Activity',
            filterVariant: 'date-range',
            sortingFn: 'datetime',
            enableColumnFilterModes: false, //keep this as only date-range filter with between inclusive filterFn
            Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
            Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
          },
          {
            accessorFn: (row) => {
              //convert to Date for sorting and filtering
              const sDay = new Date(row.dueDate);
              sDay.setHours(0, 0, 0, 0); // remove time from date (useful if filter by equals exact date)
              return sDay;
            },
            id: 'dueDate',
            header: 'Due Date',
            filterVariant: 'date-range',
            sortingFn: 'datetime',
            enableColumnFilterModes: false, //keep this as only date-range filter with between inclusive filterFn
            Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
            Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
          },
          {
            accessorKey: 'note', //hey a simple column for once
            header: 'Note',
            size: 370,
            textAlign: 'center',
          },
          {
            accessorFn: (row) => {
              //convert to Date for sorting and filtering
              const sDay = new Date(row.dueDate);
              sDay.setHours(0, 0, 0, 0); // remove time from date (useful if filter by equals exact date)
              return sDay;
            },
            id: 'creationDate',
            header: 'Creation Date',
            filterVariant: 'date-range',
            sortingFn: 'datetime',
            enableColumnFilterModes: false, //keep this as only date-range filter with between inclusive filterFn
            Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
            Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
          },
          {
            accessorKey: 'incomingOutgoing',
            header: 'Incoming/Outgoing',
            size: 150,
            filterVariant: 'select',
            mantineFilterRangeSliderProps: {
              color: 'indigo',
            },
            //custom conditional format and styling
            Cell: ({ cell }) => (
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    cell.getValue() === 'Incoming'
                      ? theme.colors.blue[5]
                        : theme.colors.green[5],
                  borderRadius: '4px',
                  color: '#fff',
                  maxWidth: '12ch',
                  padding: '4px',
                  textAlign: 'center',
                })}
              >
                {cell.getValue()}
              </Box>
            ),
          },
        ],
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableFacetedValues: true,
    enableGrouping: true,
    enablePinning: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: { showColumnFilters: true, showGlobalFilter: true },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    mantinePaginationProps: {
      radius: 'xl',
      size: 'lg',
    },
    mantineSearchTextInputProps: {
      placeholder: 'Search Deals...',
    },
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
        }}
      >
        <img
          alt="avatar"
          height={200}
          src={row.original.avatar}
          style={{ borderRadius: '50%' }}
        />
        <Box sx={{ textAlign: 'center' }}>
          <Title>Signature Catch Phrase:</Title>
          <Text>&quot;{row.original.signatureCatchPhrase}&quot;</Text>
        </Box>
      </Box>
    ),
    renderRowActionMenuItems: () => (
      <>
        <Menu.Item icon={<IconUserCircle />}>View Profile</Menu.Item>
        <Menu.Item icon={<IconSend />}>Send Email</Menu.Item>
      </>
    ),
    renderTopToolbar: ({ table }) => {
      const handleDeactivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('deactivating ' + row.getValue('name'));
        });
      };

      const handleActivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('activating ' + row.getValue('name'));
        });
      };

      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('contact ' + row.getValue('name'));
        });
      };

      return (
        <Flex p="md" justify="space-between">
          <Flex gap="xs">
            {/* import MRT sub-components */}
            <MRT_GlobalFilterTextInput table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Flex>
          <Flex sx={{ gap: '8px' }}>
            <Button
              color="red"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleDeactivate}
              variant="filled"
            >
              Deactivate
            </Button>
            <Button
              color="green"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleActivate}
              variant="filled"
            >
              Activate
            </Button>
            <Button
              color="blue"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleContact}
              variant="filled"
            >
              Contact
            </Button>
          </Flex>
        </Flex>
      );
    },
  });

  return <MantineReactTable table={table} />;
};

export default Example;