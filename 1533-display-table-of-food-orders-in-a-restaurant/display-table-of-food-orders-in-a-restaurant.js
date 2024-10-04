/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    const tableMap = {};
    const foodSet = new Set();

    for (let order of orders){
        [name, tableNum, dish] = order;

        foodSet.add(dish);

        if(!tableMap[tableNum]){
            tableMap[tableNum] = {};
        }

        tableMap[tableNum][dish] = tableMap[tableNum][dish] + 1 || 1;
    }
   
    const foodItems = Array.from(foodSet).sort()
    
    const displayTable = [];
    const header = ["Table", ...foodItems];
    displayTable.push(header);

    const tableNums = Object.keys(tableMap).sort((a,b) => Number(a) - Number(b));

    for (let table of tableNums){
        const row = [table];
        for (let dish of foodItems){
            row.push((tableMap[table][dish] || 0).toString());
        }
        displayTable.push(row);
    }
    return displayTable;
};