
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = getInputValuById('withdraw-field');
    const oldWithdrawTotal = getElementValueById('total-withdraw');

    const oldBalanceTotal = getElementValueById('balance-total');

    if(oldBalanceTotal < withdrawField){
        alert('Insuficcient Balance');
        return;
    }

    else{
        const newWithdrawTotal = oldWithdrawTotal + withdrawField;
        setElementById('total-withdraw', newWithdrawTotal);
    
    
        const newBalanceTotal = oldBalanceTotal - withdrawField;
        setElementById('balance-total', newBalanceTotal);

        
    }
    


}) 