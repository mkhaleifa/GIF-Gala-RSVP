const form = document.getElementById("rsvpForm");
const confirmationMessage = document.getElementById("confirmationMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const email = document.getElementById("email").value;
  const attendance = document.getElementById("attendance").value;

  document.body.classList.remove("sorry-background");

  if (attendance === "yes") {
    confirmationMessage.textContent = `🎉 Thanks, ${email}! We can’t wait to see you at the GIF Gala!`;
    document.body.classList.add("party-background"); 

  } else if (attendance === "no") {
    confirmationMessage.textContent = `😔 Sorry you can’t make it, ${email}. We’ll miss you at the GIF Gala!`;
    document.body.classList.add("sorry-background"); 
  } else {
    confirmationMessage.textContent = "Please select your attendance option.";
  }

  confirmationMessage.style.display = "block";
});
