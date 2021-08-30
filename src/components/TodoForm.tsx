import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      marginTop: 40,
    },
    input: {
      width: 400,
      margin: 10,
    },
    button: {
      height: 40,
      margin: 10,
    },
  })
);

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  const [text, setText] = useState<string>("");
  const classes = useStyles();

  const handleClickTodo = () => {
    props.onAdd(text);
    setText("");
  };

  const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      props.onAdd(text);
      setText("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div>
        <TextField
          onChange={handleChange}
          value={text}
          className={classes.input}
          label="Ввод"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          onKeyPress={handlePressKey}
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={handleClickTodo}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};
