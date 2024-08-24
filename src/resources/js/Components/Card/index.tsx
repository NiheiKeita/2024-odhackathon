
import Search from '@/Pages/Web/Search';
import React from 'react';
import SearchArea from '../SearchArea';

type Props = {
    sportImage: string;
    sportName: string;
    dateTime: string;
    currentParticipants: number;
    location: string;
    nearestStation: string;
    deadline: string;
    fee: string;
    tags: string[];
    onJoinClick: () => void;
};

export const Card = React.memo<Props>(function Card({
    sportImage,
    sportName,
    dateTime,
    currentParticipants,
    location,
    nearestStation,
    deadline,
    fee,
    tags,
    onJoinClick,
}) {

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
            <div className="flex">
                {/* Sport Image */}
                <div className="w-1/4 relative aspect-w-1 aspect-h-1">
                    <img
                        src={sportImage}
                        alt={sportName}
                        className="w-full object-cover"
                    />
                    <h2 className="text-xl font-semibold mt-2 text-center">{sportName}</h2>
                </div>

                <div className="flex-grow p-6">
                    {/* Date and Time */}
                    <p className="text-gray-800 text-2xl font-bold mb-4">{dateTime}</p>

                    {/* Location */}
                    <p className="text-gray-600 mt-2">
                        {location} <span className="text-gray-400">({nearestStation})</span>
                    </p>

                    {/* Fee */}
                    <p className="text-gray-600 mt-2">{fee}</p>

                    {/* Tags */}
                    <div className="mt-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="px-6 py-4 flex items-center justify-end">
                        {/* Deadline */}
                        <p className="text-gray-600 text-sm mr-4">
                            {`募集締切: ${deadline}`}
                        </p>
                        {/* Current Participants */}
                        <p className="bg-gray-100 text-gray-700 text-xl font-bold px-4 py-2 rounded-lg">
                            {`現在の参加者: ${currentParticipants}名`}
                        </p>
                    </div>
                </div>
            </div>


            <hr className="border-t" />

            {/* Join Button */}
            <div className="px-6 py-4">
                <button
                    onClick={onJoinClick}
                    className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                    参加する
                </button>
            </div>
        </div>
    )
})
export default Card
