"use client";

type Challenge = {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    duration: number;
    createdAt: string;
};

interface ChallengeCardProps {
    challenge: Challenge,
    challenges?: never
}

export function ChallengeCard({challenge}: ChallengeCardProps) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 border my-2">
            <h2 className="text-lg font-semibold">{challenge.title}</h2>
            <p className="text-gray-600">
                {challenge.description ? challenge.description.slice(0, 100) : ""}...
            </p>
            <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-500">
                    Difficulty: <span className={`font-medium ${
                        challenge.difficulty === 'easy' ? 'text-green-600' :
                        challenge.difficulty === 'medium' ? 'text-yellow-600' : 'text-red-600'
                    }`}>{challenge.difficulty}</span>
                </p>
                <p className="text-sm text-gray-500">
                    Duration: {challenge.duration} days
                </p>
            </div>
            <p className="text-xs text-gray-400 mt-1">
                Created: {new Date(challenge.createdAt).toLocaleDateString()}
            </p>
        </div>
    );
}
