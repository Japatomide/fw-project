document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("data"));

  document.getElementById("shipment_list_table").innerHTML += data.data
    .map((item, index) => {
      return `<tr>
        <td>${index + 1}</td>
            <td>${item.consignmentId}</td>
            <td>${item.name_input}</td>
            <td>${item.origin_input}</td>
            <td>${item.destination_input}</td>
            <td>${item.weight_input} KG</td>
            <td>${item.shipmentFee_input}</td>
            <td>${item.arrivalDate_input}</td>
        </tr>`;
    })
    .join(" ");

  console.log(data);
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
