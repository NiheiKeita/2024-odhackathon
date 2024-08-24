import React, { useState } from 'react';
import { useApplication } from './hooks';

type Props = {
    items: string[],
    title: string
}

export const Selector = React.memo<Props>(function Selector({
    title,
    items
}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const filteredItems = items.filter((item: string) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleFocus = () => setIsOpen(true);
    const handleBlur = () => setTimeout(() => setIsOpen(false), 200); // Delay to allow click on options

    const handleClick = (item: string) => {
        setSelectedItem(item);
        setSearchTerm(item);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full mx-auto">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <input
                type="text"
                placeholder="Select an option..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleClick(item)}
                                className={`p-2 cursor-pointer hover:bg-gray-100 ${item === selectedItem ? 'bg-gray-200' : ''}`}
                            >
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="p-2 text-gray-500">No items found</li>
                    )}
                </ul>
            )}
        </div>
    );
});
export default Selector;
