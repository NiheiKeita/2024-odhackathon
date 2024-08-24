
import Button from '@/Components/Button';
import React from 'react';

export const Dashboard = React.memo(function Dashboard() {
    return (
        <>
            <p className='text-2xl text-gray-700 font-bold'>
                Dashboard
            </p>
            <div className='grid gap-3 mt-10'>
                <Button className='w-fit ml-4'>ユーザ追加</Button>
                <Button className='w-fit ml-4'>ユーザ一覧</Button>
                <Button className='w-fit ml-4'>Adminユーザ一覧</Button>
                <Button className='w-fit ml-4'>Adminユーザ作成</Button>
            </div>
        </>
    )
})
export default Dashboard