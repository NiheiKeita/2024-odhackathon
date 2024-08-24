
import React from 'react';

type Props = {
    children: React.ReactNode
}

export const AdminLayout = React.memo<Props>(function AdminLayout({
    children
}) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden pt-6 px-2">
                {children}
            </div>
        </div>
    )

})
export default AdminLayout