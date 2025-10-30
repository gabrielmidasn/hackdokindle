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
    <div className="flex items-center gap-1">
      <div className="flex flex-col items-center">
        <div className="text-sm font-bold bg-black/20 rounded-md p-0.5 px-1 border border-gold">
          {formatTime(timeLeft.hours)}
        </div>
        <span className="text-xs scale-90">Horas</span>
      </div>
      <div className="text-sm font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-sm font-bold bg-black/20 rounded-md p-0.5 px-1 border border-gold">
          {formatTime(timeLeft.minutes)}
        </div>
        <span className="text-xs scale-90">Min</span>
      </div>
      <div className="text-sm font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-sm font-bold bg-black/20 rounded-md p-0.5 px-1 border border-gold">
          {formatTime(timeLeft.seconds)}
        </div>
        <span className="text-xs scale-90">Seg</span>
      </div>
    </div>
  );
};

export default function UrgencyBanner() {
  return (
    <div className="bg-dark-red text-white py-1 shadow-lg w-full">
      <div className="container mx-auto px-4 flex flex-row items-center justify-center gap-2 text-center">
        <Hourglass className="w-4 h-4 text-gold" />
        <p className="font-bold text-xs">
          OFERTA EXPIRA EM:
        </p>
        <CountdownTimer />
      </div>
    </div>
  );
}
