const Tweet = ({username, name, date, message}) => {
  return (
    <div
      style={{
        backgroundColor:'lightblue',
        color: 'darkblue',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
    <h2>{username}</h2>
    <h1>{name}</h1>
    <p>{date}</p>
    <p>{message}</p>
    </div>
  )
}