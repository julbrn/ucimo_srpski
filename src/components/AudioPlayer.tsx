import React, { useRef } from 'react';

const AudioPlayer = React.memo(({ src, index, onPlay }) => {
  //Добавлен ref для предотвращения одновременного проигрывания аудио (логика в handleAudioPlay )
  const audioRef = useRef(null);

  return (
    <div className="my-4">
      <audio
        id={`audio-${index}`}
        ref={audioRef}
        controls
        className="w-full"
        onPlay={() => onPlay(index)}
      >
        <source src={src} type="audio/mp3" />
        Ваш браузер не поддерживает аудиопроигрывание.
      </audio>
    </div>
  );
});

export default AudioPlayer;