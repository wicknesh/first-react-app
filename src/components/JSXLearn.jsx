const JSXLearn = () => {
    const animals = ["Lion", "Tiger", "Bear"];
  return (
    <div>
        <h1>Animals: </h1>
        <ul>
            {animals.map((animal) => {return <li key={animal}>{animal}</li>})}
        </ul>
    </div>
  )
}

export default JSXLearn