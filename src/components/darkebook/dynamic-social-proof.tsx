"use client";

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const notifications = [
  "Mariana adquiriu a Coleção Completa",
  "Beatriz adquiriu a Coleção Completa",
  "Laura adquiriu a Coleção Completa",
  "Júlia adquiriu a Coleção Completa",
  "Isabela adquiriu a Coleção Completa",
  "Ana adquiriu a Coleção Completa",
  "Camila adquiriu a Coleção Completa",
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
        }, 12000); // 12 seconds interval

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
