import React, { useState, useRef, useEffect } from 'react';
import { Widget } from '@typeform/embed-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TypeformEmbed = () => {
    const navigate = useNavigate();
    // TOGGLE THIS: Set to false when you have your real Typeform ID
    const USE_DEMO_MODE = true;
    const formId = "cK5d72"; // Your actual Typeform ID goes here

    if (USE_DEMO_MODE) {
        return <MockTypeform navigate={navigate} />;
    }

    return (
        <section id="apply" className="py-0 bg-neutral-50">
            <div className="container mx-auto px-0 md:px-4">
                <div className="w-full max-w-5xl mx-auto bg-white md:rounded-xl shadow-2xl overflow-hidden border-y md:border border-neutral-200 -mt-10 relative z-20">
                    <Widget
                        id={formId}
                        style={{ width: '100%', height: '600px' }}
                        className="w-full"
                        opacity={100}
                        inlineOnMobile={true}
                        enableSandbox={false}
                        autoResize={true}
                        onSubmit={() => navigate('/thank-you')}
                    />
                </div>
            </div>
        </section>
    );
};

// A visual simulation of a 12-Step Application Form
const MockTypeform = ({ navigate }) => {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const [inputVal, setInputVal] = useState("");
    const inputRef = useRef(null);

    const totalSteps = 13; // 12 questions + End screen

    useEffect(() => {
        if (inputRef.current && step > 1) {
            inputRef.current.focus();
        }
    }, [step]);

    const handleNext = (val) => {
        setAnswers(prev => ({ ...prev, [step]: val }));
        setInputVal("");
        setStep(prev => prev + 1);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputVal.trim() !== "") {
            handleNext(inputVal);
        }
    };

    const progress = Math.min(((step - 1) / 12) * 100, 100);

    return (
        <section id="apply" className="py-0 bg-neutral-50 min-h-[600px] flex items-center justify-center">
            <div className="container mx-auto px-0 md:px-4 w-full h-full">
                <div className="w-full max-w-3xl mx-auto bg-white md:rounded-xl shadow-2xl overflow-hidden border-y md:border border-neutral-200 -mt-10 relative z-20 min-h-[600px] flex flex-col font-sans">

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-neutral-100">
                        <motion.div
                            className="h-full bg-brand-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-start p-6 md:p-12 lg:p-16 w-full">
                        <AnimatePresence mode="wait">

                            {/* 1. First Name */}
                            {step === 1 && (
                                <StepWrapper key="1">
                                    <StepNumber>1</StepNumber>
                                    <Question>What is your <strong>First Name</strong>?</Question>
                                    <Input
                                        ref={inputRef}
                                        placeholder="Type your answer here..."
                                        value={inputVal}
                                        onChange={(e) => setInputVal(e.target.value)}
                                        onEnter={() => handleNext(inputVal)}
                                    />
                                    <Button onClick={() => handleNext(inputVal)} disabled={!inputVal.trim()}>OK <Check className="w-4 h-4 ml-1" /></Button>
                                </StepWrapper>
                            )}

                            {/* 2. Age */}
                            {step === 2 && (
                                <StepWrapper key="2">
                                    <StepNumber>2</StepNumber>
                                    <Question>What is your <strong>Age</strong>?</Question>
                                    <Input
                                        ref={inputRef}
                                        type="number"
                                        placeholder="e.g. 30"
                                        value={inputVal}
                                        onChange={(e) => setInputVal(e.target.value)}
                                        onEnter={() => handleNext(inputVal)}
                                    />
                                    <Button onClick={() => handleNext(inputVal)} disabled={!inputVal.trim()}>OK <Check className="w-4 h-4 ml-1" /></Button>
                                </StepWrapper>
                            )}

                            {/* 3. Gender */}
                            {step === 3 && (
                                <StepWrapper key="3">
                                    <StepNumber>3</StepNumber>
                                    <Question>What is your <strong>Gender</strong>?</Question>
                                    <OptionsList
                                        options={["Male", "Female", "Prefer not to say"]}
                                        onSelect={handleNext}
                                    />
                                </StepWrapper>
                            )}

                            {/* 4. Goal */}
                            {step === 4 && (
                                <StepWrapper key="4">
                                    <StepNumber>4</StepNumber>
                                    <Question>What is your <strong>primary fitness goal</strong>?</Question>
                                    <OptionsList
                                        options={["Fat Loss", "Muscle Gain", "Improve Energy", "General Fitness"]}
                                        onSelect={handleNext}
                                    />
                                </StepWrapper>
                            )}

                            {/* 5. Challenge */}
                            {step === 5 && (
                                <StepWrapper key="5">
                                    <StepNumber>5</StepNumber>
                                    <Question>What is your <strong>biggest challenge</strong> right now?</Question>
                                    <OptionsList
                                        options={["No Time", "Inconsistent Routine", "Travel Schedule", "Work Stress", "Lack of Structure"]}
                                        onSelect={handleNext}
                                    />
                                </StepWrapper>
                            )}

                            {/* 6. Commitment */}
                            {step === 6 && (
                                <StepWrapper key="6">
                                    <StepNumber>6</StepNumber>
                                    <Question>Are you ready to commit to a structured <strong>90-day program</strong>?</Question>
                                    <OptionsList
                                        options={["Yes, I'm ready", "No, not yet"]}
                                        onSelect={handleNext}
                                    />
                                </StepWrapper>
                            )}

                            {/* 7. Timeline */}
                            {step === 7 && (
                                <StepWrapper key="7">
                                    <StepNumber>7</StepNumber>
                                    <Question>How soon do you want to <strong>start</strong>?</Question>
                                    <OptionsList
                                        options={["Immediately", "Within 2 weeks", "Within 1 month", "Just exploring"]}
                                        onSelect={handleNext}
                                    />
                                </StepWrapper>
                            )}

                            {/* 8. Investment */}
                            {step === 8 && (
                                <StepWrapper key="8">
                                    <StepNumber>8</StepNumber>
                                    <Question>What is your <strong>investment comfort range</strong> for professional coaching?</Question>
                                    <OptionsList
                                        options={["₹10k – ₹20k", "₹20k – ₹40k", "₹40k+", "Not sure"]}
                                        onSelect={handleNext}
                                    />
                                </StepWrapper>
                            )}

                            {/* 9. Seriousness Scale */}
                            {step === 9 && (
                                <StepWrapper key="9">
                                    <StepNumber>9</StepNumber>
                                    <Question>On a scale of 1–10, how <strong>serious</strong> are you about transforming right now?</Question>
                                    <div className="flex flex-wrap gap-2 w-full mt-4">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => handleNext(num)}
                                                className="w-10 h-10 md:w-12 md:h-12 border border-brand-200 rounded hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-colors text-neutral-700 font-bold"
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex justify-between w-full max-w-[500px] mt-2 text-xs text-neutral-400">
                                        <span>Not Serious</span>
                                        <span>Extremely Serious</span>
                                    </div>
                                </StepWrapper>
                            )}

                            {/* 10. Phone */}
                            {step === 10 && (
                                <StepWrapper key="10">
                                    <StepNumber>10</StepNumber>
                                    <Question>What is your <strong>Phone Number</strong>?</Question>
                                    <Subtext>We use this to verify your application.</Subtext>
                                    <Input
                                        ref={inputRef}
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={inputVal}
                                        onChange={(e) => setInputVal(e.target.value)}
                                        onEnter={() => handleNext(inputVal)}
                                    />
                                    <Button onClick={() => handleNext(inputVal)} disabled={!inputVal.trim()}>OK <Check className="w-4 h-4 ml-1" /></Button>
                                </StepWrapper>
                            )}

                            {/* 11. Email */}
                            {step === 11 && (
                                <StepWrapper key="11">
                                    <StepNumber>11</StepNumber>
                                    <Question>What is your <strong>Email Address</strong>?</Question>
                                    <Input
                                        ref={inputRef}
                                        type="email"
                                        placeholder="name@example.com"
                                        value={inputVal}
                                        onChange={(e) => setInputVal(e.target.value)}
                                        onEnter={() => handleNext(inputVal)}
                                    />
                                    <Button onClick={() => handleNext(inputVal)} disabled={!inputVal.trim()}>OK <Check className="w-4 h-4 ml-1" /></Button>
                                </StepWrapper>
                            )}

                            {/* 12. Why Now */}
                            {step === 12 && (
                                <StepWrapper key="12">
                                    <StepNumber>12</StepNumber>
                                    <Question><strong>Why</strong> do you want to transform <strong>now</strong>?</Question>
                                    <Subtext>Optional - tell us what motivates you.</Subtext>
                                    <Input
                                        ref={inputRef}
                                        placeholder="Type your answer here..."
                                        value={inputVal}
                                        onChange={(e) => setInputVal(e.target.value)}
                                        onEnter={() => handleNext(inputVal)}
                                    />
                                    <Button onClick={() => handleNext(inputVal)}>Submit Application <Check className="w-4 h-4 ml-1" /></Button>
                                </StepWrapper>
                            )}

                            {/* 13. End Screen (Redirect) */}
                            {step === 13 && (
                                <RedirectOnComplete navigate={navigate} answers={answers} />
                            )}

                        </AnimatePresence>
                    </div>

                    {/* Fake Footer */}
                    <div className="p-4 flex justify-between items-center border-t border-neutral-50 bg-neutral-50/50">
                        {step > 1 && step < 13 && (
                            <button
                                onClick={() => setStep(s => s - 1)}
                                className="text-sm text-neutral-400 hover:text-neutral-600 flex items-center gap-1"
                            >
                                ↑ Previous
                            </button>
                        )}
                        <span className="ml-auto bg-neutral-800 text-white text-[10px] uppercase font-bold px-2 py-1 rounded opacity-50">Powered by Typeform</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

