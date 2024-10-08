
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
            <div className="w-full sm:max-w-2xl mt-6 px-6 py-4 overflow-hidden">
                {children}
            </div>
        </div>
    );
}
