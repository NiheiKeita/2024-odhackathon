
import React, { useCallback, useState } from 'react';
import { router } from "@inertiajs/react";
import ModalView from '@/Components/ModalView';
import Line from './components/Line';
import Tag from '@/Components/Tag';

type Props = {
    isOpen: boolean,
    onClose: () => void,
    selectHouse?: any
}

export const HouseModal = React.memo<Props>(function Top({
    isOpen,
    onClose,
    selectHouse
}) {
    if (!selectHouse) return null
    // const { } = useHouseModal()
    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!favorite);
    };
    const handleTelClick = useCallback(() => {
        router.visit(route("web.top"));
    }, []);
    const handleInquiryClick = useCallback(() => {
        router.visit(route("web.house_inquiry.index"));
    }, []);

    return (
        <>
            <ModalView
                isOpen={isOpen}
                onClose={onClose}
                title={selectHouse.name}
                handleTelClick={handleTelClick}
                handleInquiryClick={handleInquiryClick}
            >
                {/* {selectHouse?.name} */}
                <div className="max-w-4xl mx-auto p-4">
                    {/* 画像カルーセル */}
                    <div className="relative">
                        <div className="w-full h-64 bg-gray-300"> {/* 画像のスライド用のダミーコンテンツ */}
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <button className="bg-gray-800 text-white p-2 rounded-full">&lt;</button>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <button className="bg-gray-800 text-white p-2 rounded-full">&gt;</button>
                            </div>
                        </div>
                    </div>

                    {/* 登録日 */}
                    <p className="text-right text-gray-500 mt-2">登録日: {selectHouse.registrationDate}</p>

                    {/* 民泊の名前 */}
                    <h1 className="text-2xl font-bold mt-2">
                        長い名前の民泊が表示される可能性があります。長い名前の民泊が表示される可能性があります。
                    </h1>

                    {/* 賃料などの情報 */}
                    <div className="mt-4 gap-2 grid">
                        <Line title='賃料/管理費' value={`${selectHouse.rent}/${selectHouse.managementFee}`} />
                        <Line title='敷金/礼金' value={`${selectHouse.deposit}/${selectHouse.keyMoney}`} />
                        <Line title='所在地' value={selectHouse.location} />
                        <Line title='交通' value={selectHouse.transportation} />
                        <Line title='間取り/面積' value={`${selectHouse.layout}/${selectHouse.area}`} />
                    </div>

                    {/* タグ */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {
                            selectHouse.tags.map((tag: string, id: number) => {
                                return (<Tag key={id}>{tag}</Tag>)
                            })
                        }
                    </div>

                    {/* お気に入りボタン */}
                    <button
                        onClick={toggleFavorite}
                        className="mt-4 flex items-center space-x-2 text-yellow-500"
                    >
                        <span className={`text-2xl ${favorite ? 'text-yellow-600' : 'text-gray-300'}`}>★</span>
                        <span className={`text-lg font-bold ${favorite ? 'text-yellow-600' : 'text-gray-300'}`}>お気に入り</span>
                    </button>

                    {/* 物件の詳細 */}
                    <div className="mt-6">
                        <h2 className="text-xl font-bold">物件の詳細</h2>
                        <p className="mt-2 text-gray-700 whitespace-pre-wrap">
                            {selectHouse.description}
                            {/* この物件は、駅近で非常に便利な場所に位置しています。ペット可で、新築のオートロック付きです。
                            広々とした2LDKの間取りで、リビングルームとダイニングルームが一体となった快適な空間を提供します。 */}
                        </p>
                    </div>
                </div>
            </ModalView>
        </>
    );
})
export default HouseModal
