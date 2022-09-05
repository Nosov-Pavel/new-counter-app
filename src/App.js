// import '/App.css';
import {useState} from "react";

function App() {
    // const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7])
    // const plusMinusCounter = (value, index) => {
    //     const newArr = numbers.map((el, i) => index === i ? el + value : el)
    //     setNumbers(newArr)
    // }
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
    const plusMinusCounter = (value, index) => {
        const newArr = numbers.map((el, i) => index === i ? el + value: el)
        setNumbers(newArr)
    }
    const [numb, setNumb] = useState([A, B, C])



    const moveUpDown = (direction, index) => {
        const temporary = numbers[index]
        const newArr = [...numbers]
        newArr[index] = newArr[index + direction]
        newArr[index + direction] = temporary
        setNumbers(newArr)
    }
    const addNumber = () => {
        setNumbers([...numbers, 0])

    }
    const remove = (index) => {
        const newArr = numbers.filter((el, ind) => ind !== index)
        setNumbers(newArr)

    }
   const reset = (index) => {
        const newArr = numbers.map((el, i) => index === i ? 0: el)
       setNumbers(newArr)


 }
    return (
        <div>
            <h1>CALCULATOR</h1>
            {numb.map((el, index) => <div></div>)}
            {numbers.map((el, index) => <div key={index}>
                    <button onClick={() => plusMinusCounter(-3, index)}>-3</button>
                    <button onClick={() => plusMinusCounter(-2, index)}>-2</button>
                    <button onClick={() => plusMinusCounter(-1, index)}>-1</button>
                    {el}
                    <button onClick={() => plusMinusCounter(1, index)}>1</button>
                    <button onClick={() => plusMinusCounter(2, index)}>2</button>
                    <button onClick={() => plusMinusCounter(3, index)}>3</button>
                    {" "}
                    <button onClick={() => moveUpDown(-1, index)} disabled={index === 0}>↑</button>
                    <button onClick={() => moveUpDown(1, index)} disabled={index === numbers.length - 1}>↓</button>
                    <button onClick={() => remove(index)}>Remove</button>
                    <button onClick={() => reset(index)}>Reset</button>
                </div>
            )}
            <button onClick={addNumber}>AddNumber</button>


        </div>
    );
}

export default App;
