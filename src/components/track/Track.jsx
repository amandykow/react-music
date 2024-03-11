import "./Track.scss";
import { IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import { useContext } from "react";
import { AUDIO_CONTEXT } from "../../context/AudioContext";
import { formatToMMSS } from "../../helpers/formatToMMSS";

const Track = ({ track }) => {
	const { preview, artists, title, duration } = track;
	const { handleToggleAudio, isPlaying, currentTrack } =
		useContext(AUDIO_CONTEXT);

	const isCurrentPlay = currentTrack?.id === track.id;
	const musicTime = formatToMMSS(duration);

	// const minutes = ~~(duration / 60);
	// const secunds = ~~(duration % 60);

	return (
		<div className="track">
			<div className="trackLogo">
				<IconButton onClick={() => handleToggleAudio(track)}>
					{isPlaying && isCurrentPlay ? <Pause /> : <PlayArrow />}
				</IconButton>
				<img className="preview" src={preview} alt="" />
				<div className="credits">
					<b>{title}</b>
					<p>{artists}</p>
				</div>
			</div>

			<p>{musicTime}</p>

			{/* <p>
				0{minutes}:{secunds > 10 ? secunds : "0" + secunds}
			</p> */}
		</div>
	);
};

export default Track;
