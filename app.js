document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const bookingsTable = document.getElementById('bookingsTable').getElementsByTagName('tbody')[0];

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        addBooking(name, date, time, guests);

        bookingForm.reset();
    });

    function addBooking(name, date, time, guests) {
        const row = bookingsTable.insertRow();

        const nameCell = row.insertCell(0);
        const dateCell = row.insertCell(1);
        const timeCell = row.insertCell(2);
        const guestsCell = row.insertCell(3);
        const actionCell = row.insertCell(4);

        nameCell.textContent = name;
        dateCell.textContent = date;
        timeCell.textContent = time;
        guestsCell.textContent = guests;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('action-btn');
        deleteButton.addEventListener('click', function () {
            bookingsTable.deleteRow(row.rowIndex - 1);
        });

        actionCell.appendChild(deleteButton);
    }
});
