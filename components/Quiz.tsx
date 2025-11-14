import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Trail, Option as OptionType } from '../types';
import { HeartIcon, CheckIcon, XMarkIcon, SpeakerWaveIcon } from './Icons';
import Modal from './Modal';
import { musicalTips } from '../data/tips';
import { playAudio } from '../utils/audio';

interface QuizProps {
  trail: Trail;
  onComplete: (score: number) => void;
  onExit: () => void;
}

const mascotInteractions = [
  { id: 'nod', animation: 'animate-owl-nod', text: 'Mestre Coruja acena em aprovação!' },
  { id: 'wobble', animation: 'animate-owl-wobble', text: 'Mestre Coruja dança de alegria!' },
  { id: 'spin', animation: 'animate-owl-spin', text: 'Mestre Coruja dá uma pirueta vitoriosa!' },
];

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const progress = (current / total) * 100;
  return (
    <div className="w-full bg-slate-700 rounded-full h-4">
      <div
        className="bg-green-500 h-4 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

const Quiz: React.FC<QuizProps> = ({ trail, onComplete, onExit }) => {
  const [lives, setLives] = useState(3);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showModal, setShowModal] = useState<'success' | 'failure' | null>(null);
  const [randomTip, setRandomTip] = useState('');
  const [activeInteraction, setActiveInteraction] = useState(mascotInteractions[0]);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioContext = useMemo(() => {
    if (typeof window !== 'undefined') {
      return new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return null;
  }, []);

  const playSound = useCallback((type: 'correct' | 'incorrect' | 'success' | 'hoot') => {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.01);

    let duration = 0.15;

    if (type === 'correct') {
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    } else if (type === 'incorrect') {
      duration = 0.25;
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
    } else if (type === 'success') {
      duration = 0.5;
      oscillator.type = 'triangle';
      // Play a C major arpeggio
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
      oscillator.frequency.setValueAtTime(1046.50, audioContext.currentTime + 0.3); // C6
    } else if (type === 'hoot') {
        duration = 0.3;
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(250, audioContext.currentTime + 0.15);
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
    }


    oscillator.start(audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
    oscillator.stop(audioContext.currentTime + duration);
  }, [audioContext]);
  
  useEffect(() => {
    if (showModal === 'success') {
      const tip = musicalTips[Math.floor(Math.random() * musicalTips.length)];
      const interaction = mascotInteractions[Math.floor(Math.random() * mascotInteractions.length)];
      setRandomTip(tip);
      setActiveInteraction(interaction);
      playSound('success');
      setTimeout(() => playSound('hoot'), 100);
    }
  }, [showModal, playSound]);

  const currentQuestion = trail.questions[currentQuestionIndex];

  const handleSelectOption = (option: OptionType) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedOption(option);
    if (!option.isCorrect) {
      playSound('incorrect');
      setLives((prev) => prev - 1);
    } else {
      playSound('correct');
    }
  };

  const handleContinue = () => {
    if (selectedOption && !selectedOption.isCorrect && lives <= 0) {
      setShowModal('failure');
      return;
    }

    if (currentQuestionIndex === trail.questions.length - 1) {
      setShowModal('success');
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };
  
  const restartTrail = () => {
    setLives(3);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowModal(null);
  };
  
  const handleSuccessModalClose = () => {
    const scoreEarned = trail.questions.length * 10;
    onComplete(scoreEarned);
  };

  const getOptionClasses = (option: OptionType) => {
    if (!isAnswered) {
      return 'bg-slate-800 hover:bg-slate-700';
    }
    if (option === selectedOption) {
      return option.isCorrect ? 'bg-green-700' : 'bg-red-700';
    }
    if (option.isCorrect) {
      return 'bg-green-700';
    }
    return 'bg-slate-800 opacity-50';
  };
  
  const getFeedbackMessage = () => {
    if (!isAnswered) return null;
    if (selectedOption?.isCorrect) {
        return { message: "Excelente!", Icon: CheckIcon, color: 'text-green-400' };
    }
    return { message: "Resposta incorreta", Icon: XMarkIcon, color: 'text-red-400' };
  };

  const handlePlayAudio = () => {
    if (!audioContext || !currentQuestion.audio || isAudioPlaying) return;

    setIsAudioPlaying(true);
    const payload = currentQuestion.audio;
    const defaultDuration = 0.5;
    let totalDurationMs = 200; // buffer

    if (payload.type === 'progression' && payload.chords) {
        totalDurationMs += payload.chords.length * (payload.duration || defaultDuration) * 1000;
    } else if (payload.notes) {
        totalDurationMs += payload.notes.length * (payload.duration || defaultDuration) * 1000;
    }
    
    playAudio(audioContext, payload);
    
    setTimeout(() => {
        setIsAudioPlaying(false);
    }, totalDurationMs);
  };

  const feedback = getFeedbackMessage();
  const feedbackBgColor = selectedOption?.isCorrect ? 'bg-green-900/90' : 'bg-red-900/90';

  return (
    <div className="flex flex-col h-screen p-4 sm:p-6 md:p-8 bg-slate-900">
      <header className="flex-shrink-0">
        <div className="flex justify-between items-center mb-4 gap-4">
           <button onClick={onExit} className="text-slate-400 text-2xl font-bold">&times;</button>
          <ProgressBar current={currentQuestionIndex} total={trail.questions.length} />
          <div className="flex items-center gap-1">
            <HeartIcon className="w-7 h-7 text-red-500" />
            <span className="text-xl font-bold text-red-500">{lives}</span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center">
        <div className="flex justify-center items-start gap-4 max-w-3xl w-full mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-200 text-center">{currentQuestion.questionText}</h2>
            {currentQuestion.audio && (
                <button 
                    onClick={handlePlayAudio} 
                    disabled={isAudioPlaying}
                    className="flex-shrink-0 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-wait p-3 rounded-full transition-colors"
                    aria-label="Ouvir exemplo"
                >
                    <SpeakerWaveIcon className={`w-6 h-6 ${isAudioPlaying ? 'text-slate-400 animate-pulse' : 'text-cyan-400'}`} />
                </button>
            )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl w-full mx-auto">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectOption(option)}
              disabled={isAnswered}
              className={`p-4 rounded-xl text-left text-lg transition-all duration-200 border-2 border-slate-700 ${getOptionClasses(option)}`}
            >
              {option.text}
            </button>
          ))}
        </div>
      </main>
      
      {isAnswered && (
        <footer className={`fixed bottom-0 left-0 right-0 p-4 transition-transform transform translate-y-0 ${feedbackBgColor}`}>
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex-1 w-full sm:w-auto">
              <div className="flex items-center gap-3">
                {feedback && <feedback.Icon className={`w-8 h-8 flex-shrink-0 ${feedback.color}`} />}
                <p className={`text-xl font-bold ${feedback.color}`}>{feedback?.message}</p>
              </div>
              {currentQuestion.explanation && (
                <p className="mt-2 text-slate-300 text-base">
                  {currentQuestion.explanation}
                </p>
              )}
            </div>
            <button
              onClick={handleContinue}
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-transform transform hover:scale-105"
            >
              Continuar
            </button>
          </div>
        </footer>
      )}

      <Modal
        isOpen={showModal === 'success'}
        title="Trilha Concluída!"
        onClose={handleSuccessModalClose}
        buttonText="Continuar"
      >
        <div className="flex flex-col items-center">
            <div className={`text-6xl mb-2 ${activeInteraction.animation}`}>🦉</div>
            <p className="text-slate-400 text-sm italic mb-4 h-5">{activeInteraction.text}</p>
            <p className="mb-4">Parabéns! Você completou esta trilha com sucesso. Continue estudando!</p>
            <div className="bg-slate-700/50 p-3 rounded-lg text-left w-full">
                <p className="font-bold text-cyan-400">Dica do Mestre Coruja:</p>
                <p className="text-slate-300 text-sm mt-1">{randomTip}</p>
            </div>
        </div>
      </Modal>

      <Modal
        isOpen={showModal === 'failure'}
        title="Fim de Jogo"
        onClose={restartTrail}
        buttonText="Tentar Novamente"
      >
        <div className="flex flex-col items-center">
            <div className="text-6xl mb-4">🦉</div>
            <p>Você ficou sem vidas. Não desanime, a prática leva à perfeição!</p>
        </div>
      </Modal>

    </div>
  );
};

export default Quiz;