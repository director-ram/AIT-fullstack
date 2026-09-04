import React from "react";

export default function ProfileCard() {
    const user = {
        fullname: "Hemasai",
        age: 22,
        currentStatus: "Student",
        designation: "Fullstack Developer",
        image: "./src/assets/Ai-generated.jpeg",
        skills: ["JavaScript", "React", "NextJS", "Python", "SQL", "MongoDB", "TailwindCSS", "PostgreSQL", "GoogleConsole", "React Native", "Flutter"],
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white max-w-sm w-full rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:scale-105 duration-300">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                <div className="flex flex-col items-center px-6 pb-8">
                    <img
                        src={user.image}
                        alt="profile"
                        className="h-32 w-32 rounded-full border-3 border-white object-cover -mt-16 mb-4 shadow-lg"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">{user.fullname}, {user.age}</h1>
                    <p className="text-blue-600 font-semibold mt-1">{user.designation}</p>
                    <p className="text-gray-500 text-sm mt-1 capitalize">{user.currentStatus}</p>

                    <div className="w-full mt-6">
                        <h2 className="text-sm font-bold text-gray-700 uppercase mb-3 text-center">Skills</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {user.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full border border-gray-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
