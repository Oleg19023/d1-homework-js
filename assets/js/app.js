function atm(sum) {
    const denominations = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let atmState = {
        1000: 10,
        500: 10,
        200: 10,
        100: 10,
        50: 10,
        20: 10,
        10: 10,
        5: 10,
        2: 10,
        1: 10
    };
    let result = {};
    let totalBills = 0;

    for (let i = 0; i < denominations.length; i++) {
        let denomination = denominations[i];
        if (sum >= denomination && atmState[denomination] > 0) {
            let billsNeeded = Math.floor(sum / denomination);
            let billsToGive = Math.min(billsNeeded, atmState[denomination], 40 - totalBills);

            if (billsToGive > 0) {
                result[denomination] = billsToGive;
                sum -= billsToGive * denomination;
                totalBills += billsToGive;
            }
        }
        if (totalBills > 40) {
            return 'Банкомат не может выдать запрошенную сумму';
        }
    }

    if (sum > 0) {
        return 'Банкомат не может выдать запрошенную сумму';
    } else {
        return result;
    }
}

function calculateBills() {
    let sum = document.getElementById('sum').value;
    let result = atm(sum);
    let resultText = '';
    if (typeof result === 'string') {
        resultText = result;
    } else {
        resultText += 'Терминал выдаст:\n';
        for (let denomination in result) {
            resultText += 'Купюр номиналом ' + denomination + ' грн: ' + result[denomination] + 'шт\n';
        }
    }
    document.getElementById('resultContainer').innerText = resultText;
}

/*     ʕ ᵔᴥᵔ ʔ     */