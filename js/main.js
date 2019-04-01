
var articles = null;
var articleIndex = 0;

function generateArticle() {
    if(articles == null) {
        setTimeout(function() {
            generateArticle();
        }, 1000);
        return false;
    }

    var article = $($(".subContainer").get().reverse()[0]);
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
    //if there are no articles left the last 'a' has its href removed which stops the jscroll from adding more articles
    if(articleIndex >= articles.articleArray.length) {
        $($("a").get().reverse()[0]).attr("href", "");
        $("#mainContainer").append("<div class='copyright'>Copyright \u00A9 Matt Agius " + new Date().getFullYear() + "</div>")
    }
}

$(document).ready(function() {
    var graduationDate = new Date('May 11, 2019');
    if(Date.now() < graduationDate) {
        $("#graduationDate").html("will graduate in May of 2019");
        $("#graduationTense").html("");
    }

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

    $.getJSON("data/articles.json?", function(json) {
        articles = json;
    });

    $('#mainContainer').jscroll({
        padding: 30,
        loadingHtml: ''
    });
});