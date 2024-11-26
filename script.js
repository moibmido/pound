async function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const apiKey = 'bad8a57b267bc52073fbfeb3'; // استبدل بمفتاح الـ API الخاص بك
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            const rate = data.conversion_rates[toCurrency];
            const result = (amount * rate).toFixed(2);
            document.getElementById('result').innerText = `${result} ${toCurrency}`;
        } else {
            document.getElementById('result').innerText = 'حدث خطأ في استدعاء البيانات!';
        }
    } catch (error) {
        document.getElementById('result').innerText = 'حدث خطأ، حاول مرة أخرى!';
    }
}
