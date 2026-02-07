
import React, { useState, useEffect } from 'react';
import { Slide, RevealItem, MirrorCase, MirrorCaseStep, MirrorCaseOption } from '../types';
import * as LucideIcons from 'lucide-react';
import { useLessonStore } from '../store/useLessonStore';

interface SlideRendererProps {
  slide: Slide;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  if (!slide) return null;

  const { markSlideComplete, currentSlideIndex, resetLesson, goToSlide } = useLessonStore();
  
  // States for general interactions
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<RevealItem | null>(null);
  const [activeTab, setActiveTab] = useState(0); 
  const [activeHotspot, setActiveHotspot] = useState<RevealItem | null>(null);
  const [dragAssignments, setDragAssignments] = useState<Record<string, string>>({}); 
  const [isAppClosing, setIsAppClosing] = useState(false);

  // States for Mirror Case Simulator
  const [caseIdx, setCaseIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [selectedCaseOpt, setSelectedCaseOpt] = useState<MirrorCaseOption | null>(null);
  const [justification, setJustification] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [showCaseSummary, setShowCaseSummary] = useState(false);
  const [showFinalResults, setShowFinalResults] = useState(false);

  // States for Internal Switch Activity
  const [switchStep, setSwitchStep] = useState(0);
  const [switchChoice, setSwitchChoice] = useState<'deficit' | 'expression' | null>(null);
  const [showSwitchSuccess, setShowSwitchSuccess] = useState(false);

  useEffect(() => {
    // Reset all internal states when slide changes
    const itemsCount = slide.interaction?.revealItems?.length || 0;
    if (slide.type === 'pyramid-reveal' && itemsCount > 0) {
      setActiveTab(itemsCount - 1);
    } else {
      setActiveTab(0);
    }
    
    setActiveHotspot(null);
    setDragAssignments({});
    setSelectedOption(null);
    setExpandedItem(null);
    setIsAppClosing(false);
    
    // Reset Simulator
    setCaseIdx(0);
    setStepIdx(0);
    setSelectedCaseOpt(null);
    setJustification("");
    setTotalScore(0);
    setShowCaseSummary(false);
    setShowFinalResults(false);

    // Reset Internal Switch
    setSwitchStep(0);
    setSwitchChoice(null);
    setShowSwitchSuccess(false);
  }, [currentSlideIndex, slide.id, slide.type, slide.interaction?.revealItems?.length]);

  const renderIcon = (iconName: string, size = 24) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) return <IconComponent size={size} />;
    return <LucideIcons.Info size={size} />;
  };

  const handleCaseOptionSelect = (opt: MirrorCaseOption) => {
    setSelectedCaseOpt(opt);
  };

  const handleNextStep = () => {
    if (!selectedCaseOpt) return;
    setTotalScore(prev => prev + selectedCaseOpt.points);
    const currentCase = slide.mirrorCases![caseIdx];
    if (stepIdx < currentCase.steps.length - 1) {
      setStepIdx(stepIdx + 1);
      setSelectedCaseOpt(null);
      setJustification("");
    } else {
      setShowCaseSummary(true);
    }
  };

  const handleNextCase = () => {
    if (caseIdx < (slide.mirrorCases?.length || 0) - 1) {
      setCaseIdx(caseIdx + 1);
      setStepIdx(0);
      setSelectedCaseOpt(null);
      setJustification("");
      setShowCaseSummary(false);
    } else {
      setShowFinalResults(true);
      markSlideComplete(currentSlideIndex);
    }
  };

  const handleFinishSwitch = () => {
    setShowSwitchSuccess(true);
    markSlideComplete(currentSlideIndex);
  };

  const handleAbandon = () => {
    setIsAppClosing(true);
  };

  if (isAppClosing) {
    return (
      <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
         <div className="w-24 h-24 bg-red-600 rounded-full animate-ping opacity-25 absolute" />
         <p className="text-white font-black uppercase tracking-[0.8em] animate-pulse">Sesión Finalizada</p>
      </div>
    );
  }

  // Activity 8: Mirror Case Simulator UI
  if (slide.type === 'mirror-case-simulator' && slide.mirrorCases) {
    if (showFinalResults) {
      return (
        <div className="h-full w-full bg-[#0a0d14] flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-4xl bg-[#1a1a1a] rounded-[3rem] p-12 lg:p-20 text-center space-y-12 animate-in zoom-in-95 duration-700">
             <div className="inline-block p-8 bg-green-600 rounded-full shadow-[0_0_50px_rgba(22,163,74,0.4)]">
                {renderIcon('Award', 64)}
             </div>
             <div className="space-y-4">
                <h2 className="text-5xl font-black uppercase text-white tracking-tighter">Resultados del Laboratorio</h2>
                <p className="text-2xl font-bold text-green-500">Puntaje Total: {totalScore} / 24</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                   <h4 className="text-sm font-black uppercase text-red-500 mb-4 tracking-widest">Recomendación</h4>
                   <p className="text-slate-300 leading-relaxed">Has analizado con éxito las raíces de la motivación humana. Sigue aplicando el marco de las 5 Proposiciones.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                   <h4 className="text-sm font-black uppercase text-red-500 mb-4 tracking-widest">Próximo Paso</h4>
                   <p className="text-slate-300 leading-relaxed">Presta atención a cómo las creencias erradas dirigen tus metas actuales.</p>
                </div>
             </div>
             <button onClick={() => markSlideComplete(currentSlideIndex)} className="px-12 py-5 bg-red-600 rounded-full font-black uppercase text-xs tracking-[0.3em] hover:scale-105 transition-all">
                Continuar Lección
             </button>
          </div>
        </div>
      );
    }

    if (showCaseSummary) {
      const currentCase = slide.mirrorCases[caseIdx];
      return (
        <div className="h-full w-full bg-[#0a0d14] flex items-center justify-center p-6 lg:p-12 overflow-y-auto custom-scrollbar">
          <div className="w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="bg-red-600 p-12 text-white">
                <h3 className="text-sm font-bold uppercase tracking-[0.4em] mb-2 opacity-80">Resumen del Diagnóstico</h3>
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">{currentCase.title}</h2>
             </div>
             <div className="p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                   <div>
                      <h4 className="text-[10px] font-black uppercase text-red-600 tracking-widest mb-1">Necesidad Detectada</h4>
                      <p className="text-lg font-bold text-slate-800">{currentCase.summary.need}</p>
                   </div>
                   <div>
                      <h4 className="text-[10px] font-black uppercase text-red-600 tracking-widest mb-1">Creencia Errada</h4>
                      <p className="text-slate-600 italic leading-relaxed">"{currentCase.summary.belief}"</p>
                   </div>
                   <div>
                      <h4 className="text-[10px] font-black uppercase text-red-600 tracking-widest mb-1">Conducta Resultante</h4>
                      <p className="text-slate-600">{currentCase.summary.conduct}</p>
                   </div>
                </div>
                <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-center gap-6">
                   <div className="flex items-center gap-4 text-green-600">
                      {renderIcon('CheckCircle', 24)}
                      <h4 className="text-lg font-black uppercase tracking-tight">Alternativa Cristiana</h4>
                   </div>
                   <p className="text-slate-700 font-medium leading-relaxed italic border-l-4 border-green-600 pl-6">
                      {currentCase.summary.alternative}
                   </p>
                </div>
             </div>
             <div className="p-10 bg-slate-50 flex justify-center border-t border-slate-100">
                <button onClick={handleNextCase} className="px-12 py-5 bg-black rounded-full text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-red-600 transition-all shadow-xl">
                   {caseIdx < slide.mirrorCases.length - 1 ? 'Siguiente Caso' : 'Ver Resultados Finales'}
                </button>
             </div>
          </div>
        </div>
      );
    }

    const currentCase = slide.mirrorCases[caseIdx];
    const currentStep = currentCase.steps[stepIdx];

    return (
      <div className="h-full w-full bg-slate-100 flex items-center justify-center p-4 lg:p-10 overflow-y-auto custom-scrollbar">
        <div className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] animate-in slide-in-from-bottom-12 duration-700">
          <div className="lg:w-80 bg-slate-900 p-10 flex flex-col text-white">
            <div className="flex-1 space-y-8">
               <div className="space-y-2">
                  <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em]">Laboratorio</p>
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">Casos Espejo</h3>
               </div>
               <div className="space-y-2">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-red-600 transition-all duration-500" style={{ width: `${((stepIdx + 1) / currentCase.steps.length) * 100}%` }} />
                  </div>
                  <p className="text-[10px] font-bold uppercase opacity-40">Paso {stepIdx + 1} de {currentCase.steps.length}</p>
               </div>
               <div className="pt-8 border-t border-white/5 space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Puntaje</p>
                  <p className="text-4xl font-black text-red-500">{totalScore}</p>
               </div>
            </div>
          </div>
          <div className="flex-1 p-10 lg:p-16 flex flex-col gap-8 overflow-y-auto custom-scrollbar">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 italic text-lg text-slate-700 leading-relaxed">
               "{currentStep.context}"
            </div>
            <h4 className="text-2xl font-black text-slate-900 uppercase">{currentStep.question}</h4>
            <div className="grid grid-cols-1 gap-3">
               {currentStep.options.map((opt) => (
                  <button key={opt.id} onClick={() => handleCaseOptionSelect(opt)} className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${selectedCaseOpt?.id === opt.id ? 'border-red-600 bg-red-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                    <span className="text-lg font-bold text-slate-600">{opt.text}</span>
                  </button>
               ))}
            </div>
            {selectedCaseOpt && (
               <div className="space-y-6 animate-in slide-in-from-top-4 duration-500">
                  <div className={`p-6 rounded-2xl border ${selectedCaseOpt.points === 2 ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                     <p className="text-slate-700 leading-relaxed font-medium">{selectedCaseOpt.feedback}</p>
                  </div>
                  <div className="flex justify-end">
                     <button onClick={handleNextStep} className="px-12 py-5 bg-black rounded-full text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-red-600 transition-all shadow-xl">Continuar</button>
                  </div>
               </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Activity 12: Internal Switch UI
  if (slide.type === 'internal-switch' && slide.switchData) {
    const data = slide.switchData;
    return (
      <div className="h-full w-full bg-[#0c0d12] flex flex-col items-center justify-center p-8 overflow-y-auto custom-scrollbar">
        <div className="w-full max-w-4xl space-y-12">
           <div className="flex gap-2 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              {[0, 1, 2, 3].map((s) => (
                <div key={s} className={`h-full flex-1 transition-all duration-500 ${switchStep >= s ? 'bg-red-600' : 'bg-white/10'}`} />
              ))}
           </div>

           {switchStep === 0 && (
             <div className="space-y-10 text-center animate-in zoom-in-95 duration-700">
                <div className="space-y-4">
                   <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white">1. Recuperación Silenciosa</h2>
                   <p className="text-xl text-red-500 font-bold uppercase tracking-[0.2em]">Cierra los apuntes y recuerda el flujo:</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {['Necesidad', 'Creencia', 'Meta', 'Conducta'].map((item, idx) => (
                     <div key={item} className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-red-600/50 transition-all">
                        <span className="block text-4xl font-black text-white/5 group-hover:text-red-600 transition-colors mb-4">{idx + 1}</span>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 blur-sm hover:blur-none transition-all cursor-help">{item}</p>
                     </div>
                   ))}
                </div>
                <button onClick={() => setSwitchStep(1)} className="px-12 py-5 bg-white text-black rounded-full font-black uppercase text-xs tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all">Estoy listo</button>
             </div>
           )}

           {switchStep === 1 && (
             <div className="space-y-12 text-center animate-in fade-in duration-700">
                <div className="space-y-4">
                   <p className="text-red-500 font-bold uppercase tracking-widest text-sm">Escenario de Decisión</p>
                   <h3 className="text-3xl lg:text-5xl font-black text-white leading-tight">"{data.situation}"</h3>
                </div>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
                   <button onClick={() => { setSwitchChoice('deficit'); setSwitchStep(2); }} className="flex-1 p-10 bg-white/5 border-2 border-transparent hover:border-red-600 rounded-[3rem] text-left transition-all group">
                      <div className="w-16 h-16 bg-red-600 rounded-2xl mb-6 flex items-center justify-center text-white shadow-[0_0_30px_rgba(220,38,38,0.4)]">{renderIcon('ZapOff', 32)}</div>
                      <h4 className="text-2xl font-black text-white uppercase mb-2">Opción A: Déficit</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{data.options.deficit.text}</p>
                   </button>
                   <button onClick={() => { setSwitchChoice('expression'); setSwitchStep(2); }} className="flex-1 p-10 bg-white/5 border-2 border-transparent hover:border-green-600 rounded-[3rem] text-left transition-all group">
                      <div className="w-16 h-16 bg-green-600 rounded-2xl mb-6 flex items-center justify-center text-white shadow-[0_0_30px_rgba(22,163,74,0.4)]">{renderIcon('Zap', 32)}</div>
                      <h4 className="text-2xl font-black text-white uppercase mb-2">Opción B: Expresión</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{data.options.expression.text}</p>
                   </button>
                </div>
             </div>
           )}

           {switchStep === 2 && switchChoice && (
             <div className="space-y-12 animate-in zoom-in-95 duration-500">
                <div className={`p-12 rounded-[4rem] border-2 shadow-2xl ${switchChoice === 'deficit' ? 'bg-red-600/10 border-red-600/30' : 'bg-green-600/10 border-green-600/30'}`}>
                   <div className="flex flex-col md:flex-row gap-10 items-center">
                      <div className={`w-32 h-32 rounded-[2.5rem] flex items-center justify-center text-white shrink-0 ${switchChoice === 'deficit' ? 'bg-red-600' : 'bg-green-600'}`}>
                         {renderIcon(switchChoice === 'deficit' ? 'AlertCircle' : 'CheckCircle2', 64)}
                      </div>
                      <div className="space-y-6">
                         <h4 className={`text-4xl font-black uppercase tracking-tighter ${switchChoice === 'deficit' ? 'text-red-500' : 'text-green-500'}`}>{switchChoice === 'deficit' ? 'Déficit' : 'Expresión'}</h4>
                         <p className="text-2xl text-white font-light leading-relaxed italic">"{switchChoice === 'deficit' ? data.options.deficit.feedback : data.options.expression.feedback}"</p>
                      </div>
                   </div>
                </div>
                <div className="flex justify-center"><button onClick={() => setSwitchStep(3)} className="px-10 py-5 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all">Siguiente Paso</button></div>
             </div>
           )}

           {switchStep === 3 && (
             <div className="space-y-12 animate-in slide-in-from-bottom-12 duration-700">
                <div className="text-center space-y-4">
                  <h2 className="text-5xl font-black uppercase tracking-tighter text-white">4. Micro-Compromiso</h2>
                </div>
                <div className="p-12 bg-white rounded-[4rem] shadow-2xl space-y-10 relative overflow-hidden">
                   {showSwitchSuccess && (
                     <div className="absolute inset-0 bg-green-600 z-50 flex flex-col items-center justify-center text-white p-8 animate-in fade-in duration-500">
                        {renderIcon('PartyPopper', 80)}
                        <h3 className="text-4xl font-black uppercase mt-6">¡Compromiso Guardado!</h3>
                        <p className="text-xl font-medium mt-2 opacity-90">Tus respuestas han sido registradas. ¡Sigue así!</p>
                        <button onClick={() => markSlideComplete(currentSlideIndex)} className="mt-10 px-12 py-5 bg-white text-green-600 rounded-full font-black uppercase text-xs tracking-[0.3em] hover:bg-slate-100 transition-all">Continuar Lección</button>
                     </div>
                   )}
                   <div className="flex flex-wrap items-center gap-x-4 gap-y-8 text-2xl lg:text-3xl font-black text-slate-800 uppercase tracking-tighter">
                      <span>La próxima vez que</span>
                      <input type="text" placeholder="ej. me sienta solo" className="bg-slate-100 border-b-4 border-red-600 px-4 py-1 outline-none focus:bg-red-50 transition-colors placeholder:text-slate-300 text-red-600 lowercase" />
                      <span>ocurra, recordaré que</span>
                      <input type="text" placeholder="ej. Cristo es mi seguridad" className="bg-slate-100 border-b-4 border-red-600 px-4 py-1 outline-none focus:bg-red-50 transition-colors placeholder:text-slate-300 text-red-600 lowercase" />
                      <span>y elegiré</span>
                      <input type="text" placeholder="ej. buscar a otros con amor" className="bg-slate-100 border-b-4 border-red-600 px-4 py-1 outline-none focus:bg-red-50 transition-colors placeholder:text-slate-300 text-red-600 lowercase" />
                   </div>
                   <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-center gap-6">
                      <button onClick={() => { setSwitchStep(0); setSwitchChoice(null); }} className="px-8 py-5 bg-slate-100 rounded-full font-black uppercase text-[10px] tracking-[0.3em] text-slate-400 hover:bg-slate-200 transition-all flex items-center gap-2">{renderIcon('RotateCcw', 14)} Repetir</button>
                      <button onClick={handleFinishSwitch} className="px-12 py-6 bg-red-600 rounded-full font-black uppercase text-xs tracking-[0.3em] text-white shadow-xl hover:scale-105 transition-all">Finalizar Actividad</button>
                   </div>
                </div>
             </div>
           )}
        </div>
      </div>
    );
  }

  // --- Final Completion Slide Rendering Logic ---
  if (slide.type === 'completion') {
    return (
      <div className="h-full w-full relative flex items-center justify-center overflow-hidden bg-[#111111] p-12 lg:p-16">
         <div className="absolute inset-0 z-0">
           <img src={slide.visual.source} className="w-full h-full object-cover opacity-30" alt="" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]" />
         </div>
         <div className="relative z-10 text-center space-y-6 lg:space-y-10 animate-in zoom-in-95 duration-1000 max-w-4xl w-full">
            <div className="inline-block p-5 bg-red-600 rounded-[2.5rem] shadow-[0_0_50px_rgba(239,68,68,0.5)] animate-bounce mb-2">
               {renderIcon('Trophy', 60)}
            </div>
            <div className="space-y-2">
              <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none">{slide.title}</h2>
              <p className="text-lg lg:text-2xl font-bold text-red-500 uppercase tracking-[0.4em]">{slide.subtitle}</p>
            </div>
            
            {/* Cita de Cierre - Barra a la IZQUIERDA */}
            <div className="relative p-8 lg:p-10 max-w-3xl mx-auto">
               <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
               <p className="text-xl lg:text-3xl font-light text-slate-200 leading-relaxed text-left italic pl-10">
                  {slide.content}
               </p>
               <div className="flex justify-start pl-10 mt-2">
                  <span className="text-xs font-black uppercase tracking-[0.5em] text-red-500">Frase de Cierre</span>
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 pt-4">
               <button onClick={() => goToSlide(7)} className="px-8 py-4 lg:px-10 lg:py-5 bg-white/5 border border-white/10 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-3">
                 {renderIcon('LayoutList', 18)} Repetir Casos
               </button>
               <button onClick={() => goToSlide(11)} className="px-8 py-4 lg:px-10 lg:py-5 bg-white/5 border border-white/10 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-3">
                 {renderIcon('Zap', 18)} Repetir Interruptor
               </button>
               <button onClick={resetLesson} className="px-8 py-4 lg:px-10 lg:py-5 bg-white/5 border border-white/10 rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 transition-all flex items-center gap-3">
                 {renderIcon('RotateCcw', 18)} Reiniciar Curso
               </button>
               <button onClick={handleAbandon} className="px-10 py-5 lg:px-12 lg:py-6 bg-red-600 rounded-full font-black uppercase text-xs tracking-[0.4em] shadow-xl hover:scale-105 transition-all">
                 Finalizar Sesión
               </button>
            </div>
         </div>
      </div>
    );
  }

  // --- Default Slides Rendering ---
  const isBg = slide.visual.position === 'background';
  const currentActiveItem = slide.interaction?.revealItems?.[activeTab];

  return (
    <div className="h-full w-full relative flex flex-col overflow-y-auto custom-scrollbar bg-[#111111]">
      {isBg && (
        <div className="absolute inset-0 z-0">
          <img src={slide.visual.source} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
        </div>
      )}

      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center ${slide.type === 'timeline' || slide.type === 'tabs-reveal' || slide.type === 'hotspot-reveal' || slide.type === 'keynote-cards' || slide.type === 'pyramid-reveal' || slide.type === 'hermeneutics' ? 'p-0' : 'p-8 lg:p-12 max-w-7xl mx-auto w-full'}`}>
        
        {/* Pyramid Reveal */}
        {slide.type === 'pyramid-reveal' && slide.interaction?.revealItems && (
          <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16 gap-12 bg-[#0c0d12]">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center py-10">
               <div className="relative w-full max-w-md flex flex-col-reverse gap-2 items-center">
                  {slide.interaction.revealItems.slice().reverse().map((item, idx) => {
                    const realIdx = slide.interaction!.revealItems!.length - 1 - idx;
                    const isApex = idx === 4;
                    const baseWidth = 100 - (idx * 15);
                    return (
                      <button 
                        key={idx} 
                        onClick={() => { setActiveTab(realIdx); markSlideComplete(currentSlideIndex); }}
                        className={`relative group transition-all duration-500 rounded-lg overflow-hidden ${activeTab === realIdx ? 'z-20 scale-105 filter brightness-110 shadow-2xl' : 'z-10 opacity-70 hover:opacity-90'}`}
                        style={{ width: `${baseWidth}%`, height: isApex ? '140px' : '70px', backgroundColor: item.color, clipPath: isApex ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none' }}
                      >
                        <div className={`flex flex-col items-center justify-center h-full text-white ${isApex ? 'pt-14' : ''}`}>
                           <span className="font-black uppercase text-[10px] tracking-[0.2em]">{item.title}</span>
                        </div>
                      </button>
                    );
                  })}
               </div>
            </div>
            {currentActiveItem && (
              <div className="flex-1 max-w-xl space-y-8 animate-in slide-in-from-right-12 duration-1000">
                <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">{slide.title}</h2>
                <div className="bg-white/5 border border-white/10 p-10 rounded-[3.5rem] space-y-6">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white" style={{ backgroundColor: currentActiveItem.color }}>{renderIcon(currentActiveItem.icon, 32)}</div>
                        <div><p className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-1">{currentActiveItem.text}</p><h4 className="text-3xl font-black text-white uppercase tracking-tighter">{currentActiveItem.title}</h4></div>
                    </div>
                    <p className="text-xl lg:text-2xl font-light text-slate-300 leading-relaxed italic border-l-8 border-red-600 pl-10 py-4 bg-red-600/5 rounded-r-3xl">"{currentActiveItem.longContent}"</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Keynote Cards */}
        {slide.type === 'keynote-cards' && slide.interaction?.revealItems && (
          <div className="h-full w-full bg-[#e5e7eb] flex flex-col items-center p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d1d5db] skew-x-12 translate-x-1/4 z-0" />
            <div className="relative z-10 w-full max-w-7xl">
               <div className="mb-12"><p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">{slide.subtitle}</p><h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-none uppercase tracking-tighter">{slide.title}</h2></div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {slide.interaction.revealItems.map((item, idx) => (
                    <div key={idx} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col group animate-in slide-in-from-bottom-6 duration-700">
                       <div className="p-10 flex flex-col items-center text-center space-y-6 flex-1">
                          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg">{renderIcon(item.icon, 28)}</div>
                          <h4 className="text-lg font-black uppercase text-slate-900 tracking-tight">{item.title}</h4>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.text}</p>
                       </div>
                       <button onClick={() => { setExpandedItem(item); markSlideComplete(currentSlideIndex); }} className="w-full bg-[#0a0d14] p-6 flex items-center gap-3 text-white transition-colors hover:bg-red-600">
                          {renderIcon('Search', 16)}<span className="text-[10px] font-bold uppercase tracking-[0.2em]">Leer más</span>
                       </button>
                    </div>
                  ))}
               </div>
            </div>
            {expandedItem && (
               <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 animate-in zoom-in-95 duration-300">
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={() => setExpandedItem(null)} />
                  <div className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                     <div className="lg:w-1/2 relative min-h-[300px]"><img src={expandedItem.image} className="absolute inset-0 w-full h-full object-cover" alt="" /></div>
                     <div className="flex-1 p-12 lg:p-16 flex flex-col gap-8 bg-slate-50 max-h-[80vh] overflow-y-auto custom-scrollbar">
                        <div className="space-y-2"><p className="text-red-700 font-black uppercase tracking-[0.3em] text-[10px]">{expandedItem.title}</p><h4 className="text-3xl font-black uppercase tracking-tighter text-slate-900">{expandedItem.text}</h4></div>
                        <p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-light whitespace-pre-wrap">{expandedItem.longContent}</p>
                        <button onClick={() => setExpandedItem(null)} className="mt-auto px-10 py-5 bg-black rounded-full text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 transition-colors">Cerrar</button>
                     </div>
                  </div>
               </div>
            )}
          </div>
        )}

        {/* Intro */}
        {slide.type === 'intro' && (
          <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-700">
            <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none">{slide.title}</h2>
            <p className="text-xl lg:text-3xl font-bold text-red-500 uppercase tracking-[0.4em]">{slide.subtitle}</p>
            <p className="text-xl lg:text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed">{slide.content}</p>
          </div>
        )}

        {/* Split Visual */}
        {slide.type === 'split-visual' && (
          <div className="h-full w-full flex flex-col lg:flex-row overflow-y-auto custom-scrollbar">
             <div className="flex-1 p-12 lg:p-24 flex flex-col justify-center gap-8 bg-[#1a1a1a]">
                <h2 className="text-5xl font-black text-white uppercase leading-none">{slide.title}</h2>
                <p className="text-2xl font-light text-slate-300">{slide.content}</p>
                {slide.bullets && (
                   <ul className="space-y-4">
                      {slide.bullets.map((b, i) => <li key={i} className="flex gap-4 text-lg text-white font-medium"><div className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0" />{b}</li>)}
                   </ul>
                )}
             </div>
             <div className="flex-1 relative min-h-[400px]"><img src={slide.visual.source} className="absolute inset-0 w-full h-full object-cover" alt="" /></div>
          </div>
        )}

        {/* Drag Drop */}
        {slide.type === 'drag-drop' && (
           <div className="h-full w-full flex flex-col p-12 bg-slate-50 overflow-y-auto custom-scrollbar">
              <h2 className="text-4xl font-black text-black uppercase text-center mb-10 shrink-0">{slide.title}</h2>
              <div className="flex-1 flex flex-col gap-10 max-w-6xl mx-auto w-full">
                 <div className="flex flex-wrap justify-center gap-4 p-8 bg-white rounded-3xl shadow-lg border border-slate-100 min-h-[120px] shrink-0">
                    {slide.interaction?.dragItems?.map((item) => (
                       !dragAssignments[item.id] && (
                         <div 
                           key={item.id} 
                           draggable 
                           onDragStart={(e) => { e.dataTransfer.setData('itemId', item.id); }} 
                           className="px-6 py-4 bg-slate-800 text-white rounded-2xl font-bold cursor-grab hover:bg-black transition-all"
                         >
                           {item.label}
                         </div>
                       )
                    ))}
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-1">
                    {slide.interaction?.dragCategories?.map((cat) => (
                       <div 
                         key={cat.id} 
                         onDragOver={(e) => e.preventDefault()} 
                         onDrop={(e) => {
                            const itemId = e.dataTransfer.getData('itemId');
                            const item = slide.interaction?.dragItems?.find(i => i.id === itemId);
                            if (item?.categoryId === cat.id) {
                               setDragAssignments(prev => ({ ...prev, [itemId]: cat.id }));
                               const total = slide.interaction?.dragItems?.length || 0;
                               if (Object.keys({ ...dragAssignments, [itemId]: cat.id }).length === total) markSlideComplete(currentSlideIndex);
                            }
                         }} 
                         className="flex flex-col p-10 bg-white rounded-3xl border-2 border-dashed border-slate-200 hover:border-red-400 transition-all"
                       >
                          <h4 className="text-xl font-black uppercase text-slate-400 mb-8 text-center">{cat.title}</h4>
                          <div className="flex-1 flex flex-wrap gap-3 content-start">
                             {Object.entries(dragAssignments).map(([itemId, catId]) => {
                                if (catId !== cat.id) return null;
                                const item = slide.interaction?.dragItems?.find(i => i.id === itemId);
                                return <div key={itemId} className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm animate-in zoom-in-75">{item?.label}</div>;
                             })}
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        )}

        {/* Tabs Reveal & Timeline */}
        {(slide.type === 'tabs-reveal' || slide.type === 'timeline') && slide.interaction?.revealItems && (
          <div className="h-full w-full flex flex-col p-8 lg:p-16">
             {slide.type === 'tabs-reveal' && (
                <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2 shrink-0">
                  {slide.interaction.revealItems.map((item, idx) => (
                    <button key={idx} onClick={() => setActiveTab(idx)} className={`px-8 py-4 rounded-t-2xl font-black uppercase text-[10px] tracking-widest shrink-0 transition-all ${activeTab === idx ? 'bg-white text-black' : 'bg-white/5 text-white/40'}`}>
                        {item.title}
                    </button>
                  ))}
                </div>
             )}
             
             <div className="flex-1 flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl">
                {slide.type === 'timeline' && (
                  <div className="w-full lg:w-80 bg-[#1a1a1a] p-6 lg:p-10 space-y-4 overflow-y-auto custom-scrollbar shrink-0">
                    <h2 className="text-2xl font-black text-white uppercase mb-6">{slide.title}</h2>
                    {slide.interaction.revealItems.map((item, idx) => (
                      <button key={idx} onClick={() => setActiveTab(idx)} className={`w-full p-6 text-left rounded-2xl border transition-all ${activeTab === idx ? 'bg-red-600 border-red-500 text-white shadow-lg' : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10'}`}>
                          <p className="text-sm font-black uppercase tracking-widest">{item.title}</p>
                      </button>
                    ))}
                  </div>
                )}
                
                <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center gap-6 overflow-y-auto custom-scrollbar animate-in fade-in duration-500">
                   {currentActiveItem && (
                     <>
                       <h3 className="text-3xl font-black text-black uppercase">{currentActiveItem.title}</h3>
                       <p className="text-xl font-light text-slate-600 leading-relaxed whitespace-pre-wrap">{currentActiveItem.longContent || currentActiveItem.text}</p>
                     </>
                   )}
                </div>
                <div className="flex-1 relative min-h-[300px] overflow-hidden">
                   {currentActiveItem?.image && <img key={activeTab} src={currentActiveItem.image} className="absolute inset-0 w-full h-full object-cover animate-in zoom-in-95 duration-700" alt="" />}
                </div>
             </div>
          </div>
        )}

        {/* Hotspot Reveal */}
        {slide.type === 'hotspot-reveal' && slide.interaction?.revealItems && (
           <div className="h-full w-full relative">
              <img src={slide.visual.source} className="w-full h-full object-cover opacity-50" alt="" />
              <div className="absolute top-12 left-12 z-20"><h2 className="text-5xl font-black text-white uppercase">{slide.title}</h2><p className="text-red-500 font-bold uppercase tracking-widest">{slide.subtitle}</p></div>
              {slide.interaction.revealItems.map((item, idx) => (
                 <button key={idx} style={{ left: `${item.x}%`, top: `${item.y}%` }} onClick={() => setActiveHotspot(item)} className="absolute w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse -translate-x-1/2 -translate-y-1/2 z-20 border-4 border-white">
                    {renderIcon(item.icon, 20)}
                 </button>
              ))}
              {activeHotspot && (
                 <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
                    <div className="bg-white rounded-[3rem] p-12 max-w-2xl w-full shadow-2xl relative">
                       <button onClick={() => setActiveHotspot(null)} className="absolute top-8 right-8 p-2 bg-slate-100 rounded-full text-slate-400 hover:text-black transition-all">{renderIcon('X', 20)}</button>
                       <h4 className="text-3xl font-black text-black uppercase mb-4">{activeHotspot.title}</h4>
                       <p className="text-lg text-slate-600 leading-relaxed mb-6">{activeHotspot.longContent || activeHotspot.text}</p>
                    </div>
                 </div>
              )}
           </div>
        )}

        {/* Hermeneutics Reveal */}
        {slide.type === 'hermeneutics' && slide.interaction?.revealItems && (
          <div className="h-full w-full flex flex-col p-8 lg:p-16 gap-8 bg-[#0c0d12]">
             <div className="space-y-2">
                <h2 className="text-5xl font-black uppercase text-white tracking-tighter leading-none">{slide.title}</h2>
                <p className="text-red-500 font-bold uppercase tracking-widest">{slide.subtitle}</p>
             </div>
             <div className="flex-1 flex flex-col lg:flex-row gap-10 items-stretch h-full overflow-hidden">
                <div className="lg:w-[40%] relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl min-h-[300px]">
                   <img src={slide.visual.source} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto custom-scrollbar pr-4">
                   {slide.interaction.revealItems.map((item, i) => (
                     <div key={i} className="flex items-center gap-5 p-6 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all text-left group">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 group-hover:bg-red-600 transition-colors">
                           {renderIcon(item.icon, 24)}
                        </div>
                        <div className="text-white">
                           <span className="block font-black uppercase text-[10px] tracking-[0.2em] opacity-50 mb-1">{item.title}</span>
                           <span className="block font-bold text-sm tracking-tight">{item.text}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        )}

      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(239,68,68,0.25); border-radius: 12px; }
      `}</style>
    </div>
  );
};

export default SlideRenderer;
