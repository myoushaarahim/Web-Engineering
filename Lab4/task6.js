let reg = prompt("Enter Registration Number:");
    let name = prompt("Enter Name:");
    let semester = prompt("Enter Semester:");

    let web = parseInt(prompt("Web Engineering Marks:"));
    let cp = parseInt(prompt("Computer Programming Marks:"));
    let oop = parseInt(prompt("Object Oriented Programming Marks:"));
    let dsa = parseInt(prompt("Data Structures & Algorithms Marks:"));
    let ai = parseInt(prompt("Artificial Intelligence Marks:"));

    let total = web + cp + oop + dsa + ai;
    let percentage = (total / 500) * 100;

    let grade;

    if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    // Writing table using document.write()
    document.write("<h2>Student Grade Sheet</h2>");
    document.write("<table border='1' cellpadding='8'>");

    document.write("<tr>");
    document.write("<th>Reg No</th><th>Name</th><th>Semester</th>");
    document.write("<th>Web</th><th>CP</th><th>OOP</th>");
    document.write("<th>DSA</th><th>AI</th>");
    document.write("<th>Total</th><th>Percentage</th><th>Grade</th>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + reg + "</td>");
    document.write("<td>" + name + "</td>");
    document.write("<td>" + semester + "</td>");
    document.write("<td>" + web + "</td>");
    document.write("<td>" + cp + "</td>");
    document.write("<td>" + oop + "</td>");
    document.write("<td>" + dsa + "</td>");
    document.write("<td>" + ai + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("<td>" + percentage.toFixed(2) + "%</td>");
    document.write("<td>" + grade + "</td>");
    document.write("</tr>");

    document.write("</table>");