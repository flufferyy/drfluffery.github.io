function onLoaded() {
    // Loaded for sure.
    yeet();

    removeLoader();

    // opacity init
    window.setTimeout(doFadeIn, 250);
}

function removeLoader() {

    var circlecont = $("#circlecont"),
        loaderText = $("#loaderText"),
        loaderbg = $("#loader");

    circlecont.css({
        "animation": "closeLoader ease-in 0.5s forwards, closeLoaderBg ease-in 0.5s forwards"
    });

    loaderText.css({
        "animation": "closeLoader ease-in 0.5s forwards, closeLoaderBg ease-in 0.5s forwards"
    });

    window.setTimeout(function(){
        loaderbg.css({
            "animation": "closeLoaderBg ease-in 0.5s forwards"
        });
    }, 250);

    window.setTimeout(function(){
        loaderbg.remove();
    }, 800);
}