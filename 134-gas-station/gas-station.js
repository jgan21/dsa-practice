/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let startIndex = 0;
    let currentBalance = 0;

    for (let i = 0; i < gas.length; i++){
        totalGas += gas[i];
        totalCost += cost[i];
        currentBalance += gas[i] - cost[i]; 

        if (currentBalance < 0){
            startIndex = i + 1;
            currentBalance = 0;
        }
    }
    if (totalGas < totalCost) return -1; 
    return startIndex;
};