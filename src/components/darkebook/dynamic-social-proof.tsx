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
        }, 15000 + Math.random() * 10000); // 15-25 seconds interval

        // Initial notification
        const initialTimeout = setTimeout(showNotification, 5000);

        return () => {
            clearInterval(interval);
            clearTimeout(initialTimeout);
        };
    }, []);

    if (!currentNotification) return null;

    return (
        <div className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${isVisible ? 'animate-notification-in' : 'animate-notification-out'}`}>
            <div className="bg-card border border-gold rounded-lg shadow-lg p-4 flex items-center gap-3">
                <CheckCircle className="text-gold" size={24} />
                <p className="text-sm text-light-gray">{currentNotification}</p>
            </div>
        </div>
    );
}
