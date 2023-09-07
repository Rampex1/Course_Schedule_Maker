const asclist1 = ['U0800', 'U0815', 'U0830', 'U0845', 'U0900', 'U0915', 'U0930', 'U0945', 'U1000', 'U1015', 'U1030', 'U1045', 'U1100', 'U1115', 'U1130', 'U1145', 'U1200', 'U1215', 'U1230', 'U1245', 'U1300', 'U1315', 'U1330', 'U1345', 'U1400', 'U1415', 'U1430', 'U1445', 'U1500', 'U1515', 'U1530', 'U1545', 'U1600', 'U1615', 'U1630', 'U1645',
 'U1700', 'U1715', 'U1730', 'U1745']  
const asclist2 = ['M0800', 'M0815', 'M0830', 'M0845', 'M0900', 'M0915', 'M0930', 'M0945', 'M1000', 'M1015', 'M1030', 'M1045', 'M1100', 'M1115', 'M1130', 'M1145', 'M1200', 'M1215', 'M1230', 'M1245', 'M1300', 'M1315', 'M1330', 'M1345', 'M1400', 'M1415', 'M1430', 'M1445', 'M1500', 'M1515', 'M1530', 'M1545', 'M1600', 'M1615', 'M1630', 'M1645', 'M1700', 'M1715', 'M1730', 'M1745', 'T0800', 'T0815', 'T0830', 'T0845', 'T0900', 'T0915', 'T0930', 'T0945', 'T1000', 'T1015', 'T1030', 'T1045', 'T1100', 'T1115', 'T1130', 'T1145', 'T1200', 'T1215', 'T1230', 'T1245', 'T1300', 'T1315', 'T1330', 'T1345', 'T1400', 'T1415', 'T1430', 'T1445', 'T1500', 'T1515', 'T1530', 'T1545', 'T1600', 'T1615', 'T1630', 'T1645', 'T1700', 'T1715', 'T1730', 'T1745', 'W0800', 'W0815', 'W0830', 'W0845', 'W0900', 'W0915', 'W0930', 'W0945', 'W1000', 'W1015', 'W1030', 'W1045', 'W1100', 'W1115', 'W1130', 'W1145', 'W1200', 'W1215', 'W1230', 'W1245', 'W1300', 'W1315', 'W1330', 'W1345', 'W1400', 'W1415', 'W1430', 'W1445', 'W1500', 'W1515', 'W1530', 'W1545', 'W1600', 'W1615', 'W1630', 'W1645', 'W1700', 'W1715', 'W1730', 'W1745', 'H0800', 'H0815', 'H0830', 'H0845', 'H0900', 'H0915', 'H0930', 'H0945', 'H1000', 'H1015', 'H1030', 'H1045', 'H1100', 'H1115', 'H1130', 'H1145', 'H1200', 'H1215', 'H1230', 'H1245', 'H1300', 'H1315', 'H1330', 'H1345', 'H1400', 'H1415', 'H1430', 'H1445', 'H1500', 'H1515', 'H1530', 'H1545', 'H1600', 'H1615', 'H1630', 'H1645', 'H1700', 'H1715', 'H1730', 'H1745', 'F0800', 'F0815', 'F0830', 'F0845', 'F0900', 'F0915', 'F0930', 'F0945', 'F1000', 'F1015', 'F1030', 'F1045', 'F1100', 'F1115', 'F1130', 'F1145', 'F1200', 'F1215', 'F1230', 'F1245', 'F1300', 'F1315', 'F1330', 'F1345', 'F1400', 'F1415', 'F1430', 'F1445', 'F1500', 'F1515', 'F1530', 'F1545', 'F1600', 'F1615', 'F1630', 'F1645', 'F1700', 'F1715', 'F1730', 'F1745', 'S0800', 'S0815', 'S0830', 'S0845', 'S0900', 'S0915', 'S0930', 'S0945', 'S1000', 'S1015', 'S1030', 'S1045', 'S1100', 'S1115', 'S1130', 'S1145', 'S1200', 'S1215', 'S1230', 'S1245', 'S1300', 'S1315', 'S1330', 'S1345', 'S1400', 'S1415', 'S1430', 'S1445', 'S1500', 'S1515', 'S1530', 'S1545', 'S1600', 'S1615', 'S1630', 'S1645', 'S1700', 'S1715', 'S1730', 'S1745']

function toggleOpen() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


  currentDate = new Date();
  startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) /
      (24 * 60 * 60 * 1000));
      
  var weekNumber = Math.ceil(
      (currentDate.getDay() + 1 + days) / 7);
  document.getElementById("weekNumber").innerHTML = "Week " + weekNumber + "/52";


function init() {

fetch("./b.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
  var dropdown = document.getElementById("myDropdown")
  for (var k in jsondata) {
    var div = document.createElement("div")
    var option = document.createElement("a");
    option.className = "task__name";
    option.id = k;
    option.innerHTML = k;
    div.appendChild(option)
    //PUT FUNCTION HERE
    div.onclick = (k) => {
      const id = k.path[0].id

      var test = document.getElementById("myInput")
      test.innerHTML = id;

      var test2 = document.getElementById("test2")
      //test2.innerHTML = jsondata[id]
      const temp = jsondata[id]
      const times = []

      
      for (const sub of temp) {
        const x = sub[0]
        const arr2 = x.split(", ")
        const y = sub[1]
        const arr3 = y.split(",")
        times.push(arr2)
        times.push(arr3)
      }

      for (let i of times){
        let element = i
        document.getElementById(element).style.backgroundColor = "green";
      }


      /* Tried to color in between the class, did not work
      for (let i of times){
        let element = i
        if (element == times[0] || element == times[2] || element == times[4]){
          let randomColor = Math.floor(Math.random()*16777215).toString(16);
          console.log(element)
          console.log(asclist1)
          for (c of asclist1){
            if (element == c) {
            for (let j = asclist1.indexOf(element); j++; asclist1.indexOf(asclist1[times.indexOf(element) + 1])){
              let m = asclist[j]
              document.getElementById(m).style.backgroundColor = "#" + randomColor;
 
            }
          }}
          for (c of asclist2){
            if (element == c) {
            for (let j = asclist2.indexof(element); j++; asclist2.indexOf(asclist2[times.indexOf(element) + 1])){
              let m = asclist[j]
              document.getElementById(m).style.backgroundColor = "#" + randomColor;
           
            }
          }}
    
        }
      } */

    }
    dropdown.appendChild(div) 
  }
   

});

}


