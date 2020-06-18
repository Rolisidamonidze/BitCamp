var quotes = [
    {
        quote: '"ბედს თვითონ კაცი ქმნის და არა ბედი კაცსა."',
        author: "ილია ჭავჭავაძე"
    },
    {
        quote: '"იქ, სადაც სიყვარული ურევია, ყოველივე ლამაზდება."',
        author: "გურამ დოჩანაშვილი"
    },
    {
        quote: '"საკუთარი თავის დამცირება ამპარტავნობაზე უარესია."',
        author: "მიხეილ ჯავახიშვილი"
    }
]

window.onload = init;
function init() {
    generateQuote();
}
function generateQuote(){
    let quotesSize = quotes.length;
    let randomIndex = Math.floor(Math.random() * quotesSize);
    document.getElementById("text").innerText = quotes[randomIndex].quote;
    document.getElementById("author").innerText = quotes[randomIndex].author;     
}