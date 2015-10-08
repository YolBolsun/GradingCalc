##Spec

####An overview description of the assignment
Your team is to design a grade calculator. This grade calculator should be 
accessible via a browser. Therefore, it should contain an HTML page. The 
purpose of this assignment is not to have a fancy HTML. There must be a 
node server to do the processing. The only goal is correctness and 
functionality. 

The user should be able to input a set of data and should receive a grade.
There can be a variable number of grades. Each input should have its own 
field. Each grade should have its own field separate from its percentage 
and from other grades. The data is in the format of grade and then weight. 
The grade will be out of 100. The weight can be out of 1 or the weight can 
be out of 100. Weight should always add up to 1 or 100. If not, then output
an error. 

For example:

Weights are out of 1

| Grade | Weight |
|-------|--------|
| 100   | .5     |
| 93    | .05    |
| 95    | .35    |
| 97    | .10    |

Weights are out of 100

| Grade | Weight |
|-------|--------|
| 100   | 50     |
| 93    | 5      |
| 95    | 35     |
| 97    | 10     |

The important thing is that the calculator should be easily adjustable. For 
example, the user inputted the above data and got a result. However, the user 
wants the theoretical grade if the 93 grade was changed into a 100. The user 
should only have to delete 93, put in 100, and press resubmit to get another 
grade. The user should not have to retype in all the grades.

If the user wants to clear all the data, the user should have access to a clear
all button that clears all the fields.

####A set of user stories
"I wonder what my grade is currently this semester. If only there was an easy way to calculate it."

"I wonder what my final grade would be if I get a 100 on my next exam."

"I wonder what my final grade would be if only I got 5 more points on that homework."

####Software and documentation artifacts that I want delivered
The github repository should be accessible. There should be a readme on how to start
the node server. The HTML page should include directions and the functionality of 
the webpage.

####A quantitative grading guide for the functional aspects of the software
40% for correct output

20% for processing on a node server

20% for saving the input

10% for a clear all field

10% for allowing a variable number of inputs

####A qualitative grading guide for the code style, design, and other aspects
30% for quality of function comments

25% for quality of git commit messages

25% for quality of git bug issues

20% for coding style (encapsulation, simple-clear functions)

####A grading guide for how well your process was used
60% for following the git process

30% for evidence of frequent communication

10% for function comments

####A grading guide for assessing each team member's contribution
Everybody is assumed to have 100%. It is unfair to grade on percentage of work done.
Team members have varying amount of proficiency in web development. However, if there
was a discussion with Professor White about an unresponsive team member, there will be
a 40% penalty for that team member.
