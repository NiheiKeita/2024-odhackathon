
import React, { useState } from 'react';
import Button from '@/Components/Button';

type Props = {
    placeholder?: string
}
export const SearchArea = React.memo<Props>(function SearchArea({
    placeholder = "Search by city..."
}) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="w-full flex justify-center p-2 mt-12">
            <div className="relative w-full max-w-lg">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full ps-4 py-3 pr-20 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-theme"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="w-fit absolute top-0 right-1 h-full flex justify-center items-center">
                    <Button
                        variant="blue"
                        className="w-fit h-fit"
                    >
                        検索
                    </Button>
                </div>
            </div>
        </div >
    )

})
export default SearchArea