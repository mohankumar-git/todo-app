// import React, {useEffect, useState} from 'react';

// import {useSelector, useDispatch} from 'react-redux'




// export default function TransitionsModal() {
  
  

  

  

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//           <TextField
//           id="outlined-error-helper-text"
//           label="Write Task"
//           variant="outlined"
//           sx={{ width: "100%" }}
//           onChange={handleInput}
//           value={todo}
//           helperText="Please provide valid Task*"
//           error={showError}
//         />
//         <Button variant="contained" sx={{ mt: 3, mb: 3 }} onClick={handleUpdateTask}>
//           Update Task
//         </Button>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }