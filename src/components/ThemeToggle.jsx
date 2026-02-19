
import { useState } from "react";
export default function ThemeToggle() {
    const[isDark, setIsDark] = useState(false);
    const themeClass = isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800";
    return (
        <div className={`${themeClass} min-h-screen flex items-center justify-center`}>
            <div className="text-center bg-white/10 p-10 rounded 2x1  shadow-xl">
                <h1 className="text-3x1 font-bold mb-4">{isDark ? "Dark mode🌙" : "Light mode☀️🌻"}</h1>
                <p className="mb-6 text-lg">click the button to toggle theme🌟🌓</p>
                <button 
                    onClick={() => setIsDark(!isDark)}
                    className="px-6 py-2 rounded-lg font-semibold bg-violet-500 text-white hover:bg-violet-600 transition-all duration-300"
                >
                    Select Theme
                </button>
            </div>
        </div>
    );

}