//> db.pci_promotion.find({}, {_id: 0}).pretty();
var data1 = [
        {
                "bl" : "lte-n",                         // mandatory, the same as the defination in pci_hierarchy
                "product" : "tdd-macro",                // mandatory, the same as the defination in pci_hierarchy
                "branch" : "trunk",                     // mandatory, the same as the defination in pci_hierarchy
                "day" : "2016-05-18",                   // mandatory, YYYY-MM-DD, timezone is +08:00
                "timestamp" : 1463500741,               // query timestamp(unix timestamp)
                "result" : [
                        {
                                "name" : "qt",                              // mandatory, test name
                                "auto" : "TL00_ENB_9999_160518_045389",     //build name, which updated by coop API.
                                "manual" : "TL00_ENB_9999_160518_045398",   //build name,which posted by tester
                                "order" : 101           // mandatory, the same as the defination in pci_hierarchy
                        },
                        {
                                "name" : "cit",
                                "auto" : "TL00_ENB_9999_160518_045379",
                                "manual" : "TL00_ENB_9999_160518_045399",
                                "order" : 201           // mandatory, the same as the defination in pci_hierarchy
                        }
                ]
        },
        {
                "bl" : "lte-n",
                "product" : "tdd-macro",
                "branch" : "branch",
                "day" : "2016-06-17",
                "timestamp" : 1463500740,
                "result" : [
                        {
                                "name" : "qt",
                                "auto" : "TL00_ENB_9999_160617_045380",
                                "manual" : "TL00_ENB_9999_160617_045388",
                                "order" : 1
                        },
                        {
                                "name" : "crt",
                                "auto" : "TL00_ENB_9999_160617_045390",
                                "manual" : "TL00_ENB_9999_160617_045399",
                                "order" : 301
                        }
                ]
        }
];

data1 = [
 {"_id":"575f739abc8e586de023760d","bl":"lte-n","product":"tdd-macro","branch":"trunk","day":"2016-05-17","timestamp":1463500740,
    "result":[{"name":"qt","auto":"TL00_ENB_9999_160517_045380","manual":"TL00_ENB_9999_160517_045388","order":101},
    {"name":"cit","auto":"TL00_ENB_9999_160517_045390","manual":"TL00_ENB_9999_160517_045399","order":201}]
 },
 {"_id":"575f739abc8e586de023760e","bl":"lte-n","product":"tdd-macro","branch":"trunk","day":"2016-06-17","timestamp":1463500740,"result":[{"name":"qt","auto":"TL00_ENB_9999_160617_045380","manual":"TL00_ENB_9999_160617_045388","order":1},{"name":"cit","auto":"TL00_ENB_9999_160617_045390","manual":"TL00_ENB_9999_160617_045399","order":201}]
 }
];
console.log(typeof data1);
var data_lines = data1.length ;//used for row control.
var row_lines = data_lines + 2;
console.log(row_lines);
var projectid = 0;

var phase = ["QT", "CIT", "CRT"];//存放QT phase，该长度决定了表格有多少列。
console.log(phase[0] + phase[1]);
var auto_build_id = "";
var manu_build_id = "";
var timestamp = {};

for (var i = 0; i < data_lines; i++) {
    var tmpid = data1[i]["result"].length;
    if (tmpid > projectid) projectid = tmpid; //get the max columns.

}
var project_length = projectid * 2;
console.log(project_length);
function showRowOrColTable(){
    //create table
    var table = document.createElement("table");
    table.border = "1";

    for ( var i = 0; i < row_lines; i++) {
        var row = table.insertRow(i);
        for ( var j = 0; j < project_length + 1; j++) {
            var cell = row.insertCell(j);
            if ( i > 1) {
                cell.innerHTML = "hello_" + i + j; //赋值内容
            }
        }
    }

    //first cell first lines.
    table.rows[0].cells[0].rowSpan = 2;//control table head first cell's row #
    for (var i = 1; i <= projectid; i++) {
        table.rows[0].cells[i].colSpan = 2;//control col
        //删除第一行多余的cell
        var firstRow = table.rows[0];
        firstRow.deleteCell(projectid + 1);
    }

    //second line, need to delete one cell.
    table.rows[1].deleteCell(0);

    //table first and second line content.
    table.rows[0].cells[0].innerHTML = "date";
    for (var i = 1; i <= projectid; i++) {
        table.rows[0].cells[i].innerHTML = phase[i-1];
        console.log("i=" + i);
        console.log("phase=" + phase[i-1]);
    }
    //table.rows[0].cells[1].innerHTML = "QTQ";
    //table.rows[0].cells[2].innerHTML = "CCCT";

    for (var i = 0; i < project_length; i++) {
        if (i%2 == 0) table.rows[1].cells[i].innerHTML = "Build ID";
        else table.rows[1].cells[i].innerHTML = "Type";
    }
    document.getElementById("pro_table").appendChild(table);
}
window.onload = showRowOrColTable;
//addLoadEvent(showRowOrColTable);


