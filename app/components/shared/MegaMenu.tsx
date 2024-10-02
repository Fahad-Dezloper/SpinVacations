"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import UpcomingNav from './UpcomingNav';
import NavTour from './NavTour';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


export const MegaMenu = () => {
  return (
      <div className='flex h-fit w-full justify-start font-sans md:justify-center'>
          <Tabs />
    </div>
  )
}

const Tabs = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [dir, setDir] = useState<null | 'l' | 'r'>(null);
    const [Rotate, setRotate] = useState(false)

    const handleSetSelected = (val: number | null) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? 'r' : 'l');
        } else if (val === null) {
            setDir(null);
        }
        
        setSelected(val);
    }
    // Function to handle smooth scrolling
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return <div
        onMouseLeave={() => handleSetSelected(null)}
        className='relative h-fit flex gap-2'
    >

        {/* render all tabs  */}
        {TABS.map((t) => {
                return (
                    <Tab
                        key={t.id}
                        selected={selected}
                        handleSetSelected={handleSetSelected}
                        tab={t.id}
                        isDropdown={t.isDropdown}
                        scrollToSection={scrollToSection} // Pass scroll function
                        title={t.title} // Pass title for conditional check
                    >
                        {t.link ? (
                            <Link href={t.link}>
                                {t.title}
                            </Link>
                        ) : (
                            <span>{t.title}</span>
                        )}
                    </Tab>
                );
            })}

        {/* render all content */}
        <AnimatePresence>
    {selected && TABS[selected - 1]?.isDropdown && <Content dir={dir} selected={selected} />} {/* Render only if isDropdown is true */}
        </AnimatePresence>
    </div>
}

const Tab = ({ children, tab, handleSetSelected, selected, isDropdown, scrollToSection, title }: { children: ReactNode; tab: number; handleSetSelected: (val: number | null) => void; selected: number | null; isDropdown: boolean;  }) => { 
                return  <Button
            id={`shift-tab-${tab}`}
            onMouseOver={() => handleSetSelected(tab)}
            onClick={() => {
                if (title === "Happy Customers") {
                    scrollToSection("testimonials"); // Scroll to testimonials if Happy Customers is clicked
                } else {
                    handleSetSelected(tab); // Default behavior for other tabs
                }
            }}
            className={`flex items-center gap-1 font-semibold rounded-full px-3 py-1.5 text-sm transition-colors ${
                selected === tab ? "text-white bg-primary" : "text-[#666666] bg-white"
            }`}
        >
            <span>{children}</span>
            {isDropdown && (
                <FiChevronDown
                    className={`transition-transform ${
                        selected === tab ? "rotate-180" : ""
                    }`}
                />
            )}
        </Button>
}

const Content = ({ dir, selected }: { dir: null | 'l' | 'r'; selected: number | null; }) => { 
    return <motion.div
        id='overlay-content'
        initial={{
            opacity: 0,
            y: 8,
        }}
        animate={{
            opacity: 1,
            y: 0,
        }}
        exit={{ 
            opacity: 0,
            y: 8,
        }}
        className='absolute left-0 top-[calc(100%_+_24px)] w-[40rem] rounded-lg bg-white shadow-md p-4 z-1000' // Add z-50 here
    >
        <Bridge />
        <Nub selected={selected} />
        {TABS.map((t) => {
            return (
                <div className='overflow-hidden z-999' key={t.id}>
                    {selected === t.id && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.25, ease: "easeInOut"
                            }}
                        >
                            <t.Component />
                        </motion.div>
                    )}
                </div>
            )
        })}
    </motion.div>
}

const Nub = ({ selected }: { selected: number | null }) => {
    const [left, setLeft] = useState(0);
    useEffect(() => {
        moveNub();
    }, [selected]); 
    

        const moveNub = () => {
            if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");

            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
            }
        };
        return (
            <motion.span style={{
                clipPath: "polygon(0 0,100% 0, 50% 50%, 0 100%)",
            }} animate={{left}} className={`absolute left-[1/2] top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900 `} />
            )
        }

const Bridge = () => (  
    <div className='absolute -top-[24px] left-0 right-0 h-[24px]' />
 )


const TourPackages = () => { 
    return (
        <NavTour />
    )
}

const UpcomingTours = () => { 
    return (
        <UpcomingNav />
    )

}

const ExampleComponent = () => { 
    return <div className='text-text hidden'>hello Example</div>
}

const TABS = [
    {
        title: "Home",
        Component: ExampleComponent,
        isDropdown: false,
        link: "/",
    },
    {
        title: "Tour Packages",
        Component: TourPackages,
        isDropdown: true,
        link: "/all-tours",
    },
    {
        title: "Upcoming Tours",
        Component: UpcomingTours,
        isDropdown: true,
        link: "/upcoming-trips",
    },
    {
        title: "Happy Customers",
        Component: ExampleComponent,
        isDropdown: false,
    },
].map((n, idx) => ({...n, id: idx + 1}))
