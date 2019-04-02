
var articles = null;
var articleIndex = 0;

function generateArticle() {

    var article;

    //looks for the subContainer that has not been populated yet.  
    $($(".subContainer").get().reverse()).each(function() {
        if($(this).find("h1").html() == "") {
            article = $(this);
        } else {
            return false;
        }
    });

    article.find("h1").html(articles.articleArray[articleIndex].title);
    var paragraphs = articles.articleArray[articleIndex].paragraphs;
    for(i = 0; i < paragraphs.length; i++) {
        article.append("<p>" + paragraphs[i] + "</p>");
    }
    var linksIndex = 0;
    article.find('a').each(function() {
        if(articles.articleArray[articleIndex].links != undefined && linksIndex < articles.articleArray[articleIndex].links.length) {
            $(this).attr("href", articles.articleArray[articleIndex].links[linksIndex]);
            $(this).attr("target","_blank");
            linksIndex += 1;
        }
    });
    article.append("<img src='" + articles.articleArray[articleIndex].image + "'>");

    articleIndex++;
    if(articleIndex >= articles.articleArray.length) {
        $("#mainContainer").append("<div class='copyright'>Copyright \u00A9 Matt Agius " + new Date().getFullYear() + "</div>")
    }
}

$(document).ready(function() {
    var graduationDate = new Date('May 11, 2019');
    if(Date.now() < graduationDate) {
        $("#graduationDate").html("will graduate in May of 2019");
        $("#graduationTense").html("");
    }

    $.getJSON("data/articles.json?", function(json) {
        articles = json;
        $('#mainContainer').jscroll({
            padding: 30,
            loadingHtml: '',
            autoTriggerUntil: articles.articleArray.length
        });
    });

    $('#dots').particleground({
        dotColor: '#000000',
        lineColor: '#000000',
        density: 70000,
        minSpeedX: .1,
        maxSpeedX: .5,
        minSpeedY: .1,
        maxSpeedY: .5,
        particleRadius: 200,
        parallaxMultiplier: 100,
        proximity: 10
    });

    $('#particles').particleground({
        dotColor: '#000000',
        lineColor: '#000000',
        density: 8000,
        minSpeedX: .1,
        maxSpeedX: .5,
        minSpeedY: .1,
        maxSpeedY: .5,
        particleRadius: 15,
        parallaxMultiplier: 15,
        proximity: 100
    });
});