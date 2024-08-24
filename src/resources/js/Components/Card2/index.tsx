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

export const Card2 = React.memo<Props>(function Card1({
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
        <div className="relative bg-white rounded-lg overflow-hidden w-full mx-auto shadow-lg font-sans">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${sportImage})`, filter: 'brightness(80%)' }}
            />

            {/* Card Content */}
            <div className="relative z-10 p-4 text-white bg-gradient-to-t from-black via-transparent to-black-translucent">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-4xl font-bold truncate drop-shadow-2xl"
                        style={{
                            WebkitTextStrokeColor: "black",
                            WebkitTextStrokeWidth: "0.8px"
                        }}>{sportName}</h2>
                    <span className="bg-blue-500 text-white text- px-2 py-1 rounded-full">あと{currentParticipants}人</span>
                    {/* <p className="text-sm">{currentParticipants} 人参加中</p> */}
                </div>

                <div className="flex flex-col mb-4">
                    <p className="text-lg font-semibold w-fit"
                        style={{
                            WebkitTextStrokeColor: "black",
                            WebkitTextStrokeWidth: "0.3px"
                        }}>{dateTime}</p>
                    <span className="border-gray-50  bg-theme text-gray-50 text-xs px-2 py-1 rounded-full w-fit">{tags[0]}</span>
                </div>

                <div className="flex justify-between text-sm mb-1">
                    <p>場所: {location}</p>
                    <p>締切: {deadline}</p>
                </div>

                {/* <button
                        onClick={onJoinClick}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        参加する
                    </button> */}
            </div>
        </div>
    );
});
