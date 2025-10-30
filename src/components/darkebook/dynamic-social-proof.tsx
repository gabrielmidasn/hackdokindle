"use client";

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const notifications = [
  "Juliana acabou de adquirir a Coleção Completa Darkebook",
  "Rafael garantiu a Coleção Completa Darkebook",
  "Camila entrou para a Coleção Completa Darkebook agora mesmo",
  "Lucas aproveitou a Coleção Completa Darkebook",
  "Ana garantiu acesso vitalício à Coleção Completa Darkebook"
];

export default function DynamicSocialProof() {
    const [currentNotification, setCurrentNotification] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showNotification = () => {
            const randomIndex = Math.floor(Math.random() * notifications.length);
            setCurrentNotification(notifications[randomIndex]);
            setIsVisible(true);

            // Hide after 4 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 4000);
        };

        const interval = setInterval(() => {
            // Wait for fade out animation to complete before showing next one
            setTimeout(showNotification, 500);
        }, 12000 + Math.random() * 5000); // 12-17 seconds interval

        // Initial notification
        const initialTimeout = setTimeout(showNotification, 5000);

        return () => {
            clearInterval(interval);
            clearTimeout(initialTimeout);
        };
    }, []);

    if (!currentNotification) return null;

    return (
        <div className={`fixed top-4 right-4 z-50 transition-all duration-500 ${isVisible ? 'animate-notification-in' : 'animate-notification-out'}`}>
            <div className="bg-card border border-gold rounded-lg shadow-lg p-3 flex items-center gap-2 max-w-xs sm:max-w-sm">
                <CheckCircle className="text-gold" size={20} />
                <p className="text-xs text-light-gray">{currentNotification}</p>
            </div>
        </div>
    );
}