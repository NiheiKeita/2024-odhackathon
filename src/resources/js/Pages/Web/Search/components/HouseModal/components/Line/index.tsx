
import React from 'react';
import { useTop } from './hooks';

type Props = {
    title?: string,
    value?: string
}
export const Line = React.memo<Props>(function Line({
    title,
    value
}) {

    return (
        <div className="flex justify-between">
            <span className="text-gray-500 w-1/2 text-left pr-4">{title} :</span>
            <span className="text-lg font-bold w-1/2 break-words">{value}</span>
        </div>
    );
})
export default Line
