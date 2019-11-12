let kata = new Map([
    ['cucumber', 'mentimun'],
    ['tomatoes', 'tomat'],
    ['onion', 'bawang bombai']
]);

kata.set('egg', 'telur');
kata.delete('onion');
clear

console.log(kata.get('onion'));