"use client";
import React, { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const calculateTimePassed = (months: number) => {
  const now = new Date();
  const pastDate = new Date();
  pastDate.setMonth(pastDate.getMonth() - months);

  const timeDiff = now.getTime() - pastDate.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  const hoursDiff = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
  const minutesDiff = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
  const secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return {
    days: daysDiff,
    hours: hoursDiff,
    minutes: minutesDiff,
    seconds: secondsDiff,
  };
};

const TravelReminder = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [timePassed, setTimePassed] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (selectedOption) {
      const updateCountdown = () => {
        const { days, hours, minutes, seconds } = calculateTimePassed(parseInt(selectedOption));
        setTimePassed({ days, hours, minutes, seconds });
      };

      updateCountdown(); // Initial calculation
      interval = setInterval(updateCountdown, 1000); // Update every second

      return () => {
        if (interval) clearInterval(interval); // Cleanup interval on component unmount
      };
    }
  }, [selectedOption]);

  const handleOptionChange = (months: string) => {
    setSelectedOption(months);
    setOpen(true); // Open the alert dialog
  };

  const getMessage = () => {
    if (!selectedOption || !timePassed) return <p>Select an option to see more details.</p>;

    const { days, hours, minutes, seconds } = timePassed;
    const timePassedString = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;

    switch (selectedOption) {
      case '3':
        return (
          <>
            <p className="text-2xl font-bold text-green-500">
              {timePassedString} ago
            </p>
            <p>
              Ohh, it's been <strong>3 months</strong>? A quick weekend getaway might be just what you need!
            </p>
            <p>
              <a href="/explore-trips" className="text-blue-600 underline">
                Explore trips
              </a>{" "}
              and treat yourself!
            </p>
          </>
        );
      case '6':
        return (
          <>
            <p className="text-2xl font-bold text-yellow-500">
              {timePassedString} ago
            </p>
            <p>
              <strong>6 months</strong>? Time to pack your bags and hit the road!
            </p>
            <p>
              Don't wait any longer, <a href="/explore-trips" className="text-blue-600 underline">find your next adventure now</a>!
            </p>
          </>
        );
      case '12':
        return (
          <>
            <p className="text-2xl font-bold text-red-500">
              {timePassedString} ago
            </p>
            <p>
              It's been a <strong>year</strong>? You deserve a grand vacation—don't let life pass you by!
            </p>
            <p>
              Start planning your <a href="/explore-trips" className="text-blue-600 underline">dream getaway</a> today.
            </p>
          </>
        );
      default:
        return <p>Select an option to see more details.</p>;
    }
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='text-8xl font-sans text-center font-bold mb-4'>When did you last travel?</h1>

      <div className='flex gap-4 mb-6'>
        <button onClick={() => handleOptionChange('3')} className='bg-gray-200 p-2 rounded'>
          3 months
        </button>
        <button onClick={() => handleOptionChange('6')} className='bg-gray-200 p-2 rounded'>
          6 months
        </button>
        <button onClick={() => handleOptionChange('12')} className='bg-gray-200 p-2 rounded'>
          12 months
        </button>
      </div>

      <AlertDialog open={open} onOpenChange={() => setOpen(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {selectedOption === '3' && "It's been 3 months!"}
              {selectedOption === '6' && "It's been 6 months!"}
              {selectedOption === '12' && "It's been a year!"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {getMessage()}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction>
              <a href="/explore-trips" className="text-blue-600 underline">Explore trips</a>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default TravelReminder;
