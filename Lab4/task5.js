let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.write("<select id='cities'>");
for (let i = 0; i < cities.length; i++) {
    document.write("<option value='" + cities[i] + "'>" + cities[i] + "</option>");
}
document.write("</select>");