function getInputValuById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}

function setElementById(elementId, newValue){
    const newElement = document.getElementById(elementId)
    newElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = getInputValuById('deposit-field');
    const oldDepositTotal = getElementValueById('deposit-total');

    const newDepositTotal = oldDepositTotal + depositField;
    setElementById('deposit-total', newDepositTotal);


    const oldBalanceTotal = getElementValueById('balance-total');

    const newBalanceTotal = oldBalanceTotal + depositField;
    setElementById('balance-total', newBalanceTotal);
})



