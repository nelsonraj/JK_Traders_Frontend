
import * as React from 'react';


// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import AlertDialog from "layouts/dialogbox/data/dialogData";


// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
// import logoGithub from "assets/images/small-logos/github.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import { actions } from "react-table";


export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {/* <MDAvatar src={image} name={name} size="sm" variant="rounded" /> */}
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  // const UseData = () => {
  //   const [isChildDialogOpen, setIsChildDialogOpen] = React.useState(null);
    
  //   return [isChildDialogOpen, setIsChildDialogOpen];
  // };
  
  // const [isChildDialogOpen, setIsChildDialogOpen] = UseData(false);


  // const handleConfiguratorOpen = () => {
  //   setIsChildDialogOpen(true);
  // };

  // const closeChildDialog = () => {
  //   setIsChildDialogOpen(false);
  // };




  return {
    columns: [
      { Header: "Customer Name", accessor: "project", width: "10%", align: "left" },
      { Header: "Phone Number", accessor: "phnumber", align: "left" },
      // { Header: "Address", accessor: "address", align: "center" },
      { Header: "Purchase Amount", accessor: "pamount", align: "center" },
      { Header: "Payed Amount", accessor: "payedamt", align: "center" },
      { Header: "Balance Amount", accessor: "balamt", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        // project: <Project image={LogoAsana} name="Moorthi" />,
        project: <Project name="Moorthi" />,
        phnumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9600184580
          </MDTypography>
        ),
        // address: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Puzal
        //   </MDTypography>
        // ),
        pamount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $6,000
          </MDTypography>
        ),
        payedamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
        balamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Pending
          </MDTypography>
        ),
        completion: <Progress color="info" value={50} />,
        action: (
          <AlertDialog />
          
        ),
      },
      {
        project: <Project name="Aasirvthsm" />,
        phnumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8585965235
          </MDTypography>
        ),
        // address: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Ottravadai Street
        //   </MDTypography>
        // ),
        pamount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $18,000
          </MDTypography>
        ),
        payedamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $10,000
          </MDTypography>
        ),
        balamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $8000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Pending
          </MDTypography>
        ),
        completion: <Progress color="success" value={70} />,
        action: (
          <MDTypography component="a" href="#" color="text" >
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Setu" />,
        phnumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            7896524512
          </MDTypography>
        ),
        // address: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Gandhi Main Road
        //   </MDTypography>
        // ),
        pamount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $7500
          </MDTypography>
        ),
        payedamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $7500
          </MDTypography>
        ),
        balamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $0
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Completed
          </MDTypography>
        ),
        completion: <Progress color="error" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text" >
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Veera rgav contrction" />,
        phnumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            7896524585
          </MDTypography>
        ),
        // address: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Balaji Nagar
        //   </MDTypography>
        // ),
        pamount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $14500
          </MDTypography>
        ),
        payedamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $14000
          </MDTypography>
        ),
        balamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $500
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Pending
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <MDTypography component="a" href="#" color="text" >
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Hari" />,
        phnumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            7525635648
          </MDTypography>
        ),
        // address: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Kathirvedu
        //   </MDTypography>
        // ),
        pamount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $20,000
          </MDTypography>
        ),
        payedamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $11,000
          </MDTypography>
        ),
        balamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $9,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Pending
          </MDTypography>
        ),
        completion: <Progress color="success" value={60} />,
        action: (
          <MDTypography component="a" href="#" color="text" >
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Sasi" />,
        phnumber: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9865895478
          </MDTypography>
        ),
        // address: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Sakthivel Nagar
        //   </MDTypography>
        // ),
        pamount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $1400
          </MDTypography>
        ),
        payedamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $0
          </MDTypography>
        ),
        balamt: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $1400
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Pending
          </MDTypography>
        ),
        completion: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" color="text" >
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