// UI Helpers
const StepWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full flex flex-col items-start max-w-xl"
    >
        {children}
    </motion.div>
);

const StepNumber = ({ children }) => (
    <span className="text-brand-600 font-bold mb-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-6 h-6 border border-brand-600 rounded-sm text-xs">
            {children}
        </span>
        <span className="w-4 h-px bg-brand-600"></span>
    </span>
);

const Question = ({ children }) => (
    <h3 className="text-2xl md:text-3xl text-neutral-800 font-light mb-4 leading-tight">
        {children} <span className="text-brand-600">*</span>
    </h3>
);

const Subtext = ({ children }) => (
    <p className="text-lg text-neutral-500 mb-6 font-light">{children}</p>
);

const Input = React.forwardRef(({ placeholder, value, onChange, onEnter, type = "text" }, ref) => (
    <input
        ref={ref}
        type={type}
        className="w-full text-2xl md:text-3xl border-b border-brand-200 py-2 mb-8 focus:outline-none focus:border-brand-600 placeholder:text-brand-200 bg-transparent transition-colors"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && onEnter()}
    />
));

const Button = ({ children, onClick, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`px-8 py-3 rounded-md font-bold text-base transition-all flex items-center shadow-lg transform active:scale-95 ${disabled
            ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed shadow-none'
            : 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-brand-200'
            }`}
    >
        {children}
    </button>
);

