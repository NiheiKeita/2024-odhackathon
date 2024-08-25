
import React, { useState } from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    title: string
}

export const Accordion = React.memo<Props>(function Accordion({
    children,
    title,
}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200 rounded-md">
            <button
                onClick={toggleAccordion}
                className="w-full text-left p-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">{title}</span>
                    <svg
                        className={`w-5 h-5 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-4 bg-white">
                    {children}
                </div>
            </div>
        </div>
    )
})
export default Accordion
