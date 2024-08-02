import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CookieConsent: React.FC = () => {
    const [showConsent, setShowConsent] = useState<boolean>(false);

    useEffect(() => {
        const consent = Cookies.get('cookieConsent');
        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('cookieConsent', 'accepted', { expires: 365 }); // Cookie expires in 1 year
        setShowConsent(false);
    };

    const handleReject = () => {
        Cookies.set('cookieConsent', 'rejected', { expires: 365 }); // Cookie expires in 1 year
        setShowConsent(false);
    };

    if (!showConsent) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 p-4 shadow-lg z-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <span className="text-gray-700 mb-2 md:mb-0">
                    This website uses cookies to ensure you get the best experience on our website.
                </span>
                <div className="flex space-x-2">
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded"
                        onClick={handleAccept}
                    >
                        Accept Cookies
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded"
                        onClick={handleReject}
                    >
                        Reject Cookies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
