// Import necessary dependencies
"use client"
import { client } from '@/app/lib/sanity';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import BannerTrip from '../../components/shared/BannerTrip';
import tick from '@/public/check-icon.svg';
import wrong from '@/public/exclusion-icon.svg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './tour.module.css'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loading from '@/app/components/home/Loading';
import React from 'react';


const formatDate = (dateString) => {
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // except 11-13
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const ordinalSuffix = getOrdinalSuffix(day);

  return `${day}${ordinalSuffix} ${month}, ${year}`;
};

// Fetch trip details by slug
async function fetchTripBySlug(slug: string) {
  const query = `*[_type == "tripDetails" && slug.current == $slug][0]{
    name,
    "featuredImageUrl": featuredImage.asset->url,
    "tripPages": tripImages[].asset->url,
    avgprice,
    price[] { heading, subtext, price },
    slug,
    packageOverview {
      tripType,
      bestFor,
      tripDuration { days, nights },
      accommodation,
      meals { breakfast, lunch, dinner },
      transport { flight, train, bus, localTravelVehicle, vehicleType },
      travelHighlights
    },
    overview,
    itinerary[] { dayNumber, heading, overview },
    inclusionsExclusions { inclusions, exclusions },
    additionalInfo[] { heading, paragraph }
  }`;
  return await client.fetch(query, { slug });
}

// Fetch similar trips by trip type and best for criteria
async function fetchSimilarTrips(tripType: string, bestFor: string[]) {
  const query = `*[_type == "tripDetails" && packageOverview.tripType == $tripType || packageOverview.bestFor in $bestFor && !(_id in path("drafts.**"))][0...4]{
    "imageUrl": featuredImage.asset->url,
    name,
    avgprice,
    "dateOfLeaving": upcomingTripDate,
    "days": packageOverview.tripDuration.days,
    "nights": packageOverview.tripDuration.nights,
    slug
  }`;
  return await client.fetch(query, { tripType, bestFor });
}



