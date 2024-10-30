document.addEventListener("DOMContentLoaded", () => {
 const data = JSON.parse(localStorage.getItem("data"))
 let sn = 0;
 Object.entries(data).forEach((item) => {
   sn += 1;
   document.getElementById("shipment_list_table").innerHTML += `<tr>
            <td>${sn}</td>
            <td>${item[1].name_input}</td>
            <td>${item[1].origin_input}</td>
            <td>${item[1].destination_input}</td>
            <td>${item[1].weight_input}</td>
            <td>${item[1].shipmentFee_input}</td>
            <td>${item[1].arrivalDate_input}</td>
            <td>${item[1].arrivalTime_input}</td>
        </tr>`;
 });

 console.log(data)
});


// fetch("http://localhost:4000/shipments", {
//   method: "GET",
//   headers: { "Content-Type": "application/json" },
// }).then((response) => {
//   response.json().then((data) => {
//     let sn = 0;
//     Object.entries(data).forEach((item) => {
//       sn += 1;
//       document.getElementById("shipment_list_table").innerHTML += `<tr>
//             <td>${sn}</td>
//             <td>${item[1].shipment_fee}</td>
//             <td>${item[1].name}</td>
//             <td>${item[1].departs_from}</td>
//             <td>${item[1].arriving_at}</td>
//             <td>${item[1].arrival_time}</td>
//         </tr>`;
//     });
//     console.log(data);
//     localStorage.getItem();
//   });
// });