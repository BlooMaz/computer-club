<%
' Retrieve the form data sent from the frontend
Dim name, IC, username, password, address, gender, email, classValue, age, numphone
name = Request.Form("name")
IC = Request.Form("IC")
username = Request.Form("username")
password = Request.Form("password")
address = Request.Form("address")
gender = Request.Form("gender")
email = Request.Form("email")
classValue = Request.Form("class")
age = Request.Form("age")
numphone = Request.Form("numphone")

' Retrieve the interests array
Dim interests()
interests = Request.Form("interests")

' Display the data
Response.Write("<h2>Registration Details:</h2>")
Response.Write("<p>Name: " & name & "</p>")
Response.Write("<p>IC Number: " & IC & "</p>")
Response.Write("<p>Username: " & username & "</p>")
Response.Write("<p>Password: " & password & "</p>")
Response.Write("<p>Home Address: " & address & "</p>")
Response.Write("<p>Gender: " & gender & "</p>")
Response.Write("<p>Email: " & email & "</p>")
Response.Write("<p>Class: " & classValue & "</p>")
Response.Write("<p>Age: " & age & "</p>")
Response.Write("<p>Telephone: " & numphone & "</p>")

Response.Write("<h2>Interests:</h2>")
If IsArray(interests) Then
    Dim interest
    For Each interest In interests
        Response.Write("<p>" & interest & "</p>")
    Next
Else
    Response.Write("<p>No interests selected.</p>")
End If
%>