import PlayingVideo from "./PlayingVideo";
import { useSearchParams } from "react-router-dom";

function PlayingVideoContainer() {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <PlayingVideo videoId={searchParams.get("v")} />
    </div>
  );
}

export default PlayingVideoContainer;
