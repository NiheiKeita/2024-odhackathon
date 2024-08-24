
import React from 'react';
import Button from '@/Components/Button';
type Props = {
    children: React.ReactNode
}

export const BackButtonAndTitle = React.memo<Props>(function BackButtonAndTitle({
    children
}) {
    return (
        <div className="relative flex items-center">
            <div className="absolute left-0"><Button variant="default">戻る</Button></div>
            <h1 className="text-2xl font-bold text-gray-700 mx-auto">
                {children}
            </h1>
        </div>
    )

})
export default BackButtonAndTitle