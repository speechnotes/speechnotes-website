:: videos: .avi, .mp4, .mpeg, .mov
:: audios: .aac, .m4a, .mp3, .ogg, .raw, .flac, .wav, .amr

if not exist "speechnotes-output-mp3" mkdir speechnotes-output-mp3

for %%F in (*.wav) do (
    c://speechnotes_ffmpeg/bin/ffmpeg -i "%%F" -ac 1 "speechnotes-output-mp3/%%~nF.mp3"
)
