export function formatMoney(amount){
    if(amount < 0){
        return `-$${(((amount/100)*-1).toFixed(2))}`
    }
    return `$${(amount/100).toFixed(2)}`;
};