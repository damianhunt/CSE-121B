    
const subtract = function (number1, number2) {
    return number1 - number2;
}
const multiply =  (number1, number2) => number1 * number2;

const divide = function(number1, number2) {
    return number1 / number2;
}



const calculate = () => {
    let txFrequency = parseInt(document.querySelector("#txFrequency").value);
    let rxFrequency = subtract(txFrequency, 7.05);
    let txDuplexor = multiply((multiply((divide(49.5 , txFrequency)) , 100)) , 2);
    let rxDuplexor = multiply((multiply((divide(49.5 , rxFrequency)) , 100)) , 2);
    roundRxFrequency = rxFrequency.toFixed(4);
    roundTxDuplexor = txDuplexor.toFixed(2);
    roundRxDuplexor = rxDuplexor.toFixed(2);
    //let result = multiply(factor1, factor2);
    document.querySelector("#rxFrequency").value = roundRxFrequency;
    document.querySelector("#txDuplexor").value = roundTxDuplexor;
    document.querySelector("#rxDuplexor").value = roundRxDuplexor;

}

document.querySelector("#calculate").addEventListener("click", calculate);


const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear;    

    //if transmit <= 200:
    //receive_result = round(transmit - 7.05, 4)
    //tx_duplex_result = round((49.5 / transmit)*100 * 2, 2)
    //rx_duplex_result = round((49.5 / receive_result)*100 * 2, 2)
//else:
    //receive_result = round(transmit - 10, 4)
    //tx_duplex_result = round((49.5 / transmit)*100 * 4, 2)
    //rx_duplex_result = round((49.5 / receive_result)*100 * 4, 2)