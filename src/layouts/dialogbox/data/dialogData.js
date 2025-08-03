import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import Slide from '@mui/material/Slide';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const paginationModel = { page: 0, pageSize: 5 };
const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'item', headerName: 'Item Name', width: 150 },
  { field: 'qty', headerName: 'Quantity', width: 150 },
  { field: 'delevery', headerName: 'Delevery Site', width: 130 },
  { field: 'price', headerName: 'Price', type: 'number', width: 90, },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, item: 'M-Sand', qty: '1 Unit', delevery: "Kathirvedu" , price: 5000 },
  { id: 2, item: 'Cement', qty: '10 Bag', delevery: "Kathirvedu" , price: 2700 },
  { id: 3, item: 'Jalli', qty: '10 CFT', delevery: "Kathirvedu" , price:600 },
  { id: 4, item: 'R-Sand', qty: '1/2 Unit', delevery: "Cycleshop" , price: 4000 },
  { id: 5, item: 'Cement', qty: '5 Bag', delevery: "Cycleshop" , price: 1300 },
  { id: 6, item: 'Steel 8MM', qty: "5 Nm", delevery: "Cycleshop" , price: 850 },
];

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MDTypography component="a" href="#" color="text" onClick={handleClickOpen}>
        <Icon>more_vert</Icon>
      </MDTypography>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"

      >
        <DialogTitle>{"Moorthi Msthiri"}</DialogTitle>
        <DialogContent sx={{ height: '100%', width: '100%' }}>
          <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
            />
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
