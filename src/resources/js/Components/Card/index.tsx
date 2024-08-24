
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
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full cursor-pointer" onClick={onJoinClick}>
            <div className="flex">
                <div className="w-2/5 relative aspect-w-1 aspect-h-1 px-4 py-6">
                    <h2 className="text-lg font-semibold text-center whitespace-nowrap">初心者OK</h2>
                    <img
                        src={sportImage}
                        alt={sportName}
                        className="w-full object-cover"
                    />
                    <div>
                        <div className="flex justify-between text-xs mt-2">
                            <p className="text-left whitespace-nowrap">日時：</p>
                            <p className="text-left ml-2 text-ellipsis overflow-hidden">{dateTime}</p>
                        </div>
                        <div className="flex justify-between text-xs mt-2">
                            <p className="text-left whitespace-nowrap">費用：</p>
                            <p className="text-left ml-2 text-ellipsis overflow-hidden">{fee}</p>
                        </div>
                    </div>
                    {/* <div className='p-2'>
                        <p className="text-md mt-2 text-left">日時：{dateTime}</p>
                        <p className="text-md mt-2 text-left">費用：{fee}</p>
                    </div> */}
                </div>

                <div className="grid px-6 pt-6 w-full">
                    <div className='w-full'>
                        <p className="text-gray-800 text-lg font-bold mb-4">{sportName}</p>
                        <p className="text-gray-600 mt-2 text-base">
                            {location} <span className="text-gray-400">({nearestStation})</span>
                        </p>
                        <div className="mt-4">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {/* <p>「秋のフットボールフェスティバル」は、2024年10月14日に市民体育館グラウンドで開催される5人制サッカーのトーナメントです。参加費は1チーム10,000円で、オンラインまたは電話で申し込み可能。</p> */}
                    </div>
                    <div className='w-full flex justify-end'>
                        <div className="py-4 flex items-center">
                            <p className="text-gray-600 text-sm mr-4">
                                {`募集締切: ${deadline}`}
                            </p>
                            <p className="bg-gray-100 text-gray-700 text-xl font-bold px-4 py-2 rounded-lg">
                                {`現在の参加者: ${currentParticipants}名`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
})
export default Card
