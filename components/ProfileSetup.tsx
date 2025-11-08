import React, { useState } from 'react';
import { UserProfile } from '../types';
import { avatars, avatarIds } from './Avatars';

interface ProfileSetupProps {
  onSave: (profile: UserProfile) => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ onSave }) => {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(avatarIds[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSave({
        name: name.trim(),
        avatarId: selectedAvatar,
        score: 0,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md text-center">
            <header className="mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
                    Bem-vindo!
                </h1>
                <p className="text-slate-400 mt-2 text-lg">Vamos começar sua jornada musical.</p>
            </header>
            <main className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold text-slate-300 mb-2">Qual é o seu nome?</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome"
                            className="w-full bg-slate-700 border-2 border-slate-600 rounded-xl p-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                            required
                        />
                    </div>
                     <div>
                        <label className="block text-lg font-semibold text-slate-300 mb-3">Escolha seu avatar:</label>
                        <div className="flex justify-center flex-wrap gap-4">
                            {avatarIds.map(avatarId => {
                                const Avatar = avatars[avatarId];
                                return (
                                    <button
                                        key={avatarId}
                                        type="button"
                                        onClick={() => setSelectedAvatar(avatarId)}
                                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 ${selectedAvatar === avatarId ? 'bg-cyan-500 ring-4 ring-cyan-300' : 'bg-slate-700'}`}
                                    >
                                        <Avatar />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                     <button
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-4 rounded-xl text-xl transition-transform transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed"
                        disabled={!name.trim()}
                    >
                        Começar a Aprender
                    </button>
                </form>
            </main>
        </div>
    </div>
  );
};

export default ProfileSetup;