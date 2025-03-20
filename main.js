// Массив с кодами
const codes = [
    {
        title: "Первый код",
        content: `{% if member.getAttribute('miner') == '1' %}
Вы уже устроены на работу шахтёром
{% else %} 
{% do member.getAttribute('commands').increment(1) %}
{% do member.getAttribute('miner').increment(1) %}
Вы успешно устроились на работу шахтёром
{% endif %}`
    },
    {
        title: "Второй код",
        content: `{% if member.getAttribute('miner') == '1' %}
{% set rand2 = random(10, 110) %}
{% do member.getAttribute('money').increment(rand2) %}
Вы успешно заработали {{rand2}} монет в шахте!
{% else %}
Вы не работаете
{% endif %}`
    },
    {
        title: "Третий код",
        content: `{% if member.getAttribute('miner') == 0 %}
{% return "**Вы не устроены на работу шахтёром**" %}
{% else %} 
{% do member.getAttribute("miner").update(0) %}
Вы успешно уволились с работы шахтёр 
{% endif %}`
    }
];

// Функция для поиска по массиву
function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = codes.filter(code => code.title.toLowerCase().includes(query) || code.content.toLowerCase().includes(query));
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = results.map(result => `
        <div class="block">
            <h3>${result.title}</h3>
            <pre>${result.content}</pre>
        </div>
    `).join('') || '<p>Ничего не найдено.</p>';
}