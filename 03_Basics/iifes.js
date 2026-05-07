(function chai(){
    //named iife
    console.log(`DB CONNECTED`)
})();


( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED to ${name}`)
})("Owais");

