
import React from 'react';
import { useSearch } from './hooks';
import SearchArea from '@/Components/SearchArea';
import WebLayout from '@/Layouts/WebLayout';
import ModalView from '@/Components/ModalView';
import HouseModal from './components/HouseModal';
import { items } from './sample';

export const Search = React.memo(function Search() {
    const { handleHouseClick, selectHouseId, setSelectHouseId, handleModalClose } = useSearch()


    return (
        <>
            <WebLayout>
                {/* トップの画像セクション */}
                <div className="relative mb-6">
                    <img
                        src="https://cdn.pixabay.com/photo/2023/12/18/12/31/house-8455970_960_720.jpg"
                        alt="Top"
                        className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <div className="absolute bottom-4 w-full">
                        <SearchArea />
                    </div>
                </div>

                {/* 一覧表示セクション */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="rounded-lg cursor-pointer" onClick={() => handleHouseClick(item.id)}>
                            <img
                                src={item.thumbnail}
                                alt={item.name}
                                className="w-full h-32 object-cover rounded-lg mb-2"
                            />
                            <h3 className="text-black text-lg font-semibold line-clamp-2 whitespace-normal break-words">
                                {item.name}
                            </h3>
                            <p className="text-gray-500">{item.rent}</p>
                        </div>
                    ))}
                </div>
            </WebLayout>
            <HouseModal
                isOpen={selectHouseId !== undefined}
                onClose={() => handleModalClose()}
                selectHouse={items.find((item) => item.id === selectHouseId)}
            />
            {/* <ModalView isOpen={selectHouseId !== undefined} onClose={() => handleModalClose()} title="Sample Modal">
                {selectHouseId}
            </ModalView> */}
        </>
    );
})
export default Search
