document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("data"));

  document.getElementById("shipment_list_table").innerHTML += data.data
    .map((item, index) => {
      return `
      <tr scope="row">
                <td>${index + 1}</td>
                <td>${item.consignmentId}</td>
                <td>${item.name_input}</td>
                <td>${item.origin_input}</td>
                <td>${item.destination_input}</td>
                <td>${item.weight_input} KG</td>
                <td>${item.shipmentFee_input}</</td>
                <td>${item.arrivalDate_input}</td>
        </tr>`;
    })
    .join(" ");

  console.log(data);
});

{/* <tr>
  <td>${index + 1}</td>
  <td>${item.consignmentId}</td>
  <td>${item.name_input}</td>
  <td>${item.origin_input}</td>
  <td>${item.destination_input}</td>
  <td>${item.weight_input} KG</td>
  <td>${item.shipmentFee_input}</td>
  <td>${item.arrivalDate_input}</td>
</tr>; */}