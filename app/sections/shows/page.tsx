"use client";
import React, { useState, useRef } from "react";
import {
  BsPlayCircleFill,
  BsPauseCircleFill,
  BsFillVolumeUpFill,
  BsVolumeDownFill,
} from "react-icons/bs";
import { SlControlRewind, SlControlForward } from "react-icons/sl";

const Shows = () => {
  const [volumes, setVolume] = useState(0.1);
  const [skipVid, setSkipVid] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playVid = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
    }
  };
  const pauseVid = () => {
    const video = videoRef.current;
    if (video && video.played) {
      video.pause();
    }
  };
  const increaseVolume = () => {
    const volume = videoRef.current;
    if (volume && volume.volume < 1) {
      volume.volume += 0.1;
    }
  };
  const decreaseVolume = () => {
    const volume = videoRef.current;
    if (volume && volume.volume > 0) {
      volume.volume -= 0.1;
    }
  };

  const handleNext = () => {
    const video = videoRef.current;
    if (video) {
      setSkipVid((video.currentTime = skipVid + 5));
    }
  };

  const handleBack = () => {
    const video = videoRef.current;
    if (video) {
      setSkipVid((video.currentTime = skipVid - 5));
    }
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="my-5">
        <table>
          <tbody>
            <tr>
              <td className="bg-[#2686ec] px-3 py-1 rounded text-white text-xl tracking-wide">
                Title
              </td>
              <td className="pl-2 border-b-2 text-xl">My Title</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="">
        <div className="max-w-[1000px] border-4 bg-gray-500 rounded-md border-[#4889B9] p-2 shadow-2xl">
          <video ref={videoRef} controls>
            <source src="/video/video.mp4" id="videoPlayer" />
          </video>
        </div>

        <div className="flex justify-center">
          <div className="max-w-xs bg-gray-400 rounded-b-lg flex flex-wrap">
            <div className="flex justify-center gap-4 p-3">
              <button
                className="btn-gradient flex items-center gap-2"
                onClick={playVid}
              >
                <BsPlayCircleFill size="25" />
              </button>
              <button
                className="bg-red-400 hover:bg-red-500 rounded py-1 px-2 text-white font-semibold transition-all flex items-center gap-2"
                onClick={pauseVid}
              >
                <BsPauseCircleFill size="25" />
              </button>
            </div>

            <div className="flex justify-center gap-4 p-3">
              <button
                className="btn-gradient flex items-center"
                onClick={decreaseVolume}
              >
                <BsVolumeDownFill size="30" />
              </button>
              <button
                className="btn-gradient flex items-center"
                onClick={increaseVolume}
              >
                <BsFillVolumeUpFill size="25" />
              </button>
            </div>
            <div className="flex justify-center w-full gap-x-14 p-3">
              <button
                className="btn-gradient flex items-center"
                onClick={handleBack}
              >
                <SlControlRewind size="25" />
              </button>
              <button
                className="btn-gradient flex items-center"
                onClick={handleNext}
              >
                <SlControlForward size="25" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shows;
