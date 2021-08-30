import { Paper } from "@material-ui/core";
import React from "react";
import { Todo } from "./Interfaces";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      marginBottom: "1rem",
    },
    listItem: {
      width: "70%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      padding: "1rem",
      background: "#f3f3f",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 5,
    },
    checkbox: {
      marginRight: 20,
    },
  })
);

type TodoListProps = {
  todos: Todo[];
  onChecked: (id: number) => void;
  onRemove: (id: number) => void;
};

export const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  onRemove,
  onChecked,
}) => {
  const classes = useStyles();

  if (todos.length === 0) {
    return <p className={classes.center}>Пока дел нет!</p>;
  }

  return (
    <ul>
      {todos.map((item) => {
        return (
          <li key={item.id} className={classes.center}>
            <Paper elevation={3} className={classes.listItem}>
              <div>
                <input
                  type="checkbox"
                  checked={item.completed}
                  className={classes.checkbox}
                  onChange={() => onChecked(item.id)}
                />
                {item.title}
              </div>
              <i className="material-icons" onClick={() => onRemove(item.id)}>
                delete
              </i>
            </Paper>
          </li>
        );
      })}
    </ul>
  );
};
