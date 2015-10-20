//Averaging Functions


function getWeight(Weights)
{
    var tWeight = 0;
    for(var i=0; i<Weights.length; i++)
    {
        tWeight += parseFloat(Weights[i], 10);
    }
    return tWeight;
}

function checkWeight(tWeight)
{
    var x = tWeight;
    if(tWeight < 1)
        x = tWeight*100;
    return x;
}

function average(Grades, Weights, tWeight)
{
    var total = 0;
    for(var i=0; i<Weights.length; i++)
    {
        total += parseFloat(Grades[i],10)*(parseFloat(Weights[i],10)/tWeight);
    }
    return total;
}

module.exports = {getWeight: getWeight, average: average, checkWeight: checkWeight};