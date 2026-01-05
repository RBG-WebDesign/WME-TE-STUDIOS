\
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, Minus, Plus, Check, ChevronDown, Shield, TrendingUp, Users 
} from 'lucide-react';

/* WME+ | POWERED BY TALENT EARTH STUDIOS
  Interactive Executive Brief
  Design System: WME Institutional (Swiss Grotesk, Editorial, Tabular Nums)
  Version: 8.0 (Refined Typography: Weight Discipline, Tracking Control)
*/

// --- CONFIG & CONSTANTS ---

const CHAPTERS = [
  { id: 0, label: 'Thesis' },
  { id: 1, label: 'Gap' },
  { id: 2, label: 'Shift' },
  { id: 3, label: 'Model' },
  { id: 4, label: 'Standards' },
  { id: 5, label: 'Economics' },
  { id: 6, label: 'Cases' },
  { id: 7, label: 'Fit' },
  { id: 8, label: 'Coverage' },
  { id: 9, label: 'Rollout' },
  { id: 10, label: 'Contact' },
];

const ACCENT_COLOR = '#C5A059'; // Muted Gold for "WME" authority
const WME_RED = '#FA1200'; // WME Brand Red

// --- UTILS ---

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// --- COMPONENTS ---

const Navigation = ({ activeChapter, isDarkSection, onNav, onDownload, isGeneratingPdf }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const textColor = isDarkSection ? 'text-white' : 'text-black';
  const borderColor = isDarkSection ? 'border-white' : 'border-black';
  const indicatorActive = isDarkSection ? 'text-white border-b border-white' : 'text-black border-b border-black';
  const indicatorInactive = isDarkSection ? 'text-gray-500' : 'text-gray-400';
  const hoverColor = isDarkSection ? 'hover:text-gray-300' : 'hover:text-gray-600';

  return (
    <>
      <nav 
        data-pdf-hide 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 transition-colors duration-500 ${textColor}`}
      >
        <div className="flex flex-col z-50 cursor-pointer" onClick={() => onNav(0)}>
          {/* UPDATED LOGO: WME-tight, font-semibold, adjusted plus */}
          <span className="text-2xl leading-none wme-tight font-semibold">
            WME<span className="align-baseline" style={{ color: WME_RED, fontWeight: 600, fontSize: '1.05em' }}>+</span>
          </span>
          <span className={`text-[10px] uppercase wme-track mt-1 opacity-70 font-medium`}>
            Talent Earth Studios
          </span>
        </div>

        {/* Desktop Nav - Selected List */}
        <div className="hidden xl:flex space-x-6 text-[10px] font-semibold wme-track uppercase items-center">
          <span className="opacity-40 mr-4 border-r border-current pr-4 uppercase wme-track-sm">
            Now Viewing: {CHAPTERS.find(c => c.id === activeChapter)?.label}
          </span>
          {CHAPTERS.slice(1, 10).map((c) => (
            <button
              key={c.id}
              onClick={() => onNav(c.id)}
              className={`transition-opacity transition-colors ${activeChapter === c.id ? `border-b ${borderColor} opacity-100` : 'opacity-60'} ${hoverColor}`}
            >
              {c.label}
            </button>
          ))}
          <button
            onClick={onDownload}
            disabled={isGeneratingPdf}
            className={`border-b ${borderColor} pb-0.5 opacity-100 hover:opacity-50 transition-opacity flex items-center gap-2 ml-4`}
          >
            {isGeneratingPdf ? 'Exporting...' : 'Brief PDF'}
          </button>
        </div>

        <button className="xl:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="absolute inset-0 h-screen bg-black text-white flex flex-col items-center justify-center space-y-8 z-40">
            {CHAPTERS.map((c) => (
              <button
                key={c.id}
                onClick={() => { onNav(c.id); setIsOpen(false); }}
                className="text-2xl font-bold uppercase wme-track hover:opacity-60 transition-opacity"
              >
                {c.label}
              </button>
            ))}
            <button
              onClick={() => { onDownload(); setIsOpen(false); }}
               className="text-sm font-semibold uppercase wme-track border border-white px-6 py-3 mt-8"
            >
              Download Brief
            </button>
          </div>
        )}
      </nav>

      {/* Progress Indicator */}
      <div 
        data-pdf-hide
        className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-40"
      >
        {CHAPTERS.map((c) => (
          <button 
            key={c.id}
            onClick={() => onNav(c.id)}
            className={`text-[10px] font-semibold tabular-nums transition-all duration-300 text-right hover:opacity-100 ${activeChapter === c.id ? `${indicatorActive} opacity-100` : `${indicatorInactive} opacity-60`}`}
          >
            0{c.id}
          </button>
        ))}
      </div>
    </>
  );
};

// --- CHAPTER 0: THESIS ---
const ChapterColdOpen = ({ onNav }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section data-chapter="0" className="h-screen w-full relative bg-black text-white flex flex-col justify-center px-6 md:px-12 snap-start overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black opacity-80" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className={`transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="block text-[11px] font-semibold wme-track mb-8 text-gray-500 uppercase">EXECUTIVE BRIEF</span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold wme-tight leading-[1.05] mb-12 max-w-5xl text-white">
            We represent crews, shops, and technical teams.
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
            <p className="text-sm md:text-base font-normal text-gray-300 border-l pl-6 max-w-sm leading-relaxed" style={{ borderColor: ACCENT_COLOR }}>
              We extend representation into execution so the deal does not break in delivery.
            </p>

            <button 
              onClick={() => onNav(1)}
              className="group flex items-center space-x-4 text-xs font-bold wme-track uppercase hover:text-gray-300 transition-colors"
            >
              <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ChevronDown size={16} />
              </div>
              <span>Begin Brief</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CHAPTER 1: GAP ---
const ChapterGap = () => {
  return (
    <section data-chapter="1" className="h-screen w-full relative bg-white text-black flex flex-col justify-center px-6 md:px-12 snap-start">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          <span className="block text-[11px] font-semibold wme-track uppercase mb-6 text-gray-500">The Gap</span>
          <h2 className="text-4xl md:text-6xl font-semibold wme-tight leading-[1.05] mb-8">
            Above the line<br />
            already works this way.<br />
            <span className="text-gray-400">Below the line<br />doesn't.</span>
          </h2>
          <p className="text-lg font-normal text-gray-800 max-w-md leading-relaxed">
            Vendor lists do not protect schedule, scope, or accountability when a build goes sideways.
          </p>
        </div>

        <div className="bg-[#F4F4F4] p-8 md:p-12 h-full max-h-[600px] flex flex-col justify-center relative">
          <div className="space-y-12">
            <div className="opacity-40">
              <h4 className="text-sm font-bold uppercase mb-2">Above the Line</h4>
              <div className="h-1 w-full bg-black mb-1"></div>
              <p className="text-xs">Represented • Advised • Structured</p>
            </div>
            <div className="relative">
              <span className="absolute -top-6 left-0 text-[10px] font-bold uppercase wme-track" style={{ color: ACCENT_COLOR }}>Structural Gap</span>
              <h4 className="text-sm font-bold uppercase mb-2">Below the Line</h4>
              <div className="flex space-x-1 mb-1">
                {[1,2,3,4,5].map(i => <div key={i} className="h-1 w-1/5 bg-gray-300"></div>)}
              </div>
              <p className="text-xs text-gray-500">Transactional • Unprotected • Fragmented</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CHAPTER 2: SHIFT ---
const ChapterShift = () => {
  return (
    <section data-chapter="2" className="h-screen w-full relative bg-black text-white flex flex-col justify-center px-6 md:px-12 snap-start">
      <div className="max-w-6xl w-full mx-auto">
        <span className="block text-[11px] font-semibold wme-track uppercase mb-6 text-gray-500">The Context</span>
        <h2 className="text-4xl md:text-6xl font-semibold wme-tight leading-none mb-12">
          Projects are too complex<br />
          for a vendor list.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
             <p className="text-xl text-white leading-relaxed font-medium mb-6">
               A touring rig, a fabrication shop, an integrator, and a production lead, all coordinated under one accountable plan.
             </p>
             <p className="text-sm text-gray-400 max-w-xs leading-relaxed font-normal">
               Live experiences and permanent installs require custom units, not general contractors.
             </p>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center border-l border-gray-800 pl-8 lg:pl-16 space-y-8">
            {[
              { label: "Large Scale Touring", desc: "Automated rigs, video surfaces." },
              { label: "Fabrication", desc: "Temporary architectural builds." },
              { label: "Systems Integration", desc: "Fusing physical build with code." }
            ].map((m, idx) => (
               <div key={idx} className="group">
                 <h4 className="text-2xl md:text-3xl font-semibold wme-tight mb-1 text-white">{m.label}</h4>
                 <p className="text-sm text-gray-500 max-w-sm font-normal">{m.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CHAPTER 3: MODEL ---
const ChapterModel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: "SCOPE", desc: "Budget alignment, insurance, and contracting before staffing." },
    { title: "ASSEMBLE", desc: "Vetted teams based on technical fit and availability." },
    { title: "MANAGE", desc: "Operational oversight, change control, and milestone tracking." },
    { title: "DELIVER", desc: "Closeout, warranties, and post-mortem." }
  ];

  return (
    <section data-chapter="3" className="h-screen w-full relative bg-[#F4F4F4] text-black flex flex-col justify-center px-6 md:px-12 snap-start">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="block text-[11px] font-semibold wme-track uppercase mb-6 text-gray-500">The Model</span>
          <h2 className="text-5xl md:text-7xl font-semibold wme-tight leading-[0.9] mb-8">
            Access is limited.<br />
            Delivery is managed.
          </h2>
          <div className="p-6 bg-white border border-gray-200 inline-block shadow-sm mb-8">
             <p className="text-[10px] font-bold wme-track uppercase text-black mb-2">Mandate</p>
             <p className="text-sm text-gray-600 leading-relaxed font-normal">
               We do not staff one-off freelance gigs.<br/>
               Engagements typically run 6–18 weeks.
             </p>
          </div>

          {/* Role Split */}
          <div className="mt-4 border-l-2 pl-4" style={{ borderColor: ACCENT_COLOR }}>
            <p className="text-[10px] font-bold text-gray-900 mb-1">Role Definition</p>
            <p className="text-xs text-gray-600 max-w-sm leading-relaxed font-normal">
              WME originates and protects the relationship. Talent Earth operates delivery and staffing. Liability and accountability sit with the operator.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="border-b border-gray-300 py-6 cursor-pointer group"
              onClick={() => setActiveStep(idx)}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs tabular-nums font-semibold text-gray-400">0{idx + 1}</span>
                {activeStep === idx ? <Minus size={16}/> : <Plus size={16}/>}
              </div>
              <h3 className={`text-3xl md:text-4xl font-semibold wme-tight uppercase transition-colors ${activeStep === idx ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>
                {step.title}
              </h3>
              <div className={`overflow-hidden transition-all duration-300 ${activeStep === idx ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm text-gray-600 font-normal leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CHAPTER 4: STANDARDS ---
const ChapterStandards = () => {
  return (
    <section data-chapter="4" className="h-screen w-full relative bg-white text-black flex flex-col justify-center px-6 md:px-12 snap-start">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Col 1: Operating Standards */}
          <div>
            <span className="block text-[11px] font-semibold wme-track uppercase mb-8 text-gray-500">Operating Standards</span>
            <h2 className="text-4xl font-semibold wme-tight leading-tight mb-8">
              Risk management<br />
              built in.
            </h2>
            <ul className="space-y-6">
              {[
                { label: "Scope Lock", desc: "Requirements frozen before staffing begins." },
                { label: "Single Owner", desc: "One accountable lead for every unit." },
                { label: "Change Control", desc: "Formal impact assessment for scope creep." },
              ].map((item, idx) => (
                <li key={idx} className="border-l-2 border-black pl-6">
                  <h4 className="text-[11px] font-semibold uppercase wme-track mb-1">{item.label}</h4>
                  <p className="text-sm text-gray-600 font-normal">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Compliance Baseline */}
          <div className="bg-gray-50 p-8 flex flex-col justify-center border border-gray-100">
             <div className="flex items-center gap-2 mb-8 text-gray-500">
               <Shield size={16} />
               <span className="text-[10px] font-bold wme-track uppercase">Compliance Baseline</span>
             </div>
             <ul className="space-y-4">
                {[
                  { k: "Insurance", v: "$5M Aggregate / $2M Occurrence" },
                  { k: "Safety", v: "OSHA/ANSI Governance" },
                  { k: "Unions", v: "Jurisdiction & Payroll Managed" },
                  { k: "IP Rights", v: "Work-for-hire / Assignment" },
                  { k: "Security", v: "NDAs & Data Protection" }
                ].map((row, i) => (
                  <li key={i} className="flex justify-between border-b border-gray-200 pb-2 text-sm">
                    <span className="font-semibold text-gray-700">{row.k}</span>
                    <span className="text-gray-500 font-normal tabular-nums text-xs">{row.v}</span>
                  </li>
                ))}
             </ul>
          </div>

          {/* Col 3: Client Receives */}
          <div className="bg-[#F4F4F4] p-8 flex flex-col justify-center">
            <span className="block text-[11px] font-semibold wme-track uppercase mb-8 text-gray-500">Client Receives</span>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Scope Memo",
                "Staffing Plan",
                "Delivery Schedule",
                "Risk Register",
                "Closeout Package"
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-3 border border-gray-200 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                  <Check size={14} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CHAPTER 5: ECONOMICS ---
const ChapterEconomics = () => {
  return (
    <section data-chapter="5" className="h-screen w-full relative bg-black text-white flex flex-col justify-center px-6 md:px-12 snap-start">
      <div className="max-w-6xl w-full mx-auto">
        <span className="block text-[11px] font-semibold wme-track uppercase mb-6 text-gray-500">Commercial Model</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-4xl md:text-5xl font-semibold wme-tight leading-tight mb-8">
               Transparent,<br />
               Managed Structure.
             </h2>
             <p className="text-lg text-gray-400 mb-8 max-w-md font-normal">
               We operate on a Cost Plus Fixed Fee (CPFF) model, ensuring clear visibility into labor costs and operational margin.
             </p>
             <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase wme-track text-gray-500 mb-1">Structure</span>
                  <span className="text-xl font-bold text-white">Direct Costs + Management Fee</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase wme-track text-gray-500 mb-1">Management Fee</span>
                  <span className="text-xl font-bold tabular-nums" style={{ color: ACCENT_COLOR }}>15%</span>
                  <span className="text-xs text-gray-600 font-normal">Applied to labor and assets</span>
                </div>
             </div>
           </div>

           <div className="bg-gray-900 border border-gray-800 p-8">
              <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
                 <TrendingUp size={16} className="text-gray-500"/>
                 <span className="text-[10px] font-bold uppercase wme-track text-gray-400">Engagement Example</span>
              </div>

              <div className="space-y-4 mb-8">
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Duration</span>
                    <span className="tabular-nums font-semibold">12 Weeks</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Team Size</span>
                    <span className="tabular-nums font-semibold">18 Specialists</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Scope</span>
                    <span className="font-semibold">Fabrication & Install</span>
                 </div>
              </div>

              <div className="bg-black p-4 border border-gray-800 space-y-2">
                 <div className="flex justify-between text-xs text-gray-500">
                    <span>Labor & Materials</span>
                    <span className="tabular-nums">$850,000</span>
                 </div>
                 <div className="flex justify-between text-xs text-gray-500">
                    <span>Insurance & Logistics</span>
                    <span className="tabular-nums">$120,000</span>
                 </div>
                 <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-gray-800">
                    <span>Total Engagement</span>
                    <span className="tabular-nums">~$1.1M</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- CHAPTER 6: CASES ---
const ChapterCases = () => {
  const cases = [
    {
      title: "Arena Tour",
      stats: "14 Weeks • 40 Staff • Zero Downtime",
      desc: "Delivered automated rigging systems and video surfaces for a Tier-1 global run. Managed union payroll across 12 jurisdictions."
    },
    {
      title: "Flagship Retail",
      stats: "8 Weeks • Interactive • IP Assigned",
      desc: "Fabricated and installed a permanent LED volume with custom generative content. Full IP rights assigned to client upon closeout."
    },
    {
      title: "Broadcast Event",
      stats: "72 Hours • 45 Staff • Union Compliant",
      desc: "Rapid deployment of a full technical production unit for a live global broadcast. Integrated seamlessly with existing ATL creative."
    }
  ];

  return (
    <section data-chapter="6" className="h-screen w-full relative bg-white text-black flex flex-col justify-center px-6 md:px-12 snap-start">
      <div className="max-w-7xl w-full mx-auto">
        <span className="block text-[11px] font-semibold wme-track uppercase mb-12 text-gray-500">Proof of Capability</span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="border-t-2 border-black pt-6 group hover:bg-gray-50 transition-colors p-4 -mx-4">
              <span className="text-[10px] tabular-nums font-semibold text-gray-400 mb-2 block">0{i+1}</span>
              <h3 className="text-2xl font-semibold wme-tight mb-2">{c.title}</h3>
              <p className="text-[10px] uppercase wme-track font-bold mb-4" style={{ color: ACCENT_COLOR }}>
                {c.stats}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CHAPTER 7: FIT ---
const ChapterFit = () => {
  return (
    <section data-chapter="7" className="h-screen w-full relative bg-black text-white flex flex-col justify-center px-6 md:px-12 snap-start">
      <div className="max-w-6xl w-full mx-auto">
        <span className="block text-[11px] font-semibold wme-track uppercase mb-6 text-gray-500">Why this works at WME</span>
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-800 pb-12 mb-12">
          <h2 className="text-5xl md:text-7xl font-semibold wme-tight leading-none">
            Complete the<br />Talent Stack.
          </h2>
          <p className="text-sm text-gray-400 max-w-xs text-right mt-4 md:mt-0 font-normal">
            Protects the principal’s brand by making delivery predictable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 min-h-[300px]">
           <div>
             <h4 className="text-[11px] font-bold uppercase wme-track text-gray-500 mb-8">
               Model Comparison
             </h4>
             <div className="grid grid-cols-2 gap-12">
               <div>
                 <span className="block text-[10px] uppercase wme-track text-gray-500 mb-4 border-b border-gray-800 pb-2">Agency</span>
                 <ul className="space-y-4 text-lg font-light text-gray-300">
                    <li>Originates deal</li>
                    <li>Creative vision</li>
                    <li>Advocacy</li>
                 </ul>
               </div>
               <div>
                 <span className="block text-[10px] uppercase wme-track text-white mb-4 border-b border-white pb-2">WME+</span>
                 <ul className="space-y-4 text-lg font-bold text-white">
                    <li>Delivers build</li>
                    <li>Technical execution</li>
                    <li>Standards</li>
                 </ul>
               </div>
             </div>
           </div>

           <div className="bg-gray-900/30 p-8 flex items-center justify-center border border-gray-800 relative overflow-hidden">
              <div className="relative z-10 w-full max-w-xs space-y-1">
                 <div className="p-4 border border-gray-700 text-center text-[10px] font-bold uppercase wme-track text-gray-500 bg-transparent">
                    Deal
                 </div>
                 <div className="p-4 border border-white text-center text-[10px] font-bold uppercase wme-track text-black bg-white">
                    Team
                 </div>
                 <div className="p-4 border border-gray-600 text-center text-[10px] font-bold uppercase wme-track text-white bg-gray-800">
                    Delivery
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- CHAPTER 8: COVERAGE ---
const ChapterCoverage = () => {
  const categories = [
    { title: "Fabrication", sub: "Sets, props" },
    { title: "Systems & Interactive", sub: "XR, Realtime, Robotics" },
    { title: "Production", sub: "Management" },
    { title: "Touring", sub: "Rigging, automation" },
    { title: "Experiential", sub: "Activations" },
    { title: "Video & Lighting", sub: "Show Control" },
    { title: "Installation", sub: "Museum, retail" },
    { title: "Engineering", sub: "Structural" }
  ];

  return (
    <section data-chapter="8" className="h-screen w-full relative bg-white text-black flex flex-col justify-center px-6 md:px-12 snap-start overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <span className="block text-[11px] font-semibold wme-track uppercase mb-6 text-gray-500">Coverage</span>
        <h2 className="text-5xl font-semibold wme-tight mb-12">
          What we cover.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="aspect-[4/3] bg-[#F4F4F4] p-6 flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-300 group cursor-default">
              <span className="text-[10px] tabular-nums font-semibold opacity-50">0{idx + 1}</span>
              <div>
                <h3 className="text-base font-semibold tracking-tight mb-1">{cat.title}</h3>
                <p className="text-[10px] uppercase wme-track opacity-60">{cat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CHAPTER 9: ROLLOUT ---
const ChapterRollout = () => {
  const [activePhase, setActivePhase] = useState(null);
  const phases = [
    { title: "Phase 1: Pilot", detail: "3 projects. 1 market. Capped budget band. Defined KPIs." },
    { title: "Phase 2: Roster", detail: "Formal intake. Insurance alignment. Master agreements." },
    { title: "Phase 3: Scale", detail: "Priority markets. Category expansion." }
  ];

  return (
    <section data-chapter="9" className="h-screen w-full relative bg-[#F4F4F4] text-black flex flex-col justify-center px-6 md:px-12 snap-start">
      <div className="max-w-5xl w-full mx-auto">
        <span className="block text-[11px] font-semibold wme-track uppercase mb-6 text-gray-500">Next Steps</span>
        <h2 className="text-6xl md:text-8xl font-semibold wme-tight mb-16">
          Rollout.
        </h2>

        <div className="space-y-4">
          {phases.map((phase, idx) => (
            <div 
              key={idx}
              onClick={() => setActivePhase(idx)}
              className={`p-8 border border-gray-300 transition-all cursor-pointer ${activePhase === idx ? 'bg-black text-white shadow-xl scale-[1.01]' : 'bg-white hover:border-black'}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">{phase.title}</h3>
                {activePhase === idx && <Check size={20} />}
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${activePhase === idx ? 'max-h-20 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm font-light opacity-80">{phase.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pilot KPIs */}
        <div className="mt-12 grid grid-cols-3 gap-4 opacity-50">
          <div className="text-xs">
             <span className="block font-bold">On-Time Rate</span>
             <span className="tabular-nums">Target: 98%</span>
          </div>
          <div className="text-xs">
             <span className="block font-bold">Change Order Rate</span>
             <span className="tabular-nums">Target: &lt;5%</span>
          </div>
          <div className="text-xs">
             <span className="block font-bold">Budget Variance</span>
             <span className="tabular-nums">Target: &lt;3%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CHAPTER 10: CONTACT ---
const ChapterContact = ({ onDownload, isGeneratingPdf }) => (
  <section data-chapter="10" className="h-screen w-full relative bg-black text-white flex flex-col justify-center px-6 md:px-12 snap-start">
    <div className="max-w-4xl w-full mx-auto text-center">
      {/* UPDATED LOGO: WME-tight, font-semibold */}
      <span 
        className="block text-2xl leading-none wme-tight font-semibold mb-8 text-gray-500" 
      >
        WME<span style={{ color: WME_RED, fontWeight: 600, fontSize: '1.05em' }}>+</span>
      </span>

      <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold wme-tight leading-none mb-12">
        Start.
      </h2>

      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <button className="px-8 py-4 bg-white text-black font-bold uppercase wme-track hover:bg-gray-200 transition-colors">
          Internal Walkthrough
        </button>
        <button 
          onClick={onDownload}
          disabled={isGeneratingPdf}
          className="px-8 py-4 border border-white text-white font-bold uppercase wme-track hover:bg-white/10 transition-colors"
        >
          {isGeneratingPdf ? 'Generating...' : 'Download Brief'}
        </button>
      </div>

      <div className="absolute bottom-12 left-0 right-0 text-center">
        <p className="text-[10px] text-gray-600 uppercase wme-track">
          Pilot selection meeting available.
        </p>
      </div>
    </div>
  </section>
);

// --- MAIN APP ---
const App = () => {
  const containerRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Black background chapters: 0, 2, 5, 7, 10
  const isDarkSection = [0, 2, 5, 7, 10].includes(activeChapter);

  useEffect(() => {
    // Load Fonts and Scripts (Inter from Google Fonts)
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        const next = Math.min(activeChapter + 1, CHAPTERS.length - 1);
        scrollToChapter(next);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        const prev = Math.max(activeChapter - 1, 0);
        scrollToChapter(prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeChapter]);

  const scrollToChapter = (id) => {
    const container = containerRef.current;
    const el = container?.querySelector(`[data-chapter="${id}"]`);
    if (!container || !el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const downloadDeckPdf = async () => {
    if (!window.html2canvas || !window.jspdf) {
      alert("PDF libraries are initializing. Please try again in a moment.");
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    setIsGeneratingPdf(true);
    await new Promise(r => setTimeout(r, 100));

    try {
      const { jsPDF } = window.jspdf;
      const W = 1920;
      const H = 1080;
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [W, H] });
      // Exclude Contact page (id: 10) from PDF export
      const ids = CHAPTERS.filter(c => c.id !== 10).map(c => c.id);

      for (let i = 0; i < ids.length; i++) {
        const el = container.querySelector(`[data-chapter="${ids[i]}"]`);
        if (!el) continue;

        const canvas = await window.html2canvas(el, {
          scale: 1.5, 
          useCORS: true,
          backgroundColor: [0, 2, 5, 7, 10].includes(ids[i]) ? '#000000' : '#FFFFFF',
          width: W,
          height: H,
          windowWidth: W,
          windowHeight: H,
          onclone: (clonedDoc) => {
             clonedDoc.querySelectorAll('[data-pdf-hide]').forEach(el => el.style.display = 'none');

             const section = clonedDoc.querySelector(`[data-chapter="${ids[i]}"]`);
             if (section) {
                section.style.width = '1920px';
                section.style.height = '1080px';
                section.style.overflow = 'hidden';
                section.style.padding = '0';
                section.style.display = 'flex'; 
             }

             const style = clonedDoc.createElement('style');
             style.innerHTML = '* { transition: none !important; animation: none !important; }';
             clonedDoc.head.appendChild(style);
          }
        });

        const img = canvas.toDataURL('image/jpeg', 0.9);
        if (i > 0) pdf.addPage([W, H], 'landscape');
        pdf.addImage(img, 'JPEG', 0, 0, W, H);
      }

      pdf.save('WME_Operational_Brief.pdf');
    } catch (e) {
      console.error("PDF Generation failed", e);
      alert("Could not generate PDF. Please try again.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const sections = Array.from(container.querySelectorAll('[data-chapter]'));

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))[0];

        if (visible) {
          setActiveChapter(Number(visible.target.getAttribute('data-chapter')));
        }
      },
      { 
        root: container, 
        threshold: 0.6, 
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-proximity wme-sans antialiased selection:bg-gray-300 selection:text-black no-scrollbar"
    >
      <Navigation 
        activeChapter={activeChapter} 
        isDarkSection={isDarkSection} 
        onNav={scrollToChapter}
        onDownload={downloadDeckPdf}
        isGeneratingPdf={isGeneratingPdf}
      />

      <ChapterColdOpen onNav={scrollToChapter} />
      <ChapterGap />
      <ChapterShift />
      <ChapterModel />
      <ChapterStandards />
      <ChapterEconomics />
      <ChapterCases />
      <ChapterFit />
      <ChapterCoverage />
      <ChapterRollout />
      <ChapterContact onDownload={downloadDeckPdf} isGeneratingPdf={isGeneratingPdf} />

      <style>{`
        :root {
          --wme-font: 'Inter', system-ui, -apple-system, sans-serif;
        }
        .wme-sans { font-family: var(--wme-font); }
        .wme-tight { letter-spacing: -0.03em; }
        .wme-track { letter-spacing: 0.12em; }
        .wme-track-sm { letter-spacing: 0.08em; }
        .tabular-nums { font-variant-numeric: tabular-nums; }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
