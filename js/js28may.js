// JavaScript source code
function F() {
    document.write("<table border = '1' align='center' style='background-color:aquamarine'>");
    var i; var k; var o = 0; 
    var size1 = prompt("Enter number of cols");
    var size2 = prompt("Enter number of rows");
    var t = (size1 * size2) / size1;
    for (i = 1; i <= size1; i++) {
        document.write("<tr>");
        for (k = 1; k <= size2; k++) {
            if (o === 0) {
                document.write("<td style='background-color: black;color:aquamarine'>" + i * k + "</td>");
                o = 1;
                if (((size1 % 2 === 0 && size2 % 2 === 0) || (size1 % 2 === 1 && size2 % 2 === 0)) && t === k) {
                    o = 0;
                }
            }
            else {
                document.write("<td style='background-color: white'>" + i * k + "</td>");
                o = 0
                if (((size1 % 2 === 0 && size2 % 2 === 0) || (size1 % 2 === 1 && size2 % 2 === 0)) && t === k) {
                    o = 1;
                }
            }

        }
        document.write("</tr>");
    }
    document.write("</table");
}

//// JavaScript source code
//function F() {
//    document.write("<table border = '1' align='center' style='background-color:aquamarine'>");
//    var i; var k; var o = 0;
//    var size1 = prompt("Enter number of columns:");
//    var size2 = prompt("Enter number of rows:");
//    var t = (size1 * size2) / size1;
//    for (i = 1; i <= size1; i++) {
//        if (size1 % 2 == 0 || size2 % 2 == 0)
//            o++;
//        document.write("<tr>");
//        for (k = 1; k <= size2; k++) {
//            if (o % 2 === 0) {
//                document.write("<td style='background-color: black;color:aquamarine'>" + i * k + "</td>");
//                o++;

//            }
//            else {
//                document.write("<td style='background-color: white'>" + i * k + "</td>");
//                o++;
//            }

//        }
//        document.write("</tr>");
//    }
//    document.write("</table");
//}

