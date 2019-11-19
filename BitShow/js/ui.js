const uiModule = (function () {


    function createShowElements(showList) {
        $parent = $('#shows');

        for (let i = 0; i < showList.length; i++) {
            let $show = $('<div>');
            $show.addClass('show');

            let $image = $('<img>');
            $image.attr('src', showList[i].image);
            $show.append($image);

            let $title = $('<h2>');
            $title.text(showList[i].name);
            $show.append($title);


            $parent.append($show);
        }
    }

    return {
        createShowElements
    }
})()