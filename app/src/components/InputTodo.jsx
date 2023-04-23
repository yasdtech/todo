import Button from '@mui/material/Button';
const style = {
  margin: "10px", 
}

export const InptTodo = (props) => {
  const {inputTodo, onChangeTodoArea, addIncompleateTodo} = props;
  return (
    <>
    <div style={style}>
      <input type="text" value={inputTodo} onChange={onChangeTodoArea}></input>
      <Button variant="contained" onClick={addIncompleateTodo}>TODO追加</Button>
    </div>
    </>
  )
}