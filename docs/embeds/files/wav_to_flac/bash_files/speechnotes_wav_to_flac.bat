:: videos: .avi, .mp4, .mpeg, .mov
:: audios: .aac, .m4a, .mp3, .ogg, .raw, .flac, .wav, .amr

if not exist "speechnotes-output-flac" mkdir speechnotes-output-flac

for %%F in (*.wav) do (
    c://speechnotes_ffmpeg/bin/ffmpeg -i "%%F" -ac 1 "speechnotes-output-flac/%%~nF.flac"
)
