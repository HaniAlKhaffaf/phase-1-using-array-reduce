const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = 0;
function arraySum(sum, num){
    return sum + num;
}

totalBatteries = batteryBatches.reduce(arraySum, 0)
