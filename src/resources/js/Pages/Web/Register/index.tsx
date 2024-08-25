
import React, { useCallback, useState } from 'react';
import { useSearch } from './hooks';
import SearchArea from '@/Components/SearchArea';
import WebLayout from '@/Layouts/WebLayout';
import ModalView from '@/Components/ModalView';
import { items } from './sample';
import Selector from '@/Components/Selector';
import { Card2 } from '@/Components/Card2';
import mapImage from './img/map.png'
import soccerImage from './img/soccer.jpg';

export const Register = React.memo(function Register() {
    const [selectedSport, setSelectedSport] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedTag, setSelectedTag] = useState('');

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">イベント登録</h2>

            {/* Sport Selection */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">スポーツ</label>
                <Selector
                    items={['Football', 'Basketball', 'Tennis']} placeholder='例) サッカー' title={''} />
            </div>
            {/* Location Selection */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">場所</label>
                <Selector
                    items={['Tokyo', 'Osaka', 'Nagoya']} title="" placeholder={'例) 市民公園グラウンド'} />

                <div
                    style={{
                        backgroundImage: `url(${soccerImage})`,
                        backgroundSize: 'cover', // 画像を全体に表示
                        backgroundPosition: 'center', // 中央に配置
                        width: '300px',
                        height: '200px',
                    }}
                />
            </div>

            {/* Image Upload */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">サムネイル画像</label>
                <input
                    type="file"
                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                />
            </div>

            {/* Participant Number */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">募集人数</label>
                <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="例) 22人"
                />
            </div>


            {/* Event Time */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">日程</label>
                <input
                    type="datetime-local"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Fee */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">料金</label>
                <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="例) 500円"
                />
            </div>

            {/* Tag Selection */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">タグ</label>
                <Selector
                    items={['Beginner Only', 'Advanced']} placeholder='例) 初心者限定' title={''} />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-theme text-white py-3 rounded-lg font-medium text-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                登録
            </button>
        </div>
    );
})
export default Register
