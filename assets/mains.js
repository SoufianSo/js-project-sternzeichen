const horoscopeButton = document.getElementById("showHoroscope");
const birthMonthSelect = document.getElementById("birthMonth");
const horoscopeResult = document.getElementById("horoscopeResult");

const horoscopeData = {
  Mar: "Today your patience might be tested when one or more of your projects gets put on hold by someone...",
  Apr: "Your intense energy makes you a great candidate for a leadership position right now, so if you are...",
  May: "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that...",
  Jun: "Too many different elements in your life are overlapping with each other right now—and it's your...",
  Jul: "The issues you'll be dealing with today are very complicated ones—you will have to navigate your...",
  Aug: "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all...",
  Sep: "Pick a cultural event that's coming up and get some tickets for it today.",
  Oct: "Someone will challenge a belief that you've held for a very long time today—and they will say an...",
  Nov: "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...",
  Dec: "Breaking the rules is not always a bad thing—especially if the rules limit your creativity.",
  Jan: "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great...",
  Feb: "Communication is very important today—written, spoken, and even nonverbal body language will all...",
};

horoscopeButton.addEventListener("click", () => {
  const selectedMonth = birthMonthSelect.value;
  const horoscopeText = horoscopeData[selectedMonth];
  horoscopeResult.innerHTML = `<p>${horoscopeText}</p>`;
});
