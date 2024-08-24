
import React from 'react';
import Button from '../Button';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    handleTelClick: () => void,
    handleInquiryClick: () => void,
    children: React.ReactNode;
}

export const ModalView = React.memo<Props>(function TitleText({
    isOpen,
    onClose,
    title,
    handleTelClick,
    handleInquiryClick,
    children
}) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full">
                <div className="relative w-full p-6 pb-20 max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">{title}</h2>
                    </div>
                    <div>{children}</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full text-white flex gap-2 p-2 bg-black bg-opacity-30">
                    <Button onClick={handleTelClick}>電話でお問合せ</Button>
                    <Button onClick={handleInquiryClick} variant='blue'>お問合せ(無料)</Button>
                </div>
                <div
                    className="absolute -top-5 text-white right-0 sm:-right-5 flex justify-center items-center
                               w-10 h-10 p-2 bg-theme rounded-full hover:opacity-70 text-2xl font-bold cursor-pointer"
                    onClick={onClose}
                >
                    ×
                </div>
            </div>
        </div>
    )

})
export default ModalView