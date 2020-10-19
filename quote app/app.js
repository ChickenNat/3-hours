const quotes = [{
    name:'Saitama Sensei',
    quote:'Just a guy who is Hero for fun.' 
},{
    name:'Genos',
    quote:'Notice me sensei.'
},{
    name:'Saitama Sensei',
    quote:'You gotta train like hell until the point when yoor hair falls out. Thats the only way to become truly strong.'
},{
    name:'Garou',
    quote:'the scarier the better. Dont you think scary is cool?'
},{
    name:'t-shirt',
    quote:'Oppai :3'
}]

 const quoteBtn = document.querySelector('#quoteBtn');
 const quoteAuthor = document.querySelector('#quoteAuthor');
 const quote = document.querySelector('#quote');

 quoteBtn.addEventListener('click', displayQuote);

 function displayQuote (){

    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;

    
}