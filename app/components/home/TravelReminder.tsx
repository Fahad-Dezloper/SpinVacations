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
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

    const { days } = timePassed;
    const timePassedString = `${days} days`;

    switch (selectedOption) {
      case '3':
        return (
          <>
            <p className="text-2xl font-bold text-green-500">
              {timePassedString}
            </p>
            <p className='mb-4'>
              Ohh, it&apos;s been <strong>3 months</strong>? A quick weekend getaway might be just what you need!
            </p>
            <p>
              <Link href="/all-tours" className="text-[#666666] underline decoration-green-500 text-lg">
                Explore our short trips
              </Link>{" "}
              and treat yourself!
            </p>
          </>
        );
      case '6':
        return (
          <>
            <p className="text-2xl font-bold text-yellow-500">
              {timePassedString}
            </p>
            <p className='mb-4'>
              <strong>6 months</strong>? Time to pack your bags and hit the road!
            </p>
            <p>
              <Link href="/all-tours" className="decoration-yellow-500 text-lg text-[#666666] underline">Find your next adventure now</Link> Don&apos;t wait any longer, 
            </p>
          </>
        );
      case '12':
        return (
          <>
            <p className="text-2xl font-bold text-red-500">
              {timePassedString}
            </p>
            <p className='mb-4'>
              It&apos;s been a <strong>year</strong>? You deserve a grand vacation don&apos;t let life pass you by!
            </p>
           <p>
              <a href="/all-tours" className="text-[#666666] decoration-red-500 text-lg underline">Bucket list destinations</a> are calling! Start your adventure and plan the perfect escape NOW!.
            </p>
          </>
        );
      default:
        return <p>Select an option to see more details.</p>;
    }
  };

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <h1 className='text-8xl font-sans text-center font-bold mb-4'>When did you last travel?</h1>
      <div className='flex gap-4 items-center'>
      <div className='flex gap-2 items-center font-sans text-lg text-[#666666] font-semibold'>
        It&apos;s been
        <div className='p-1 bg-[#F2F4F6] w-fit h-fit rounded-full border-2 border-r-accent border-t-accent border-b-accent'>
          <ArrowRight />
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <button onClick={() => handleOptionChange('3')} className='bg-gray-200 text-text border hover:bg-primary hover:text-white duration-200 px-3 py-2 rounded-lg'>
          3 months
        </button>
        <button onClick={() => handleOptionChange('6')} className='bg-gray-200 text-text border hover:bg-primary hover:text-white duration-200 px-3 py-2 rounded-lg'>
          6 months
        </button>
        <button onClick={() => handleOptionChange('12')} className='bg-gray-200 text-text border hover:bg-primary hover:text-white duration-200 px-3 py-2 rounded-lg'>
          12 months
        </button>
        </div>
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
            <AlertDialogCancel onClick={() => setOpen(false)} className='hover:border hover:border-accent hover:bg-[#F2F4F6] duration-200'>Cancel</AlertDialogCancel>
            <AlertDialogAction>
              <Link href="/all-tours" className="text-white">Explore trips</Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default TravelReminder;
