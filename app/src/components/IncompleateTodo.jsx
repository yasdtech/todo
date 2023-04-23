import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const IncompleateTodo = (props) => {
  const {incompleateTodo, addCompleate, deleteIncompleate} = props;
  return (
    <>
      <h1>未完了のTODO</h1>
      {incompleateTodo.map((todo, index) => {
        return (
          <>
          <div>
            {todo}
            <CheckBoxIcon
              color="success"
              sx={{ fontSize: 40 }}
              onClick={() => {addCompleate(index)}}
            >
              完了
            </CheckBoxIcon>

            <DeleteForeverIcon
              sx={{ fontSize: 40 }}
              onClick={() => {deleteIncompleate(index)}}
            >
              削除
            </DeleteForeverIcon>
          </div>
          </>
        )
      })}
    </>
  )
}