//Traverse (Redo Gallery):

var $firstImage = $(".selected");

$firstImage.click(traversy);

function traversy() {
    $firstImage.removeClass('.selected')
    $firstImage.parent().next().children().first().next().addClass("selected");
}