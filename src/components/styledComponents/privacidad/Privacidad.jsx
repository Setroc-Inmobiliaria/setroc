import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Privacidad = ({ handleClose, open }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Aviso de Privacidad</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Aqui iria el aviso de Privacidad de Setroc
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