const OptionsList = ({ options, onSelect }) => (
    <div className="flex flex-col gap-3 w-full animate-in slide-in-from-bottom-4 fade-in duration-500">
        {options.map((opt, i) => (
            <div
                key={i}
                onClick={() => onSelect(opt)}
                className="w-full p-4 border border-brand-100 rounded-md hover:bg-brand-50 hover:border-brand-300 cursor-pointer transition-all flex items-center gap-4 group bg-white shadow-sm hover:shadow-md"
            >
                <span className="w-6 h-6 flex items-center justify-center bg-neutral-50 text-neutral-400 border border-neutral-200 rounded-sm text-xs font-bold group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-colors">
                    {String.fromCharCode(65 + i)}
                </span>
                <span className="text-lg text-neutral-700 font-medium group-hover:text-brand-900">{opt}</span>
                <ChevronRight className="w-5 h-5 ml-auto text-neutral-300 group-hover:text-brand-500" />
            </div>
        ))}
    </div>
);

// Redirect Component
const RedirectOnComplete = ({ navigate, answers }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/thank-you');
        }, 2000); // 2 second delay to show success state before redirect
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="text-center w-full flex flex-col items-center justify-center animate-in fade-in duration-700">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-8"
            >
                <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-10 h-10 text-brand-600" />
                </div>
            </motion.div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">Application Received!</h3>
            <p className="text-lg text-neutral-600 max-w-md mx-auto leading-relaxed">
                Redirecting you to the next steps...
            </p>
        </div>
    );
};

export default TypeformEmbed;
