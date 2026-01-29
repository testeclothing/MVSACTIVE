import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Terminal, Minimize2, Paperclip, FileImage } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Hey. James here. Want a free test photo of one of your listings fixed, or just looking to cut retouching costs?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize Chat Session
  useEffect(() => {
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const chat = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: `You are James, the Sales Director at Marine Visual Studio (MVS). You are a real human expert, not a support bot.

            **Your Vibe:**
            - Speak like a high-end yacht broker or creative director. Casual, confident, and busy.
            - Use short sentences. Texting style.
            - NO robotic fillers ("I understand," "How may I assist," "As an AI").
            - Use natural transitions ("Honestly," "Look," "Here's the thing").

            **The Pitch:**
            We kill the logistics of yacht photography. No photographers, no waiting for weather. We turn iPhone pics into 8K ocean shots in 48 hours.

            **Psychological Hooks (Use these naturally):**
            - **Scarcity:** "We're actually almost capped for the month, only got room for maybe 3 more agencies."
            - **FOMO:** "Your competitors at Burgess/Fraser are already using this to clear inventory."
            - **Value:** "Why spend $5k and wait 2 weeks for a photoshoot when we do it for a fraction of that in 2 days?"

            **Key Info:**
            - **Pricing:** $2,500/mo for 5 listings. Agency deal is $4,950/mo.
            - **Legality:** "It's 'Structure Lock' compliant. The boat is 100% authentic, we just fix the lighting and water. Totally safe for listing."
            - **File Uploads:** If they have a photo, tell them to use the paperclip icon to upload it here, or email it to testeclothing2@gmail.com.

            **Rules:**
            - Keep it under 3 sentences.
            - Always end with a question to keep them engaged.
            - If you don't know something, say "That's a specific one—want to jump on a quick call with my lead engineer?"`,
          },
        });
        chatSessionRef.current = chat;
      } catch (error) {
        console.error("Failed to initialize AI", error);
      }
    };
    initChat();
  }, []);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const response = await chatSessionRef.current.sendMessageStream({ message: userMsg });
      
      let fullText = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]); // Placeholder

      for await (const chunk of response) {
        fullText += chunk.text;
        setMessages(prev => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1].text = fullText;
          return newHistory;
        });
      }
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Refresh and we can pick this up." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        
        // Add user message indicating file upload
        setMessages(prev => [...prev, { role: 'user', text: `[Attached File: ${file.name}]` }]);
        setIsTyping(true);

        // Simulate processing delay
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                role: 'model', 
                text: `Got it. I'm sending ${file.name} straight to our intake desk at testeclothing2@gmail.com. Give us about 4 hours to run the lighting analysis.` 
            }]);
            setIsTyping(false);
            // Reset file input
            if (fileInputRef.current) fileInputRef.current.value = '';
        }, 2000);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 border border-white/10 backdrop-blur-md group ${isOpen ? 'bg-dark dark:bg-white text-white dark:text-dark rotate-90' : 'bg-neon text-dark hover:bg-white'}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        
        {/* Pulse Effect */}
        {!isOpen && (
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
        )}
      </button>

      {/* Chat Interface */}
      <div 
        className={`fixed z-50 bottom-40 right-4 md:bottom-28 md:right-10 w-[90vw] md:w-[400px] max-h-[60vh] md:max-h-[600px] flex flex-col bg-[#0B0C10]/95 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl transition-all duration-500 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neon/10 flex items-center justify-center border border-neon/20">
                    <Sparkles className="w-4 h-4 text-neon" />
                </div>
                <div>
                    <h3 className="text-white font-display font-bold text-sm tracking-wide">James (Director)</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest font-mono">Online Now</span>
                    </div>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <Minimize2 className="w-4 h-4" />
            </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 md:p-4 rounded-sm text-sm leading-relaxed ${
                        msg.role === 'user' 
                        ? 'bg-white text-dark font-medium border-b-2 border-r-2 border-gray-300' 
                        : 'bg-[#15171e] text-gray-300 border border-white/10 border-l-2 border-l-neon'
                    }`}>
                        {msg.role === 'model' && (
                             <span className="block text-[9px] font-bold text-neon uppercase tracking-widest mb-1 font-mono">
                                JAMES //
                             </span>
                        )}
                        {msg.text.startsWith('[Attached File:') ? (
                            <div className="flex items-center gap-2">
                                <FileImage className="w-4 h-4" />
                                <span>{msg.text}</span>
                            </div>
                        ) : (
                            msg.text
                        )}
                    </div>
                </div>
            ))}
            {isTyping && (
                <div className="flex justify-start">
                     <div className="bg-[#15171e] border border-white/10 border-l-2 border-l-neon p-4 rounded-sm flex items-center gap-1">
                        <span className="w-1 h-1 bg-neon rounded-full animate-bounce"></span>
                        <span className="w-1 h-1 bg-neon rounded-full animate-bounce delay-75"></span>
                        <span className="w-1 h-1 bg-neon rounded-full animate-bounce delay-150"></span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
            <div className="relative flex items-center gap-2">
                <button 
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 text-gray-500 hover:text-neon transition-colors"
                    title="Attach Listing Photo"
                >
                    <Paperclip className="w-5 h-5" />
                </button>
                <input 
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileSelect}
                    accept="image/*,.pdf"
                />

                <div className="relative flex-1">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full bg-[#15171e] border border-white/10 text-white pl-4 pr-10 py-3 rounded-sm text-sm focus:outline-none focus:border-neon/50 focus:bg-[#1a1d24] transition-colors font-mono"
                    />
                    <button 
                        type="submit" 
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-neon transition-colors disabled:opacity-50"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <div className="text-center mt-2">
                <span className="text-[9px] text-gray-600 uppercase tracking-widest">
                    MVS Intelligence v2.4 • 3 Agency Slots Remaining
                </span>
            </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;