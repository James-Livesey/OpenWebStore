var markdownSyntax = [
    {regex: /\*\*([^\n]+)\*\*/g, html: "<b>$1</b>"},
    {regex: /\_\_([^\n]+)\_\_/g, html: "<b>$1</b>"},
    {regex: /\*([^\n]+)\*/g, html: "<i>$1</i>"},
    {regex: /\_([^\n]+)\_/g, html: "<i>$1</i>"},
    {regex: /^\*(.+)$/gm, html: "<ul><li>$1</li></ul>"}
];

function generateDescription(text) {
    text = text || "";

    text = text.replace(/&/g, "&amp;");
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");

    for (var i = 0; i < markdownSyntax.length; i++) {
        text = text.replace(markdownSyntax[i].regex, markdownSyntax[i].html);
    }

    text = text.replace(/\n/g, "<br>");
    text = text.replace(/<\/ul><br>/g, "</ul>");

    return text;
}