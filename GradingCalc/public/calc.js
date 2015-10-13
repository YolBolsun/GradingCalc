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
}