import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, ArrowRight, ScanLine, FileImage, Lock } from 'lucide-react';
import Button from './Button';

const FreeAudit: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'UPLOADING' | 'COMPLETE'>('IDLE');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !email) return;
    
    setStatus('UPLOADING');
    setTimeout(() => {
        setStatus('COMPLETE');
    }, 2000);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0B0C10] border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
        {/* Background Tech Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_26%,transparent_27%,transparent_74%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_76%,transparent_77%,transparent)] dark:bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_76%,transparent_77%,transparent)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                {/* Text Side */}
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon/10 border border-neon/20 rounded-full mb-6">
                        <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
                        <span className="text-neon text-[10px] font-bold uppercase tracking-widest">The Trial Protocol</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-dark dark:text-white mb-6">
                        Skeptical? <br/>
                        <span className="text-gray-400 dark:text-gray-500">Test The Engine.</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-md">
                        We are so confident in our pipeline that we will process <strong>one single test photo</strong> for you, free of charge (watermarked). See the transformation on your own inventory.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        {[
                            "Secure 256-bit Encrypted Upload",
                            "Watermarked High-Res Return",
                            "Delivered in < 4 Hours",
                            "No Credit Card Required"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-neon" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Upload Side */}
                <div className="lg:w-1/2 w-full">
                    {status === 'COMPLETE' ? (
                         <div className="bg-white dark:bg-[#111318] border border-neon/50 rounded-sm p-12 text-center relative overflow-hidden shadow-[0_0_50px_rgba(204,243,129,0.1)]">
                            <div className="w-20 h-20 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10 text-neon" />
                            </div>
                            <h3 className="text-2xl font-bold text-dark dark:text-white mb-2">Asset Ingestion Complete</h3>
                            <p className="text-gray-500 text-sm mb-6">Your test photo is being processed. Check your inbox at <span className="text-dark dark:text-white">{email}</span> in approximately 4 hours.</p>
                            <button onClick={() => {setStatus('IDLE'); setFile(null); setEmail('');}} className="text-xs font-bold uppercase tracking-widest text-neon hover:text-dark dark:hover:text-white transition-colors">Upload Another</button>
                         </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-[#111318] border border-gray-200 dark:border-white/10 rounded-sm p-8 md:p-10 relative group hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 shadow-2xl dark:shadow-none">
                            
                            {/* Drag Drop Zone */}
                            <div 
                                className={`border-2 border-dashed rounded-sm h-64 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer relative overflow-hidden mb-6 ${dragActive ? 'border-neon bg-neon/5' : 'border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0B0C10] hover:bg-gray-100 dark:hover:bg-[#15171e]'}`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                onClick={() => inputRef.current?.click()}
                            >
                                <input 
                                    ref={inputRef}
                                    type="file" 
                                    className="hidden" 
                                    accept="image/*"
                                    onChange={handleChange}
                                />
                                
                                {file ? (
                                    <div className="flex flex-col items-center z-10">
                                        <FileImage className="w-10 h-10 text-neon mb-4" />
                                        <span className="text-dark dark:text-white font-bold text-sm">{file.name}</span>
                                        <span className="text-gray-500 text-xs mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                        <span className="text-neon text-[10px] uppercase tracking-widest mt-4 font-bold">Click to change</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center z-10 text-center px-4">
                                        <UploadCloud className="w-10 h-10 text-gray-400 mb-4 group-hover:text-dark dark:group-hover:text-white transition-colors" />
                                        <span className="text-dark dark:text-white font-bold text-sm mb-2">Drag & Drop Raw Photo</span>
                                        <span className="text-gray-500 text-xs">or click to browse filesystem</span>
                                        <span className="text-gray-400 dark:text-gray-600 text-[10px] uppercase tracking-widest mt-4">Max 50MB • JPG/PNG/RAW</span>
                                    </div>
                                )}

                                {/* Scanning Animation */}
                                {status === 'UPLOADING' && (
                                    <div className="absolute inset-0 bg-white/90 dark:bg-black/80 z-20 flex flex-col items-center justify-center">
                                        <ScanLine className="w-10 h-10 text-neon animate-bounce" />
                                        <span className="text-neon text-xs font-bold uppercase tracking-widest mt-4 animate-pulse">Encrypting & Uploading...</span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1 block">Work Email</label>
                                    <input 
                                        type="email" 
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="broker@agency.com"
                                        className="w-full bg-gray-50 dark:bg-[#0B0C10] border-b border-gray-200 dark:border-white/20 p-3 text-dark dark:text-white focus:outline-none focus:border-neon transition-colors text-sm"
                                    />
                                </div>
                                
                                <Button type="submit" className="w-full" disabled={!file || !email || status === 'UPLOADING'}>
                                    {status === 'UPLOADING' ? 'Processing...' : 'Generate Free Test Photo'}
                                </Button>
                            </div>

                            <div className="absolute top-4 right-4 text-gray-400 dark:text-gray-600">
                                <Lock className="w-4 h-4 opacity-50" />
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default FreeAudit;