
//Add a new grade field
function add_fields() {
    var newElement = "<br /><span>Grade: <input class = 'grade' type='text'style='width:48px;'value='0' />" +
        "</span> <span>Weight: <input class='weight' type='text' style='width:48px'  value='0' />";
    $('#wrapper').append(newElement);
}

//Submit grades and weights to server
function submit()
{
    console.log("Submitted");
    var Grades = [];
    var Weights = [];
    //Find all grades as floats
    $(".grade").each(function() {
        if(!isNaN(this.value)) {
            Grades.push(parseFloat(this.value, 10));
        }
        else
            Grades.push(0);
    });
    //Find all weights as floats
    $(".weight").each(function() {
        if(!isNaN(this.value)) {
            Weights.push(parseFloat(this.value, 10));
        }
        else
            Weights.push(0);
    });
    postToServer(Grades, Weights);
    return {grades:Grades, weights:Weights};
}

//Ajax POST to average with weights and grades
function postToServer(Grades, Weights)
{
    $.ajax({
        method: 'POST',
        url:'/average',
        data: {grades:Grades, weights:Weights},
        success:function(data)
        {
            //Success - Alert with average
            console.log(data.average);
            alert("Current Grade: " + data.average);
        },
        error:function(err)
        {
            //Error - Alert with error
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