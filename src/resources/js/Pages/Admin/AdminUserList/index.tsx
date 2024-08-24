
import React, { useState } from 'react';
import { users } from './sample';
import BackButtonAndTitle from '@/Components/BackButtonAndTitle';
import SearchArea from '@/Components/SearchArea';
import AdminLayout from '@/Layouts/AdminLayout';

export const AdminUserList = React.memo(function AdminUserList() {
    return (
        <AdminLayout>
            <BackButtonAndTitle>管理ユーザ一覧</BackButtonAndTitle>
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
        </AdminLayout>
    )
})
export default AdminUserList