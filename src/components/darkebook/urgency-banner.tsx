"use client";

import { Hourglass } from "lucide-react";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }

        let { hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-center">
        <div className="text-lg font-bold bg-black/20 rounded-md p-1 border border-gold">
          {formatTime(timeLeft.hours)}
        </div>
        <span className="text-xs">Horas</span>
      </div>
      <div className="text-lg font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-lg font-bold bg-black/20 rounded-md p-1 border border-gold">
          {formatTime(timeLeft.minutes)}
        </div>
        <span className="text-xs">Min</span>
      </div>
      <div className="text-lg font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-lg font-bold bg-black/20 rounded-md p-1 border border-gold">
          {formatTime(timeLeft.seconds)}
        </div>
        <span className="text-xs">Seg</span>
      </div>
    </div>
  );
};

export default function UrgencyBanner() {
  return (
    <div className="bg-dark-red text-white py-2 shadow-lg w-full">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <Hourglass className="w-6 h-6 text-gold" />
        <p className="font-bold text-sm md:text-base">
          OFERTA EXPIRA EM:
        </p>
        <CountdownTimer />
      </div>
    </div>
  );
}
