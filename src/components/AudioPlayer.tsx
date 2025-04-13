function AudioPlayer({ src }) {
  return (
    <div className="my-4">
      <audio controls className="w-full">
        <source src={src} type="audio/mp3" />
        Ваш браузер не поддерживает аудиопроигрывание.
      </audio>
    </div>
  );
}

export default AudioPlayer;