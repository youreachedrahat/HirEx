import React, { useEffect, useState } from 'react';
import ffmpeg from 'ffmpeg.js/ffmpeg-mp4';

function BlobToVideo({ blob }) {
  const [videoUrl, setVideoUrl] = useState(null);
  useEffect(() => {
    async function convertBlobToVideo() {
      const data = await blob.arrayBuffer();
      const result = await ffmpeg({
        MEMFS: [{ name: 'input.mp4', data }],
        arguments: ['-i', 'input.mp4', 'output.webm'],
      });

      const videoBlob = new Blob([result.MEMFS[0].data], { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(videoBlob);

      setVideoUrl(videoUrl);
    }

    convertBlobToVideo();
  }, [blob]);

  return (
    <video controls>
      <source src={videoUrl} type="video/webm" />
    </video>
  );
}