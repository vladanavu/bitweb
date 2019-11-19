const controllerModule = (function (data, ui) {
    const NUM = 50;

    data.fetchShows(NUM, ui.createShowElements);

})(dataModule, uiModule);