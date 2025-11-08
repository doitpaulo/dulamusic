import React from 'react';

export const NoteAvatar = () => <div className="text-4xl">🎵</div>;
export const ClefAvatar = () => <div className="text-4xl">🎼</div>;
export const GuitarAvatar = () => <div className="text-4xl">🎸</div>;
export const PianoAvatar = () => <div className="text-4xl">🎹</div>;
export const MetronomeAvatar = () => <div className="text-4xl">⏱️</div>;
export const MicAvatar = () => <div className="text-4xl">🎤</div>;


export const avatars: { [key: string]: React.FC } = {
  note: NoteAvatar,
  clef: ClefAvatar,
  guitar: GuitarAvatar,
  piano: PianoAvatar,
  metronome: MetronomeAvatar,
  mic: MicAvatar,
};

export const avatarIds = Object.keys(avatars);
