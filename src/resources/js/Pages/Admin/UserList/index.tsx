
import React, { useState } from 'react';
import { users } from './sample';
import SearchArea from '@/Components/SearchArea';
import BackButtonAndTitle from '@/Components/BackButtonAndTitle';

export const UserList = React.memo(function UserList() {
    const [searchTerm, setSearchTerm] = useState('');

    // フィルタリングされたユーザリスト
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-4xl  rounded-lg overflow-hidden pt-6">
                <BackButtonAndTitle>ユーザ一覧</BackButtonAndTitle>
                <SearchArea />
                <table className="min-w-full table-auto bg-white mt-2 shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="px-6 py-3 text-left text-sm font-medium">名前</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">メールアドレス</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">電話番号</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">作成日</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{user.tel}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{user.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
})
export default UserList