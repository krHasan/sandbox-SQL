$(document).ready(function () {
    $('#menuContainer').load('menu.html');

    (function () {
        var elements = document.querySelectorAll("code");

        elements.forEach(function (element) {
            var text = element.textContent;

            // #015493 light blue
            let lightBlueArray = ['SELECT', 'FROM', 'GROUP BY', 'AS', 'SET', 'DELETE', 'WHERE', 'HAVING'];
            lightBlueArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), "<span style='color: #015493; font-weight: bold'>$&</span>");
            });

            // #C16D27 orange
            let orangeArray = ['ROUND', 'SUM', 'COUNT'];
            orangeArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), "<span style='color: #C16D27'>$&</span>");
            })

            // #FFEE7F tael
            let tealArray = ['FOREIGN_KEY_CHECKS'];
            tealArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), "<span style='color: #109cb2'>$&</span>");
            })

            // #f44336 red
            let greenArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1024'];
            greenArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), "<span style='color: #f44336'>$&</span>");
            });

            // #648522 light green
            var regex = /(["])(?:(?=(\\?))\2.)*?\1/g;
            text = text.replace(regex, "<span style='color: #648522'>$&</span>");

            element.innerHTML = text;
        });
    })();
})