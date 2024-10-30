// Side bar items
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".dashboard-section");
// Forms
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const form4 = document.getElementById("form4");
// Form1 items
const name_input = document.getElementById("name_inp");
const origin_input = document.getElementById("origin_inp");
const destination_input = document.getElementById("destination_inp");
const weight_input = document.getElementById("weight_inp");
const shipmentFee_input = document.getElementById("shipment_fee_inp");
const arrivalDate_input = document.getElementById("arrival_date_inp");
const arrivalTime_input = document.getElementById("arrival_time_inp");
// Form1 errors msgs
const addError1 = document.querySelector(".add_error1");
const addError2 = document.querySelector(".add_error2");
const addError3 = document.querySelector(".add_error3");
const addError4 = document.querySelector(".add_error4");
const addError5 = document.querySelector(".add_error5");
const addError6 = document.querySelector(".add_error6");
const addError7 = document.querySelector(".add_error7");

// Form2 item
const find_input = document.getElementById("find_inp");
// Form2 error msg
const findError = document.querySelector(".find_error");

// Form3 item
const update_input = document.getElementById("update_inp");
// Form3 error msg
const updateError = document.querySelector(".update_error");

// Form4 item
const delete_input = document.getElementById("delete_inp");
// Form4 error msg
const deleteError = document.querySelector(".delete_error");

// Buttons
const find_btn = document.getElementById("find_btn");
const addBtn = document.getElementById("add_btn");

// A function to display the forms on the sidebar
function handleNavClick(event) {
  event.preventDefault();

  sections.forEach((section) => section.classList.remove("active"));

  const targetSection = event.target.getAttribute("data-target");

  document.getElementById(targetSection).classList.add("active");
}

navItems.forEach((item) => item.addEventListener("click", handleNavClick));

document.getElementById("form1").classList.add("active");

// Form Validation

form1.addEventListener("submit", form1Validate);

function form1Validate(e) {
  e.preventDefault();

  // console.log("Success")

  // if (name_input.value === "") {
  //   addError1.classList.add("error_style");
  //   addError1.innerHTML = "Please Enter valid input";

  //   setTimeout(() => addError1.remove(), 3000);

  //   return false;
  // }

  // if (origin_input.value === "") {
  //   addError2.classList.add("error_style");
  //   addError2.innerHTML = "Please Enter the correct origin";

  //   setTimeout(() => addError2.remove(), 3000);

  //   return false;
  // }

  // if (destination_input.value === "") {
  //   addError3.classList.add("error_style");
  //   addError3.innerHTML = "Please Enter the correct destination";

  //   setTimeout(() => addError3.remove(), 3000);

  //   return false;
  // }

  // if (weight_input.value === "") {
  //   addError4.classList.add("error_style");
  //   addError4.innerHTML = "Please Enter the right weight";

  //   setTimeout(() => addError4.remove(), 3000);

  //   return false;
  // }

  // if (shipmentFee_input.value === "") {
  //   addError5.classList.add("error_style");
  //   addError5.innerHTML = "Please Enter the right shipment fee";

  //   setTimeout(() => addError5.remove(), 3000);

  //   return false;
  // }

  // if (arrivalDate_input.value === "") {
  //   addError6.classList.add("error_style");
  //   addError6.innerHTML = "Please Enter the right Arrival date";

  //   setTimeout(() => addError6.remove(), 3000);

  //   return false;
  // }

  // if (arrivalTime_input.value === "") {
  //   addError7.classList.add("error_style");
  //   addError7.innerHTML = "Please Enter the right Arrival date";

  //   setTimeout(() => addError7.remove(), 3000);

  //   return false;
  // }
}

form2.addEventListener("submit", form2Validate);

function form2Validate(e) {
  e.preventDefault();

  if (find_input.value === "") {
    findError.classList.add("error_style");
    findError.innerHTML = "Please enter the this field";

    setTimeout(() => findError.remove(), 3000);

    return false;
  }
}

form3.addEventListener("submit", form3Validate);

function form3Validate(e) {
  e.preventDefault();

  if (update_input.value === "") {
    updateError.classList.add("error_style");
    updateError.innerHTML = "Please enter the this field";

    setTimeout(() => updateError.remove(), 3000);

    return false;
  }
}

form4.addEventListener("submit", form4Validate);

function form4Validate(e) {
  e.preventDefault();

  if (delete_input.value === "") {
    deleteError.classList.add("error_style");
    deleteError.innerHTML = "Please enter the this field";

    setTimeout(() => deleteError.remove(), 3000);

    return false;
  }
}

// Fetch
async function sendAddInputs() {
  try {
    const response = await fetch("http://localhost:3001/consignment", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name_input: name_input.value,
        origin_input: origin_input.value,
        destination_input: destination_input.value,
        weight_input: weight_input.value,
        shipmentFee_input: shipmentFee_input.value,
        arrivalDate_input: arrivalDate_input.value,
        arrivalTime_input: arrivalTime_input.value,
      }),
    });
    const data = await response.json()
    localStorage.setItem("data", JSON.stringify(data))

    if (response.status === 201) {
      window.location.href =
        "http://127.0.0.1:5500/courier_frontend/client/index.html";
    }

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  sendAddInputs();
});
