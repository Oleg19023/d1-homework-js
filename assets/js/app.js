function atm(sum) {
    var denominations = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var atmState = {
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
    var result = {};
    var totalBills = 0;

    for (var i = 0; i < denominations.length; i++) {
        var denomination = denominations[i];
        if (sum >= denomination && atmState[denomination] > 0) {
            var billsNeeded = Math.floor(sum / denomination);
            var billsToGive = Math.min(billsNeeded, atmState[denomination], 40 - totalBills);

            if (billsToGive > 0) {
                result[denomination] = billsToGive;
                sum -= billsToGive * denomination;
                totalBills += billsToGive;
            }
        }
    }

    if (sum > 0) {
        return 'Банкомат не может выдать запрошенную сумму';
    } else {
        return result;
    }
}

function calculateBills() {
    var sum = document.getElementById('sum').value;
    var result = atm(sum);
    var resultText = '';
    for (var denomination in result) {
        resultText += 'Купюр номиналом ' + denomination + ' грн: ' + result[denomination] + '\n';
    }
    document.getElementById('resultContainer').innerText = resultText;
}
