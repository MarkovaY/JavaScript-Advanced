function extractText() {
    const itemList = document.getElementById('items');
    const items = Array.from(itemList.children);

    const result = items
                    .map(li => li.textContent)
                    .join('\n');

    const output = document.getElementById('result');
    output.value = result;
}