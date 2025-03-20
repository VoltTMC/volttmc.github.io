function openVideoPlayer(videoName)
{
    try
    {
        document.getElementById(videoName).classList.remove("closeVideo");
    }
    catch
    {

    }
    document.getElementById(videoName).classList.add("openVideo");
}

function closeVideoPlayer(videoName)
{
    document.getElementById(videoName).classList.remove("openVideo");
    document.getElementById(videoName).classList.add("closeVideo");
    document.getElementById(videoName + "Video").pause();
}