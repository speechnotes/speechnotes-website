#!/bin/bash

# videos: .avi, .mp4, .mpeg, .mov
# audios: .aac, .m4a, .mp3, .ogg, .raw, .flac, .wav, .amr

echo "Making speechnotes-output-audio-only directory"
mkdir -p speechnotes-output-audio-only
echo "Success making speechnotes-output-audio-only directory"

COUNTER=0;
echo "Searching for video files in directory"
for input in *.avi *.mp4 *.mpeg *.mov; do
  # ffmpeg -i "$input" -vn -acodec copy "speechnotes-output-audio-only/$input"
  if [ -f "$input" ]; then
    COUNTER=$((COUNTER + 1))
    echo "Found and converting $input"
    /Applications/speechnotes/speechnotes_ffmpeg/bin/ffmpeg -i "$input" -vn -acodec copy "speechnotes-output-audio-only/$input" -nostdin -loglevel panic
  fi
done
echo "Done. Found total $COUNTER Video files in directory"

