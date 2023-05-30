let leadtable = document.getElementById("tbody");
let output = "";
let leadArr = JSON.parse(localStorage.getItem("leaderboard"));
leadArr.sort((a,b) => b.studScore - a.studScore);

for (let i = 0; i < leadArr.length; i++) {
  console.log(leadArr[i].studScore);
    output += `
    <tr class="table-warning">
    <th scope="row">${leadArr.indexOf(leadArr[i])+1}</th>
    <td>${leadArr[i].studFName}</td>
    <td>${leadArr[i].studScore}</td>
    <td>${leadArr[i].studSchool}</td>
</tr>
    `;
  leadtable.innerHTML = output;
}