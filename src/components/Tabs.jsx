import React, { useState } from 'react';
export default function Tabs() {
    const [activeTab, setActiveTab] = useState("home");
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-6  shadow-lg rounded-lg w-full ">
                {/*Tabs*/}
                <div className="flex justify-center mb-6">
                    <button
                        onClick={() => setActiveTab("home")}
                        className={`px-4 py-2 mx-2 rounded ${
                            activeTab === "home" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => setActiveTab("about")}
                        className={`px-4 py-2 mx-2 rounded ${
                            activeTab === "about" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        About
                    </button>
                    
                    <button
                        onClick={() => setActiveTab("contact")}
                        className={`px-4 py-2 mx-2 rounded ${
                            activeTab === "contact" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        Contact
                    </button>
                </div>

                {/*conditional rendering*/}
                <div className="text-center text-lg">
                    {activeTab === "home" && <p>😀Welcome to the Home tab!</p>}
                    {activeTab === "about" && <p>📚About us page</p>}
                    {activeTab === "contact" && <p>📞Contact us page</p>}

                </div>
            </div>
        </div>
    );
           
}