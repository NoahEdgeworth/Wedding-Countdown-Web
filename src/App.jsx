import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, Gift, Home, Camera, Clock3, Users, Map, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const WillowPattern = () => (
  <div className="fixed inset-0 w-full h-full opacity-10 pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-full h-full">
      <pattern id="willowPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        <path d="M100,0 Q150,100 100,200" fill="none" stroke="#1e40af" strokeWidth="1"/>
        <path d="M90,0 Q140,100 90,200" fill="none" stroke="#1e40af" strokeWidth="1"/>
        <circle cx="100" cy="50" r="3" fill="#1e40af"/>
        <circle cx="95" cy="60" r="2" fill="#1e40af"/>
        <circle cx="105" cy="55" r="2" fill="#1e40af"/>
        <path d="M0,100 Q100,150 200,100" fill="none" stroke="#1e40af" strokeWidth="1"/>
        <path d="M0,90 Q100,140 200,90" fill="none" stroke="#1e40af" strokeWidth="1"/>
        <path d="M150,150 L160,140 M155,145 L165,135" stroke="#1e40af" strokeWidth="1"/>
        <path d="M50,50 L60,40 M55,45 L65,35" stroke="#1e40af" strokeWidth="1"/>
        <circle cx="150" cy="50" r="10" fill="none" stroke="#1e40af" strokeWidth="1"/>
        <circle cx="50" cy="150" r="10" fill="none" stroke="#1e40af" strokeWidth="1"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#willowPattern)"/>
    </svg>
  </div>
);

const TimeUnit = ({ value, label }) => (
  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
    <div className="text-2xl font-bold text-blue-800">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-xs text-blue-600">{label}</div>
  </div>
);

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const photos = [
    {
      id: 1,
      src: "/images/IMG_8444.jpeg",
      caption: "The Proposal",
      date: "July 2024"
    },
    {
      id: 2,
      src: "/images/Facetune_15-07-2024-08-14-17.jpeg",
      caption: "Beach Pics",
      date: "July 2024"
    },
    {
      id: 3,
      src: "/images/IMG_8207.jpeg",
      caption: "Braves Game",
      date: "September 2022"
    },
    {
      id: 4,
      src: "/images/IMG_3856.jpeg",
      caption: "Out on the Town",
      date: "October 2022"
    },
    {
      id: 5,
      src: "/images/IMG_8010.jpeg",
      caption: "Jackpot",
      date: "December 2023"
    },
    {
      id: 6,
      src: "/images/IMG_5836.jpeg",
      caption: "Pro Pics",
      date: "February 2023"
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, photos.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mt-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-200">
        <h2 className="text-2xl text-blue-800 mb-6 text-center font-bold">Our Journey</h2>
        
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
          {/* Main Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].caption}
              className="w-full h-full object-contain object-center"
              // style={{maxHeight: '600px'}}
            />
            
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
              <h3 className="text-xl font-semibold">{photos[currentIndex].caption}</h3>
              <p className="text-sm opacity-80">{photos[currentIndex].date}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-800 p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-800 p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-blue-800 p-2 rounded-full shadow-lg transition-all"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeContent = ({ timeLeft, names }) => {
  const quickFacts = [
    {
      icon: <Calendar className="w-6 h-6 text-blue-800" />,
      label: "Wedding Date",
      value: "October 26, 2025"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-800" />,
      label: "Ceremony Time",
      value: "4:00 PM"
    },
    {
      icon: <Gift className="w-6 h-6 text-blue-800" />,
      label: "Next Milestone",
      value: timeLeft.days > 100 ? "100 Days Mark!" : "Final Countdown!"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center p-6 relative">
        <div className="absolute inset-0 border-8 border-blue-800/10 rounded-full transform -rotate-45"></div>
        <Heart className="w-16 h-16 text-blue-800 mx-auto mb-4 animate-pulse" />
        <h1 className="text-3xl font-bold text-blue-900">
          {names.partner1} & {names.partner2}
        </h1>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center border-2 border-blue-200">
        <h2 className="text-xl text-blue-800 mb-4">Days Until We Say "I Do"</h2>
        <div className="grid grid-cols-4 gap-4">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-4 border-2 border-blue-200">
        <h2 className="text-xl text-blue-800 mb-4">Quick Facts</h2>
        {quickFacts.map((fact, index) => (
          <div key={index} className="flex items-center space-x-4 p-2 hover:bg-blue-50 rounded-lg transition-colors">
            {fact.icon}
            <div>
              <p className="text-sm text-blue-600">{fact.label}</p>
              <p className="font-medium text-blue-900">{fact.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScheduleContent = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-200">
      <h2 className="text-2xl text-blue-800 mb-6 font-bold">Wedding Day Schedule</h2>
      <div className="space-y-4">
        <TimelineItem time="4:00 PM" event="Ceremony Begins" />
        <TimelineItem time="5:00 PM" event="Cocktail Hour" />
        <TimelineItem time="6:00 PM" event="Reception" />
        <TimelineItem time="7:00 PM" event="Dinner Service" />
        <TimelineItem time="8:00 PM" event="First Dance" />
      </div>
    </div>
  );
};

const TimelineItem = ({ time, event }) => {
  return (
    <div className="flex items-center space-x-4 p-4 hover:bg-blue-50 rounded-lg transition-colors">
      <div className="flex-shrink-0 w-24 font-medium text-blue-800">{time}</div>
      <div className="flex-grow text-blue-900">{event}</div>
    </div>
  );
};

const PartyContent = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-200">
      <h2 className="text-2xl text-blue-800 mb-6 font-bold">TBD</h2>
      <p className="text-blue-600">Coming Soon!</p>
    </div>
  );
};

const VenueContent = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-200">
      <h2 className="text-2xl text-blue-800 mb-6 font-bold">TBD</h2>
      <p className="text-blue-600">Coming Soon!</p>
    </div>
  );
};

export default function WeddingCountdown() {
  const [activeTab, setActiveTab] = useState('home');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date('2025-10-26T16:00:00');
  const names = {
    partner1: "Noah",
    partner2: "Ramsey"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'gallery', label: 'Our Story', icon: <Camera className="w-4 h-4" /> },
    { id: 'schedule', label: 'Schedule', icon: <Clock3 className="w-4 h-4" /> },
    { id: 'party', label: 'Love Letters', icon: <Users className="w-4 h-4" /> },
    { id: 'venue', label: 'Venue', icon: <Map className="w-4 h-4" /> }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return <HomeContent timeLeft={timeLeft} names={names} />;
      case 'gallery':
        return <PhotoGallery />;
      case 'schedule':
        return <ScheduleContent />;
      case 'party':
        return <PartyContent />;
      case 'venue':
        return <VenueContent />;
      default:
        return <HomeContent timeLeft={timeLeft} names={names} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-x-hidden">
      <WillowPattern />
      
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-200 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm transition-colors relative
                  ${activeTab === item.id 
                    ? 'text-blue-800 font-medium' 
                    : 'text-blue-600 hover:text-blue-800'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {activeTab === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-800" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6">
        {renderContent()}
      </div>
    </div>
  );
}