// We're given a table, we need to read an e-mail from the input and delete it, 
// returning 'Deleted.' if done, and 'Not found.', if the e-mail doesn't exist in the table.

function deleteByEmail() {
    const query = document.querySelector('input[name="email"]').value;

    const rows = document.querySelectorAll('#customers tbody tr');

    const rowsArray = Array.from(rows);

    let deleted = false;

    for (let row of rowsArray) {
        const col = row.children[1];

        if(col.textContent == query) {
            row.remove();
            deleted = true;
        }
    }

    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
}