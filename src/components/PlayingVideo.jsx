function PlayingVideo({ videoId, title }) {
  return (
    <div className="w-250">
      <iframe
        className="w-250 aspect-video"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="text-2xl font-semibold mt-3">
        {title || "Now Playing"}
      </div>
    </div>
  );
}

export default PlayingVideo;
