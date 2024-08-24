
import React, { useState } from 'react';
import { useHouseInquiry } from './hooks';
import WebLayout from '@/Layouts/WebLayout';
import Button from '@/Components/Button';

export const HouseInquiry = React.memo(function HouseInquiry() {
    const [data, setData] = useState({
        inquiryType: '',
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const submit = (e: any) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <WebLayout>
            <div className="mx-auto mt-10">
                <div className='flex justify-center'>
                    <h1 className="text-2xl font-bold">ハウスお問い合わせ</h1>
                </div>
                <form onSubmit={submit} className='mt-10'>
                    <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">お問い合わせ内容</label>
                        <select
                            id="inquiryType"
                            name="inquiryType"
                            value={data.inquiryType}
                            onChange={(e) => setData({ ...data, inquiryType: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-theme focus:ring-theme sm:text-sm"
                        >
                            <option value="">選択してください</option>
                            <option value="availability">最新の空室状態を知りたい</option>
                            <option value="pricing">料金について知りたい</option>
                            <option value="support">サポートについて</option>
                            <option value="booking">予約に関して</option>
                            <option value="other">その他</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-theme focus:ring-theme sm:text-sm"
                        />
                        {/* Add InputError component if needed */}
                    </div>

                    <div className="mt-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号</label>
                        <input
                            id="phone"
                            type="text"
                            name="phone"
                            value={data.phone}
                            onChange={(e) => setData({ ...data, phone: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-theme focus:ring-theme sm:text-sm"
                        />
                        {/* Add InputError component if needed */}
                    </div>

                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-theme focus:ring-theme sm:text-sm"
                        />
                        {/* Add InputError component if needed */}
                    </div>

                    <div className="mt-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
                        <textarea
                            id="message"
                            name="message"
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                            rows={5}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-theme focus:ring-theme sm:text-sm"
                        ></textarea>
                        {/* Add InputError component if needed */}
                    </div>


                    <div className="mt-6">
                        <Button variant='blue'>問い合わせる(無料)</Button>
                    </div>
                    {/* <div className="flex items-center justify-end mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 disabled:opacity-50"
                            disabled={processing}
                        >
                            問い合わせる(無料)
                        </button>
                    </div> */}
                </form>
            </div>
        </WebLayout>
    );
})
export default HouseInquiry
