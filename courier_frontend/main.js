// Forms
const form_add = document.getElementById("form-add");
const form_find = document.getElementById("form-find");
const form_update = document.getElementById("form-update");
const form_delete = document.getElementById("form-delete");

// Add Form Input fields
const name_input = document.getElementById("name-input")
const origin_input = document.getElementById("origin")
const destination_input = document.getElementById("destination")
const weight_input = document.getElementById("weight")
const shipment_fee_input = document.getElementById("shipment_fee")
const arrival_date_input = document.getElementById("arrival_date")


// Error messages
const error_message1 = document.querySelector(".error-message1")
const error_message2 = document.querySelector(".error-message2")
const error_message3 = document.querySelector(".error-message3")
const error_message4 = document.querySelector(".error-message4")
const error_message5 = document.querySelector(".error-message5")
const error_message6 = document.querySelector(".error-message6")



// Sidebar Nav Items
const sidebar_items = document.querySelectorAll(".sidebar-item");

// Dashboard sections
const sections = document.querySelectorAll(".dashboard-section");

// Function to handle which form("dashboard-section") is shown when nav-item("sidebar-item is clicked")
function handleNavClick(event) {
  event.preventDefault();

  sections.forEach((section) => section.classList.remove("active"));
  const targetSection = event.target.getAttribute("data-target");
  document.getElementById(targetSection).classList.add("active");
}

sidebar_items.forEach((item) => item.addEventListener("click", handleNavClick));
// By default the "form-add" is shown first
document.getElementById("form-add").classList.add("active");

// Input Validation
form_add.addEventListener("submit", form_add_validate)

function form_add_validate(e) {
  e.preventDefault()

  if(name_input.value === ""){
    error_message1.classList.add("error_message_style")
    error_message1.innerHTML = "Please enter this field"

    setTimeout(() => error_message1.remove() ,3000)

    return false;
    }
    if(origin_input.value === ""){
      error_message2.classList.add("error_message_style")
      error_message2.innerHTML = "Please enter this field"
  
      setTimeout(() => error_message2.remove() ,3000)
  
      return false;
      }
      if(destination_input.value === ""){
        error_message3.classList.add("error_message_style")
        error_message3.innerHTML = "Please enter this field"
    
        setTimeout(() => error_message3.remove() ,3000)
    
        return false;
        }
        if(weight_input.value === ""){
          error_message4.classList.add("error_message_style")
          error_message4.innerHTML = "Please enter this field"
      
          setTimeout(() => error_message4.remove() ,3000)
      
          return false;
          }
          if(shipment_fee_input.value === ""){
            error_message5.classList.add("error_message_style")
            error_message5.innerHTML = "Please enter this field"
        
            setTimeout(() => error_message5.remove() ,3000)
        
            return false;
            }
            if(arrival_date_input.value === ""){
              error_message6.classList.add("error_message_style")
              error_message6.innerHTML = "Please enter this field"
          
              setTimeout(() => error_message6.remove() ,3000)
          
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
        shipmentFee_input: shipment_fee_input.value,
        arrivalDate_input: arrival_date_input.value,
      }),
    });
    const data = await response.json();
    console.log(data);

    localStorage.setItem("data", JSON.stringify(data));

    if (response.status === 201) {
      window.location.href =
        "http://127.0.0.1:5500/courier_frontend/product_display/product_display.html";
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
