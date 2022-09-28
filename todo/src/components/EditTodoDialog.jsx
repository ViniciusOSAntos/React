import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { TextField } from "@mui/material";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({
  open,
  dialogHandler,
  todo,
  editTodo,
}) {
  const [editedText, setEditedText] = useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editedText)
    dialogHandler()
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Edit To-Do"}</DialogTitle>
        <DialogContent>
          <TextField
            defaultValue={editedText}
            fullWidth
            onChange={(e) => setEditedText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancel</Button>
          <Button onClick={textHandler}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
