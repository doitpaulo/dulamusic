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

  if (!userProfile) {
    return <ProfileSetup onSave={handleProfileSave} />;
  }
  
  if (currentQuiz) {
    return <Quiz trail={currentQuiz.trail} onComplete={handleTrailComplete} onExit={handleExitQuiz} />;
  }

  const UserAvatar = avatars[userProfile.avatarId] || (() => <div>🎵</div>);

  return (
    <div className="min-h-screen text-white">
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
          
          const icon = isTrailComplete ? <CheckIcon className="w-10 h-10"/> : isTrailUnlocked ? <StarIcon className="w-10 h-10"/> : <LockIcon className="w-10 h-10"/>;

          return (
            <Fragment key={trail.id}>
              {isFirstOfModule && (
                 <div className="text-center my-10 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-bold text-cyan-300">{trail.module.title}</h2>
                    <p className="text-slate-400">{trail.module.level}</p>
                </div>
              )}
              <div className="flex flex-col items-center">
                  <button
                    onClick={() => isTrailUnlocked && handleStartTrail(trail)}
                    disabled={!isTrailUnlocked}
                    className="group relative"
                    aria-label={trail.title}
                  >
                    <div className={`w-28 h-28 rounded-full flex items-center justify-center text-white transition-all duration-300 transform group-hover:scale-110 disabled:transform-none disabled:cursor-not-allowed border-4 shadow-lg ${getTrailColor()}`}>
                      {icon}
                    </div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-max bg-slate-800 text-white text-sm font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {trail.title}
                    </div>
                  </button>
                  {index < allTrailsWithModule.length - 1 && (
                     <div className="w-2 h-16 bg-slate-700/50" />
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