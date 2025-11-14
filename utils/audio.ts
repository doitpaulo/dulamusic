import { AudioPayload } from '../types';

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const A4_FREQ = 440;
const A4_INDEX = NOTES.indexOf('A');
const A4_OCTAVE = 4;

const getNoteFrequency = (note: string): number => {
    const match = note.match(/([A-G][#b]?)([0-9])/);
    if (!match) return 0;

    let noteName = match[1];
    const octave = parseInt(match[2], 10);
    
    if (noteName.includes('b')) {
        const noteIndex = NOTES.indexOf(noteName[0]);
        // Simple flat to sharp conversion
        const sharpIndex = (noteIndex - 1 + NOTES.length) % NOTES.length;
        noteName = NOTES[sharpIndex];
    }

    const noteIndex = NOTES.indexOf(noteName);
    if (noteIndex === -1) return 0;

    const semitonesFromA4 = (noteIndex - A4_INDEX) + (octave - A4_OCTAVE) * 12;
    
    return A4_FREQ * Math.pow(2, semitonesFromA4 / 12);
};

export const playAudio = (audioContext: AudioContext, payload: AudioPayload) => {
    const { type, notes, chords, duration = 0.5, staccato = false } = payload;
    const now = audioContext.currentTime;
    let startTime = now;

    const playNote = (freq: number, start: number, dur: number) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, start);
        
        // Simple envelope
        gainNode.gain.setValueAtTime(0, start);
        gainNode.gain.linearRampToValueAtTime(0.3, start + 0.02); // Quick attack

        const releaseTime = staccato ? dur * 0.3 : dur * 0.9;
        gainNode.gain.exponentialRampToValueAtTime(0.0001, start + releaseTime);

        oscillator.start(start);
        oscillator.stop(start + dur);
    };

    if (type === 'sequence' && notes) {
        notes.forEach((note, index) => {
            const freq = getNoteFrequency(note);
            if (freq > 0) {
                playNote(freq, startTime + index * duration, duration);
            }
        });
    } else if (type === 'chord' && notes) {
        notes.forEach(note => {
            const freq = getNoteFrequency(note);
            if (freq > 0) {
                playNote(freq, startTime, duration);
            }
        });
    } else if (type === 'progression' && chords) {
        const chordDuration = duration;
        chords.forEach((chord, index) => {
            const chordStartTime = startTime + index * chordDuration;
            chord.forEach(note => {
                const freq = getNoteFrequency(note);
                if (freq > 0) {
                    playNote(freq, chordStartTime, chordDuration);
                }
            });
        });
    }
};
