import styles from "../style.module.css";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value);
    console.log(todo);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
  
  };
  return (
    <div className={styles.todoForm}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className={styles.todoInput}
          placeholder="Type here"
        ></input>
        <button type="submit" className={styles.todoButton}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
