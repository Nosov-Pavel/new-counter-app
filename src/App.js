import {useState} from "react";

function App(){
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7])

    // const plusMinusCounter = (value, index) => {
    //     const newArr = numbers.map((el, i) => index === i ? el+value: el)
    //     setNumbers(newArr)
    // }
    const plusMinusCounter = (value, index) => {
        const newArr = numbers.map((el, i) => index === i ? el+value: el)
        setNumbers(newArr)
    }
    const moveUpDown = (direction, index) => {
        const temporary = numbers[index]
        const newArr = [...numbers]
        newArr[index] = newArr[index+direction]
        newArr[index+direction]=temporary
        setNumbers(newArr)
    }

    return(
        <div className="App">
            <h1>CALCULATOR</h1>
            {numbers.map((el, index) => <div key={index}>
                <button onClick={() => plusMinusCounter(-3, index) }>-3</button>
                <button onClick={() => plusMinusCounter(-2, index)}>-2</button>
                <button onClick={() => plusMinusCounter(-1, index)}>-1</button>
                {el}
                <button onClick={() => plusMinusCounter(1, index)}>1</button>
                <button onClick={() => plusMinusCounter(2, index)}>2</button>
                <button onClick={() => plusMinusCounter(3, index)}>3</button>
                {" "}
                <button onClick={() => moveUpDown(-1, index)} disabled={index===0}>↑</button>
                <button onClick={() => moveUpDown(1, index)} disabled={index===numbers.length-1}>↓</button>

            </div>)}

        </div>
    );
}
export default App;
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
//
//   const plusMinusCounter = (value, index) => {
//     const newArr = numbers.map((el, i) => index === i ? el+value: el)
//     setNumbers(newArr)
//     }
//     const moveUpDown = (direction, index) => {
//     const temporary = numbers[index]
//       const newArr = [...numbers]
//       newArr[index] = newArr[index+direction]
//       newArr[index+direction]=temporary
//       setNumbers(newArr)
//     }
//
//   return (
//     <div className="App">
//       <h1>Calculator</h1>
//
//       {numbers.map((el, index) => <div key={index}>
//         <button onClick={() => plusMinusCounter(-3, index)}>-3</button>
//         <button onClick={() => plusMinusCounter(-2, index)}>-2</button>
//         <button onClick={() => plusMinusCounter(-1, index)}>-1</button>
//         {el}
//         <button onClick={() => plusMinusCounter(1, index)}>+1</button>
//         <button onClick={() => plusMinusCounter(2, index)}>+2</button>
//         <button onClick={() => plusMinusCounter(3, index)}>+3</button>
//         {' '}
//         <button onClick={()=> moveUpDown(-1, index)} disabled={index===0}>↑</button>
//         <button onClick={()=> moveUpDown(1, index)} disabled={index===numbers.length-1}>↓</button>
//       </div>)}
//
//     </div>
//   );
// }
//
// export default App;
