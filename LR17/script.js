function createCalendar(id, year, month) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInMonth = new Date(year, month, 0).getDate();

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header with days of the week
    const headerRow = document.createElement('tr');
    daysOfWeek.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Create table cells for the days of the month
    let currentDay = 1;
    for (let i = 0; i < 6; i++) { // Assuming at most 6 rows
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            if (currentDay > daysInMonth) {
                break;
            }
            const cell = document.createElement('td');
            cell.textContent = currentDay;
            row.appendChild(cell);
            currentDay++;
        }
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    const calendarContainer = document.getElementById(id);
    calendarContainer.innerHTML = '';
    calendarContainer.appendChild(table);
}

// Usage example:
//createCalendar('calendar', 2024, 2); // September 2023
createCalendar('calendar', 2021, 9); // September 2023