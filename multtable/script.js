
window.onload = table;

function table() {
		
		var rows = prompt("Enter number of rows");

		var cols = prompt("Enter number of columns")
// this will hold the generated code to put into the html



		var html = "";
    // holds whether the current cell if even or odd,

    // if even the cell is blue, if odd the cell is green

		var evenOdd;
		document.write("<h1 color>Multiplication Table</h1>");

     
    // start constructing table

		html += "<table bgcolor='black'>";

		html += "<tr width=100 height=100>";

     

    // print column headers

	for (i = 0; i <= cols; i++) 
	{

			var evenOdd = i % 2;

			if (evenOdd == 0)

				html += ("<td bgcolor='orange' width=100 height=100 ><b>" + i + "</b></td>");

			else

				html += ("<td bgcolor='orange' width=100 height=100><b>" + i + "</b></td>");

	}

     

    html += "</tr>";

     

    for (i = 1; i <= rows; i++)

    {

        // this creates the row number

        html += ("</br><tr><td bgcolor='orange' width=100 height=100><b>" + i + "</b></td>");

         

        for (j = 1; j <= cols; j++)

        {

            var number = i * j;

            html += ("<td bgcolor='orange' width=100 height=100>" + number + "</td>");

        }

        html += "</tr>";

    }

         html += "</table>";


    document.write(html);

     
}
