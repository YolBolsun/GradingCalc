/**
 * Created by jonathanschenker on 10/9/15.
 */
function add_fields() {
    var newElement = "<br /><span>Grade: <input class = 'grade' type='text'style='width:48px;'value='' />" +
        "</span> <span>Weight: <input class='weight' type='text' style='width:48px'  value='' />";
    $('#wrapper').append(newElement);
}

function submit()
{
    console.log("Submitted");
    var Grades = [];
    var Weights = [];
    $(".grade").each(function() {
        if(!isNaN(this.value)) {
            Grades.push(parseFloat(this.value, 10));
        }
        else
            Grades.push(0);
    });
    $(".weight").each(function() {
        if(!isNaN(this.value)) {
            Weights.push(parseFloat(this.value, 10));
        }
        else
            Weights.push(0);
    });
    $.ajax({
        method: 'POST',
        url:'/average',
        data: {grades:Grades, weights:Weights},
        success:function(data)
        {
            console.log(data.average);
            alert("Current Grade: " + data.average);
        },
        error:function(err)
        {
            if(err && err.responseJSON)
            {
                console.log("error" + err.responseJSON.E);
                alert("Error: " + err.responseJSON.E);
            }
            else
                alert("An Error Occurred");

        }
    });
    /*  Average Function
    console.log("Grades: " + Grades.length);
    console.log("Weights: " + Weights.length);
    var total = 0;
    var tWeight = 0;
    for(var i=0; i<Weights.length; i++)
    {
        tWeight += Weights[i];
    }
    console.log(tWeight);
    if(tWeight != 1 && tWeight != 100)
    {
        var x = tWeight;
        if(tWeight < 1)
            x = tWeight*100;
        x = parseInt(x, 10);
        alert("Weights must add up to 100% - Current: " + x + "%");
        return;
    }

    for(var i=0; i<Weights.length; i++)
    {
        console.log(Grades[i] + " at " + Weights[i]);
        total += Grades[i]*(Weights[i]/tWeight);
    }
    alert("Current Grade: " + total);
    */
}