const App = () => {
  return (
    <>
    <Person
      name="John Doe"
      age={17}
      hobbies={["cooking", "reading", "playing instruments"]}
    />
    <Person
      name="Jane Doe"
      age={23}
      hobbies={["painting", "choreography", "gardening"]}
    />
    <Person
      name="Bill Bob"
      age={64}
      hobbies={["horse racing", "metalworking","watching tv"]}
    />
    </>
  )
}

ReactDom.render(<App />, document.getElementById("root"))