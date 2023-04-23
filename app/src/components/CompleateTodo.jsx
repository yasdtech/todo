export const CompleateTodo = (props) => {
  const {compleateTodo} = props
  return (
    <>
      <h1>完了したTODO
        
      </h1>
      {compleateTodo.map((todo, index) => {
        return (
          <>
          <div>
            {todo}
          </div>
          </>
        )
      })}
    </>
  )
}