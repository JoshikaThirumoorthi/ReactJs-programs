import { useState } from "react";


export default function ColorPicker(){
    const [color , setcolor] = useState("bg-gray-300");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h2 className="text-2xl font-bold text-center">Simple color Picker💛🌻🐝🌼🍯🧸</h2>
            {/* color Box */}
            <div className={`w-48 h-48 rounded-x1 ${color}`}></div>
            <div className="Flex-gap-4">
                <button
                onClick={()=> setcolor("bg-violet-500")}
                className="px-4 py-2 bg-violet-500 text-white rounded-1g">VIOLET
                </button>
                <button 
                onClick={()=> setcolor("bg-blue-500")}
                className="px-4 py-2 bg-blue-500 text-white rounded-1g">BLUE
                </button>
                <button onClick={()=> setcolor("bg-yellow-500")}
                className="px-4 py-2 bg-yellow-500 text-white rounded-1g">YELLOW
                </button>   
                
            </div>

        </div>
    )
}