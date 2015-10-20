//Averaging Functions

//Takes the Weights as input
//Returns the total weight
function getWeight(Weights)
{
    var tWeight = 0;
    for(var i=0; i<Weights.length; i++)
    {
        tWeight += parseFloat(Weights[i], 10);
    }
    return tWeight;
}
//Takes the total weight, if it is 1 or less, it returns the total weight multiplied by 100
function checkWeight(tWeight)
{
    var x = tWeight;
    if(tWeight <= 1)
        x = tWeight*100;
    return x;
}

//averages the grades with the total weight == 100
function average(Grades, Weights, tWeight)
{
    var total = 0;
    for(var i=0; i<Weights.length; i++)
    {
        total += parseFloat(Grades[i],10)*(parseFloat(Weights[i],10)/tWeight);
    }
    return total;
}

module.exports = {getWeight: getWeight, checkWeight: checkWeight, average: average};