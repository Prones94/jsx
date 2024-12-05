const App = () => {
  return (
    <>
    <Tweet
      username='johndoe'
      name="John Doe"
      date={new Date().toDateString()}
      message="This is my first tweet"
    />
    <Tweet
      username='johndoe'
      name="John Doe"
      date={new Date().toDateString()}
      message="This is my second tweet"
    />
    <Tweet
      username='johndoe'
      name="John Doe"
      date={new Date().toDateString()}
      message="This is my third tweet"
    />
    </>
  )
}

ReactDom,render(<App />, document.getElementById("root"))