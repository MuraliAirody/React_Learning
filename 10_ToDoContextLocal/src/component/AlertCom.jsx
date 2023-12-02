import React from "react";
import Alert from '@mui/material/Alert';

import Stack from '@mui/material/Stack';

export default function AlertCom({ openAlert }) {
  console.log(openAlert);
  return (
    <>
      {openAlert && (
       <Stack sx={{ width: '100%' }} spacing={2}>
        
         <Alert variant="filled" severity={openAlert.type}>
           {openAlert.msg}
         </Alert>
       </Stack>
      )}
    </>
  );
}
