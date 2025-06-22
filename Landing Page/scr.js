const monthYear = document.getElementById("month-year");
const datesContainer = document.getElementById("dates");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  monthYear.textContent = `${date.toLocaleString("default", { month: "long" })} ${year}`;
  datesContainer.innerHTML = "";

  // Empty slots before 1st day
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("div");
    datesContainer.appendChild(blank);
  }

  // Dates
  for (let d = 1; d <= lastDate; d++) {
    const day = document.createElement("div");
    day.textContent = d;
    if (isCurrentMonth && d === today.getDate()) {
      day.classList.add("today");
    }
    datesContainer.appendChild(day);
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);


