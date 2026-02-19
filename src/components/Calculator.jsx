import { useState } from "react";

export default  function Calculator(){
    const [num1 , setNum1] = useState(" ");
    const [num2 , setNum2] = useState(" ");
    const number1 = parseFloat(num1)||0;
    const number2 = parseFloat(num2)||0;
    const addition = number1 + number2;
    const subtraction = number1 - number2;
    const multiplication = number1 * number2;
    const division = number2 !== 0 ? (number1 / number2).toFixed(2) : "0";
    return(
        <div className="bg-blue-200 rounded-2x1 p-8 w-96 align-center mx-auto mt-10 border border-gray-300   ">
            <h1 className="text-2xl font-bold text-center mb-4">Calculator</h1>

            {/* Input*/}
            <input type="number"
            placeholder="Enter first Number" 
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full p-2 mb-4 border  rounded-lg"
            />

           <input type="number"
            placeholder="Enter second Number" 
            value={num2 }
            onChange={(e) => setNum2(e.target.value)}
            className="w-full p-2 mb-4 border  rounded-lg"
            />

            {/* Result */}
            <div className="space-y-2 text-lg">
                <p>➕Addition: <span className="font-semibold">{addition}</span></p>
                <p>➖Subtraction: <span className="font-semibold">{subtraction}</span></p>
                <p>✖️Multiplication: <span className="font-semibold">{multiplication}</span></p>
                <p>➗Division: <span className="font-semibold">{division}</span></p>
            </div>
        </div>
    )
}   