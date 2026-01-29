import React, { useState, useEffect } from 'react';
import { Activity, Globe, CheckCircle2, UserPlus, Zap, ArrowDownCircle } from 'lucide-react';

const events = [
  { text: "New Commission: 55m Superyacht (Monaco)", type: "new", time: "2m ago" },
  { text: "Delivery Complete: Sunseeker 88 Refit", type: "done", time: "14m ago" },
  { text: "Visual Audit Requested from Miami, FL", type: "audit", time: "Just now" },
  { text: "Brokerage 'OceanInd' joined the platform", type: "join", time: "1h ago" },
  { text: "High-Res Assets Downloaded: Project Zephyr", type: "download", time: "4h ago" },
  { text: "Enterprise Plan activated: Burgess London", type: "join", time: "Today" },
  { text: "Render Complete: 120ft Explorer Hull", type: "done", time: "22m ago" },
  { text: "New Partner Application: Dubai Office", type: "audit", time: "Yesterday" },
  { text: "Agency Slot Secured: IYC", type: "join", time: "This week" },
  { text: "4K Video Generated: Riva 110", type: "done", time: "5m ago" }
];

const StudioPulse: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(events[0]);

  useEffect(() => {
    // Initial delay
    const initialTimer = setTimeout(() => setVisible(true), 2500);

    const cycleTimer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        let nextEvent;
        // Avoid repeating the same event immediately
        do {
            nextEvent = events[Math.floor(Math.random() * events.length)];
        } while (nextEvent.text === currentEvent.text && events.length > 1);
        
        setCurrentEvent(nextEvent);
        setVisible(true);
      }, 500); // Wait for fade out
    }, 7000); 

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleTimer);
    };
  }, [currentEvent]);

  // Helper for icon based on type
  const getIcon = (type: string) => {
      switch(type) {
          case 'done': return <CheckCircle2 className="w-3 h-3 text-neon" />;
          case 'join': return <UserPlus className="w-3 h-3 text-blue-500" />;
          case 'audit': return <Activity className="w-3 h-3 text-amber-500" />;
          case 'download': return <ArrowDownCircle className="w-3 h-3 text-purple-500" />;
          default: return <Globe className="w-3 h-3 text-gray-400" />;
      }
  }

  // Helper for color indicator
  const getColor = (type: string) => {
       switch(type) {
          case 'done': return 'bg-neon';
          case 'join': return 'bg-blue-500';
          case 'audit': return 'bg-amber-500';
          case 'download': return 'bg-purple-500';
          default: return 'bg-gray-500';
      }
  }

  return (
    <div 
        className={`fixed bottom-20 md:bottom-6 left-6 z-40 transition-all duration-700 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
    >
      <div className="bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 p-3 rounded-sm shadow-2xl flex items-center gap-4 max-w-[calc(100vw-3rem)] md:max-w-sm">
        
        <div className="relative shrink-0">
            <div className={`w-2 h-2 rounded-full ${getColor(currentEvent.type)}`}></div>
            <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${getColor(currentEvent.type)}`}></div>
        </div>

        <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 flex items-center gap-1 truncate">
                    {getIcon(currentEvent.type)}
                    Studio Pulse
                </span>
                <span className="text-[8px] text-gray-400 dark:text-gray-600 ml-auto whitespace-nowrap">{currentEvent.time}</span>
            </div>
            <p className="text-xs text-dark dark:text-white font-medium leading-tight truncate">
                {currentEvent.text}
            </p>
        </div>

      </div>
    </div>
  );
};

export default StudioPulse;