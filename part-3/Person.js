const Person = ({name, age, hobbies}) => {
  const canVote = age >= 18 ? "Please go vote!" : "You must be 18"

  const hobbyList = hobbies.map(hobby => <li>{hobby}</li>)
  return (
    <>
    <p>Learn some information about this person</p>
    <ul>
      <li>Name: {name}</li>
      <li>Age: {age}</li>
      <ul>
        Hobbies
        {hobbyList}
      </ul>
    </ul>
    <p>{canVote}</p>
    </>
  )
}