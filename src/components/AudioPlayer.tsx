import React, { useRef } from 'react';

type AudioPlayerProps = {
  src: string;
  index: number;
  onPlay: (index: number) => void;
};


const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, index, onPlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <div className="my-4">
      <audio
        id={`audio-${index}`}
        ref={audioRef}
        controls
        className="w-full"
        onPlay={() => {
          if (onPlay && typeof index === "number") {
            onPlay(index);
          }
        }}
      >
        <source src={src} type="audio/mp3" />
        Ваш браузер не поддерживает аудиопроигрывание.
      </audio>
    </div>
  );
};

export default AudioPlayer;