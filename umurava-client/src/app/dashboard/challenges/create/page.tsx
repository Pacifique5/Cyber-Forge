"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { createChallengeAsync } from "@/store/challengesSlice";

const CreateChallengePage = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const [challengeData, setChallengeData] = useState({
        title: "",
        description: "",
        difficulty: "easy" as "easy" | "medium" | "hard",
        duration: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setChallengeData({
            ...challengeData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await dispatch(createChallengeAsync({
                title: challengeData.title,
                description: challengeData.description,
                difficulty: challengeData.difficulty,
                duration: Number(challengeData.duration),
            })).unwrap();
            
            router.push("/dashboard/challenges");
        } catch (error) {
            console.error("Error creating challenge:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Challenge</h1>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Challenge Title:
                    </label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={challengeData.title} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full" 
                    />
                </div>
                
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description:
                    </label>
                    <textarea 
                        id="description" 
                        name="description" 
                        value={challengeData.description} 
                        onChange={handleChange} 
                        required 
                        rows={4}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full" 
                    />
                </div>
                
                <div>
                    <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
                        Difficulty:
                    </label>
                    <select 
                        name="difficulty" 
                        value={challengeData.difficulty} 
                        onChange={handleChange} 
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                        Duration (days):
                    </label>
                    <input 
                        type="number" 
                        id="duration" 
                        name="duration" 
                        value={challengeData.duration} 
                        onChange={handleChange} 
                        required 
                        min="1"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full" 
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded-md px-4 py-2 w-full"
                >
                    {isSubmitting ? "Creating..." : "Create Challenge"}
                </button>
            </form>
        </div>
    );
};

export default CreateChallengePage;
