const URL = "https://v1.appbackend.io/v1/rows/WVpfiHZ7SGfG";

async function getData(URL) {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
}

async function main() {
  const URL = "https://v1.appbackend.io/v1/rows/WVpfiHZ7SGfG";
  const reminders = await getData(URL);
  console.log(reminders);

  reminders.data.forEach((reminder) => {
    const reminderContainer = document.createElement("div");
    const bigTitleElement = document.createElement("h2");
    const titleElement = document.createElement("h3");
    const dateElement = document.createElement("p");

    bigTitleElement.textContent = "Your Reminder";
    titleElement.textContent = reminder.title;
    dateElement.textContent = reminder.date;

    reminderContainer.append(bigTitleElement, titleElement, dateElement);

    document.body.append(reminderContainer);
  });
}

main();

const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", async () => {
  const titleValue = titleInput.value;
  const dateValue = dateInput.value;

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify([{ title: titleValue, date: dateValue }]),
  });
  window.location.reload();
});
