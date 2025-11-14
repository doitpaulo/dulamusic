
import React, { useState, useEffect, useMemo, Fragment } from 'react';
import { quizData } from './data/quizData';
import Quiz from './components/Quiz';
import { Module, Trail, UserProfile } from './types';
import { LockIcon, CheckIcon, StarIcon } from './components/Icons';
import { avatars } from './components/Avatars';
import ProfileSetup from './components/ProfileSetup';

const App: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : null;
  });

  const [userProgress, setUserProgress] = useState<Set<string>>(() => {
    const savedProgress = localStorage.getItem('userProgress');
    return savedProgress ? new Set(JSON.parse(savedProgress)) : new Set();
  });

  const [currentQuiz, setCurrentQuiz] = useState<{ trail: Trail; } | null>(null);

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
  }, [userProfile]);
  
  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(Array.from(userProgress)));
  }, [userProgress]);

  const handleProfileSave = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  const handleTrailComplete = (score: number) => {
    if (currentQuiz) {
      setUserProgress(prev => new Set(prev).add(currentQuiz.trail.id));
      setUserProfile(prev => prev ? { ...prev, score: prev.score + score } : null);
    }
    setCurrentQuiz(null);
  };

  const handleStartTrail = (trail: Trail) => {
    setCurrentQuiz({ trail });
  };
  
  const handleExitQuiz = () => {
    setCurrentQuiz(null);
  }

  const allTrailsWithModule = useMemo(() => {
    return quizData.flatMap(module => 
      module.trails.map(trail => ({ ...trail, module }))
    );
  }, []);
  
  const animationStyles = `
    @keyframes trail-pop-in {
      0% { transform: scale(0.5); opacity: 0; }
      80% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }
    .animate-trail-pop-in {
      animation: trail-pop-in 0.5s ease-out forwards;
    }

    @keyframes module-glow {
      from {
        background-color: rgba(30, 41, 59, 0.5);
        border-color: #334155;
        box-shadow: none;
      }
      to {
        background-color: rgba(74, 58, 20, 0.3);
        border-color: #f59e0b;
        box-shadow: 0 10px 15px -3px rgba(245, 158, 11, 0.1), 0 4px 6px -2px rgba(245, 158, 11, 0.05);
      }
    }
    .animate-module-glow {
      animation: module-glow 0.8s ease-in-out forwards;
    }

    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.6s ease-out forwards;
    }

    @keyframes owl-nod {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(5deg); }
      75% { transform: rotate(-5deg); }
    }
    .animate-owl-nod {
        animation: owl-nod 0.8s ease-in-out;
    }

    @keyframes owl-wobble {
        0%, 100% { transform: translateX(0%) rotate(0deg); }
        25% { transform: translateX(-5%) rotate(-3deg); }
        75% { transform: translateX(5%) rotate(3deg); }
    }
    .animate-owl-wobble {
        animation: owl-wobble 0.7s ease-in-out;
    }

    @keyframes owl-spin {
        from { transform: rotate(0deg) scale(1); }
        to { transform: rotate(360deg) scale(1.1); }
    }
    .animate-owl-spin {
        animation: owl-spin 0.5s ease-out;
    }
  `;

  if (!userProfile) {
    return <ProfileSetup onSave={handleProfileSave} />;
  }
  
  if (currentQuiz) {
    return <Quiz trail={currentQuiz.trail} onComplete={handleTrailComplete} onExit={handleExitQuiz} />;
  }

  const UserAvatar = avatars[userProfile.avatarId] || (() => <div>🎵</div>);

  return (
    <div className="min-h-screen text-white">
      <style>{animationStyles}</style>
      <header className="sticky top-0 bg-sky-900/80 backdrop-blur-sm z-10 p-4 border-b border-sky-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
                  <UserAvatar />
              </div>
              <div>
                  <h1 className="text-xl font-bold">{userProfile.name}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-yellow-400/20 border border-yellow-400 text-yellow-300 font-bold px-4 py-2 rounded-full">
                <StarIcon className="w-6 h-6" />
                <span>{userProfile.score}</span>
            </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 sm:p-8 space-y-4 pb-24">
        <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 mb-8">
          <div className="text-5xl flex-shrink-0 mt-1">🦉</div>
          <div>
            <p className="font-bold text-lg text-cyan-300">Olá, {userProfile.name}!</p>
            <p className="text-slate-300">Sou o Mestre Coruja. Estou aqui para te guiar em sua jornada musical. Vamos começar?</p>
          </div>
        </div>
        
        {allTrailsWithModule.map((trail, index) => {
          const isFirstInList = index === 0;
          const prevTrail = isFirstInList ? null : allTrailsWithModule[index-1];
          const isTrailUnlocked = isFirstInList || (prevTrail && userProgress.has(prevTrail.id));
          const isTrailComplete = userProgress.has(trail.id);
          const isFirstOfModule = isFirstInList || trail.module.id !== prevTrail?.module.id;
          
          const getTrailColor = () => {
              if (isTrailComplete) return 'bg-green-600 border-green-400';
              if (isTrailUnlocked) return 'bg-cyan-600 border-cyan-400';
              return 'bg-slate-700 border-slate-600';
          };
          
          const icon = isTrailComplete ? <CheckIcon className="w-10 h-10 animate-trail-pop-in"/> : isTrailUnlocked ? <StarIcon className="w-10 h-10"/> : <LockIcon className="w-10 h-10"/>;

          return (
            <Fragment key={trail.id}>
              {isFirstOfModule && (() => {
                const module = trail.module;
                const moduleTrails = module.trails;
                const completedTrailsCount = moduleTrails.filter(t => userProgress.has(t.id)).length;
                const progressPercentage = (completedTrailsCount / moduleTrails.length) * 100;
                
                const isModuleFullyComplete = completedTrailsCount === moduleTrails.length;
                const isModulePartiallyComplete = completedTrailsCount > 0 && !isModuleFullyComplete;

                let headerClasses = 'bg-slate-800/50 border-slate-700';
                let titleClasses = 'text-cyan-300';
                let headerIcon = null;

                if (isModuleFullyComplete) {
                    headerClasses = 'bg-yellow-900/30 border-yellow-400 shadow-lg shadow-yellow-500/10 animate-module-glow';
                    titleClasses = 'text-yellow-300';
                    headerIcon = <StarIcon className="w-8 h-8 text-yellow-400 animate-fade-in-up" />;
                }

                return (
                    <div className={`text-center my-8 sm:my-10 p-4 rounded-xl border ${headerClasses}`}>
                        <div className="flex items-center justify-center gap-3 mb-2">
                            {headerIcon}
                            <h2 className={`text-2xl font-bold ${titleClasses}`}>{module.title}</h2>
                        </div>
                        <p className="text-slate-400">{module.level}</p>
                        
                        {isModulePartiallyComplete && (
                            <div className="w-full bg-slate-700 rounded-full h-2.5 mt-4">
                                <div
                                    className="bg-cyan-500 h-2.5 rounded-full"
                                    style={{ width: `${progressPercentage}%` }}>
                                </div>
                            </div>
                        )}
                        
                        {isModuleFullyComplete && (
                            <p className="mt-2 font-semibold text-yellow-400 animate-fade-in-up" style={{ animationDelay: '200ms' }}>Módulo Concluído!</p>
                        )}
                    </div>
                );
              })()}
              <div className="flex flex-col items-center">
                  <div className="text-center">
                    <button
                      onClick={() => isTrailUnlocked && handleStartTrail(trail)}
                      disabled={!isTrailUnlocked}
                      className="group"
                      aria-label={trail.title}
                    >
                      <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-white transition-all duration-300 transform group-hover:scale-110 disabled:transform-none disabled:cursor-not-allowed border-4 shadow-lg ${getTrailColor()}`}>
                        {icon}
                      </div>
                    </button>
                    <p className="mt-2 text-sm sm:text-base font-semibold text-slate-300 w-28 mx-auto truncate" title={trail.title}>
                      {trail.title}
                    </p>
                  </div>
                  {index < allTrailsWithModule.length - 1 && (
                     <div className="w-2 h-12 bg-slate-700/50 mt-2" />
                  )}
              </div>
            </Fragment>
          );
        })}
      </main>
    </div>
  );
};

export default App;