// Page component to display trip details
const TripDetailPage = ({ params }: { params: { slug: string } }) => {
  const pathname = usePathname();
  console.log(pathname)
    const [trip, setTrip] = useState<any>(null);
  const [similarTrips, setSimilarTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch trip details and similar trips
    const fetchData = async () => {
      try {
        setLoading(true);
        const tripData = await fetchTripBySlug(params.slug);
        if (tripData) {
          const similarTripsData = await fetchSimilarTrips(
            tripData.packageOverview.tripType,
            tripData.packageOverview.bestFor
          );
          setTrip(tripData);
          setSimilarTrips(similarTripsData);
        }
      } catch (error) {
        console.error('Error fetching trip data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  if (loading) {
    return <Loading />;
  }

  if (!trip) {
    return <div>Trip not found</div>;
  }

  const localTransferDescription = trip.packageOverview.transport.localTravelVehicle
    ? ` & Local Transfers by ${trip.packageOverview.transport.vehicleType || ''} Vehicle`
    : '';
  
  

const generateWhatsAppLink = (tripName) => {
  const message = `
    Hi Travel Agency,
    I just came across your amazing ${tripName} trip, and I’d love to book it!
    Looking forward to hearing from you!

    Here’s the link: https://spin-vacations.vercel.app${pathname}
  `;

  // Remove the `\n` and extra spaces for WhatsApp link
  const cleanMessage = message.trim().replace(/\s+/g, ' '); // Removes all newlines and extra spaces
  const encodedMessage = encodeURIComponent(cleanMessage);
  return `https://wa.me/9315600374?text=${encodedMessage}`;
};



  return (
    <div className={`w-full h-fit py-7`}>
      <div className='flex flex-col gap-4 w-full h-full'>
        <div className={`${styles.container} px-20`}>
          <span className='flex gap-1 text-xs items-center text-[#666666]'>
            <Link href="/">Home</Link>
            <ChevronRight className='text-sm' />
            <Link href={`/trip/${trip.name}`} className='text-primary'>{trip.name}</Link>
          </span>
          <h1 className={`font-sans font-semibold ${styles.tripH} text-black text-[2.7vw]`}>{trip.name}</h1>
          <h3 className='text-sm font-bold text-text font-lato'>{trip.packageOverview.tripDuration.days} Days <span className='text-primary'>/</span> {trip.packageOverview.tripDuration.nights} Nights</h3>
        </div>
        <div className='flex flex-col relative gap-5'>
          <div className={`flex ${styles.tripCont} ${styles.container} px-20 gap-4 w-full h-full`}>
          {/* Left Side */}
          <div className='w-full h-full flex flex-col gap-3'>
              <div className={`w-full h-[26vw] ${styles.imgSize} rounded-lg shadow-md`}>
              <BannerTrip data={trip.tripPages} />
            </div>

            <div className='bg-white rounded-lg shadow-md w-full overflow-hidden'>
              <Tabs defaultValue="overview" className="w-full overflow-hidden">
                <TabsList className="font-sans w-full overflow-x-auto">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Day wise Itinerary</TabsTrigger>
                  <TabsTrigger value="inc/exl">Inclusion/Exclusion</TabsTrigger>
                  <TabsTrigger value="addinfo">Additional Info</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  </TabsList>
                  
                <div className='px-4 py-4 font-lato'>
                <TabsContent value="overview" className={`${styles.overview} font-lato text-base leading-snug text-text`}>{trip.overview}</TabsContent>
                  
                <TabsContent value="itinerary">
                      <div className="relative flex flex-col gap-4 w-full justify-center">
                        {trip.itinerary.map((item, i) => (
                          <div key={i} className='flex gap-4 items-start'>
                          <div className={`flex flex-col ${styles.iti} items-center`}>
                            <h1>Day</h1>
                              <div className='py-2 px-4 text-white overflow-hidden rounded-full font-semibold bg-primary'>{item.dayNumber}</div>
                          </div>
                          
                          <div className='w-full h-fit flex flex-col border border-primary rounded-md overflow-hidden'>
                              <div className='flex px-3 py-2 w-full bg-pgradient items-center'>
                                <h1 className={`font-semibold hidden ${styles.show} gap-1 items-center`}>Day <span className='font-sans font-semibold text-white'>{item.dayNumber}: </span>{item.heading}</h1>
                              </div>
                              <div className='flex p-3 font-lato w-full h-full'>
                                <p>{item.overview}</p>
                              </div>
                          </div>
                          
                        </div>
                        ))}
                      
                        {/* {trip.itinerary.map((item, i) => (
                          <div key={i} className="flex items-center gap-4 w-full overflow-hidden">
                              <div className='flex flex-col gap-5'>
                              <div className='py-2 px-4 text-white overflow-hidden rounded-full font-semibold bg-primary'>{item.dayNumber}</div>
                              <div className='rotate-90 h-1 w-full bg-accent overflow-hidden'></div>
                            </div>
                            <h1 className='text-text'>{item.heading}</h1>
                          </div>
                        ))} */}
                      </div>

                      <p className='text-sm text-[#666666] mt-8 flex w-full text-center justify-center font-semibold'>*This overview highlights key points; <br />however, the trip will encompass many additional experiences that can&apos;t be detailed in text.</p>
                    </TabsContent>
                  
                  <TabsContent value="inc/exl">
                      <div className={`flex ${styles.incexc} w-full h-fit gap-4`}>
                      {/* inclusions */}
                      <div className='w-full p-3 flex flex-col gap-3 rounded-lg bg-[#EAFAEA] shadow-md'>
                        <h1 className='text-xl font-semibold font-sans'>Inclusions</h1>

                        <div className='font-lato text-sm flex flex-col h-full gap-4'>
                              {trip.inclusionsExclusions.inclusions.map((item: string, index: number) => (
                            <div key={index} className='flex items-center gap-2'>
                                <Image src={tick} alt="inclusion" width={14} height={14} />
                                <p>{item}</p>
                            </div>
                              ))}
                        </div>
                      </div>
                      
                      {/* exclusions */}
                      <div className='w-full p-3 flex flex-col gap-3 rounded-lg bg-[#FBEBEB] shadow-md'>
                        <h1 className='text-xl font-semibold font-sans'>Exclusions</h1>

                        <div className='font-lato text-sm flex flex-col h-full gap-4'>
                            {trip.inclusionsExclusions.exclusions.map((item: string, index: number) => (
                            <div key={index} className='flex items-center gap-2'>
                                <Image src={wrong} alt="exclusion" width={14} height={14} />
                                <p>{item}</p>
                            </div>
                              ))}
                        </div>
                        </div>
                    </div>
                  </TabsContent>

                    <TabsContent value="addinfo" className='flex flex-col gap-4'>
                      {trip.additionalInfo.map((info: { heading: string; paragraph: string }, index: number) => (
                        <div key={index} className='w-full h-fit flex flex-col border border-primary rounded-md overflow-hidden'>
                      <div className='flex px-3 py-2 w-full bg-pgradient'>
                        <h1 className='font-semibold'>{info.heading}</h1>
                      </div>
                      <div className='flex p-3 font-lato w-full h-full'>
                        <p>{info.paragraph}</p>
                      </div>
                        </div>
                        ))}
                  </TabsContent>

                  <TabsContent value="pricing" className='h-fit'>
                      <div className='w-full h-fit grid grid-cols-2 grid-rows-4 gap-y-5 border-l-2 border-accent items-center pl-4'>
                        {trip.price.map((pricing: { heading: string; subtext: string; price: string }, index: number) => (
                        <>
                        <div key={index} className='pheading font-lato text-lg font-semibold text-text flex flex-col'>{pricing.heading} <span className="text-base font-bold text-[#666666]">{pricing.subtext}</span>
                        </div>
                        <div className={`text-base font-sans ${styles.price}`}><span className=''>₹</span>{pricing.price}</div>
                        </>
                      ))}
                      </div>
                  </TabsContent>
                  </div>
              </Tabs>
            </div>
            </div>
            
          {/* Right Side */}
            <div className={`w-[40vw] ${styles.overviewCont} h-full flex flex-col gap-14`}>
              <div className={`flex flex-col h-fit bg-pgradient justify-between overflow-hidden shadow-md rounded-lg ${styles.priceCont}`}>
                <div className='flex flex-col px-3 pt-3 py-2'>
                <p className='text-base'>Starting from</p>
                <div className='flex items-center gap-2'>
                    <h1 className='text-[2.5vw] font-bold font-sans'>₹{trip.avgprice}</h1>
                    <span className='text-sm font-regular tracking-tight'>Per Person</span>
                  </div>
                  </div>
                <div className='w-full bg-white flex px-4 py-4 items-center justify-center'>
                  <Link href={generateWhatsAppLink(trip.name)}target="_blank" rel="noopener noreferrer" className='w-full h-12 border border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white duration-200 ease-in-out text-base text-accent font-semibold tracking-tight'>
                    <span
                      className=''
                    >
                      CONTACT US
                    </span>
                  </Link>
                </div>
              </div>

            <div className='w-full h-fit flex flex-col gap-4 px-3 pb-6 pt-8 rounded-lg bg-white border border-accent relative shadow-md'>
              <div className={`px-4 py-2 border-accent text-text font-sans absolute ${styles.overviewH} -top-[1.5vw] left-1/4 border rounded-full bg-gray-100`}>
                Package Overview
              </div>
              <div className='grid grid-cols-2 grid-rows-3 gap-y-3'>
                <div className='flex flex-col'>
                  <h1 className='text-accent font-semibold font-lato'>Trip Type: </h1>
                  <h3 className='text-text leading-snug font-lato'>{trip.packageOverview.tripType}</h3>
                </div>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-accent font-semibold font-lato'>Best For: </h1>
                    <h3 className='text-text leading-snug font-lato flex flex-wrap gap-2'>
                      {trip.packageOverview.bestFor.map((tag: string, index: number) => (
                        <Badge key={index} className='text-gray-500 hover:bg-primary hover:text-white duration-200 bg-gray-200'>{tag}</Badge>
                      ))}  
                    </h3>
                  </div>
                <div className='flex flex-col'>
                  <h1 className='text-accent font-semibold font-lato'>Trip Duration: </h1>
                  <h3 className='text-text leading-snug font-lato'>{trip.packageOverview.tripDuration.days} Days / {trip.packageOverview.tripDuration.nights} Nights</h3>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-accent font-semibold font-lato'>Accommodation: </h1>
                    {trip.packageOverview.accommodation.map((item: string, index: number) => (
                      <h3 key={index} className='text-text leading-snug font-lato'>{item}</h3>
                    ))}
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-accent font-semibold font-lato'>Meals: </h1>
                    <h3 className='text-text leading-snug font-lato'>
                      {trip.packageOverview.meals.breakfast ? 'Breakfast ' : ''}
                      
                      {trip.packageOverview.meals.lunch ? '& Lunch ' : ''}
                      
                      {trip.packageOverview.meals.dinner ? '& Dinner' : ''}
                    </h3>
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-accent font-semibold font-lato'>Transport: </h1>
                    <h3 className='text-text leading-snug font-lato'>
                      {trip.packageOverview.transport.flight ? '✈️ Flight' : ''}
                      {trip.packageOverview.transport.train ? '🚂 Train' : ''}
                      {trip.packageOverview.transport.bus ? '🚎 Bus' : ''}
                      {localTransferDescription}
                    </h3>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                  <h1 className='text-accent font-semibold font-lato'>Travel Highlights: </h1>
                  <h3 className='text-text leading-snug font-lato flex flex-wrap gap-2'>
                     {trip.packageOverview.travelHighlights.map((highlight: string, index: number) => (
                       <Badge key={index} className='text-gray-500 hover:bg-primary hover:text-white duration-200 bg-gray-200'>{highlight}</Badge>
                      ))}
                </h3>
              </div>
            </div>
            </div>
            
          </div>
          
          {/* <div className='px-4 py-4 w-full bg-red-300 text-white flex items-center sticky bottom-0'> */}
            <div className={`flex-col ${styles.show} h-fit bg-pgradient justify-between overflow-hidden hidden sticky bottom-0 shadow-md rounded-lg`}>
                <div className='flex justify-between items-center px-3 pt-3 py-1'>
                <p className='text-base'>Starting from</p>
                <div className='flex items-center'>
                    <h1 className='text-[6vw] font-bold font-sans'>₹{trip.avgprice}</h1>
                  {/* <span className='text-sm font-regular tracking-tight'>Per Person</span> */}
                  </div>
                  </div>
                <div className='w-full bg-white flex px-4 py-3 items-center justify-center'>
                  <Link href={generateWhatsAppLink(trip.name)}target="_blank" rel="noopener noreferrer" className='w-full h-12 border border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white duration-200 ease-in-out text-base text-accent font-semibold tracking-tight'>
                    <span
                      className=''
                    >
                      CONTACT US
                    </span>
                  </Link>
                </div>
              </div>
            {/* </div> */}

          
          <div className={`w-full h-fit ${styles.container} px-20 flex flex-col item-center mt-4`}>
            {/* Similiar Trips Design */}
            <h1 className='text-4xl font-sans'>Similiar Trips</h1>
            <div className={`grid grid-cols-4 ${styles.mainSimiliarCont} gap-8 flex-none overflow-y-auto mt-6`}>
              {similarTrips.map((trip, index) => (
                <Link
                      href={`/trip/${trip.slug.current}`}
                      key={index}
                      className= {`min-w-[25%] ${styles.similiarContSize} cursor-pointer shrink-0 overflow-hidden shadow-gradient-shadow relative h-[50vh] rounded-2xl`}
                    >
                      <Image
                        src={trip.imageUrl}
                        alt='Tour Image'
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className='w-full h-full object-cover'
                      />
                  <div className={`absolute h-[16vh] ${styles.tripDetails} w-full px-6 bottom-0 bg-white border-accent border-b-2 rounded-2xl shadow-gradient-shadow`}>
                        <div className='flex flex-col h-full'>
                           {trip.dateOfLeaving && (
                              <div className='text-xs bg-pgradient flex items-center justify-center w-full rounded-br-2xl rounded-bl-2xl py-[4px]'>
                                Leaving on&nbsp;
                                <span className='font-semibold' dangerouslySetInnerHTML={{ __html: formatDate(trip.dateOfLeaving) }} />
                              </div>
                            )}
                          <div className='flex justify-between w-full h-full items-center'>
                            <div className='flex flex-col gap-[4px]'>
                              <div className='flex gap-2 items-center'>
                                <h3 className='text-text capitalize text-base font-sans font-semibold'>
                                  {trip.name}
                                </h3>
                                <p className='text-gray-500 font-semibold text-xs'>
                                  {trip.days === 0 ? '' : `${trip.days}D`} 
                                  {trip.days !== 0 && trip.nights !== 0 && <span className='text-accent'> / </span>}
                                  {trip.nights !== 0 && `${trip.nights}N`}
                                </p>
                              </div>
                              <div className='flex justify-between items-center'>
                                <p className='font-sans text-xl'>₹{trip.avgprice}</p>
                              </div>
                            </div>
                            <div className='flex justify-center items-center'>
                              <button className='p-2 text-white bg-accent rounded-full'>
                                <ChevronRight />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>

          </div>
      </div>
    </div>
  );
};

export default TripDetailPage;
