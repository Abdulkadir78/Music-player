function Song({ photo, title, artist, duration }) {
  return (
    <div className="flex gap-5">
      <img src={photo} alt="poster" className="w-12 h-12 rounded-full" />
      <div className="flex items-center justify-between w-full">
        <div className="w-full">
          <h6 className="text-sm w-11/12 xl:truncate">{title}</h6>
          <span className="text-xs opacity-60 truncate">{artist}</span>
        </div>

        <span className="text-sm opacity-60 w-1/12">
          {new Date(duration * 1000)?.toISOString()?.substring(14, 19)}
        </span>
      </div>
    </div>
  );
}

export default Song;
