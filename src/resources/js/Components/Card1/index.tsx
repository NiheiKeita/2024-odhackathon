import React from 'react';

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

export const Card1 = React.memo<Props>(function Card1({
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
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
            {/* Image Section */}
            <img src={sportImage} alt={`${sportName} image`} className="w-full h-40 object-cover" />

            {/* Details Section */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-blue-600">{sportName}</h2>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">{tags[0]}</span>
                </div>

                <div className="text-gray-800 mb-4">
                    <p className="text-sm font-medium">{dateTime}</p>
                    <p className="text-sm">{currentParticipants} 人参加中</p>
                    <p className="text-sm">場所: {location}</p>
                    <p className="text-sm">募集締切: {deadline}</p>
                    <p className="text-sm">料金: {fee}</p>
                </div>

                {/* Action Button */}
                <button
                    onClick={onJoinClick}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    参加する
                </button>
            </div>
        </div>
    );
});
