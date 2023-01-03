const forms = () => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const inputsPhone = document.querySelectorAll('input[name="user_phone"]');

    inputsPhone.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, "");
        })
    })

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...',
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    }

    const postData = async (url, data) => { // в этой функци есть асинхронные операции

        console.log('test in postData ');
        document.querySelector('.status').textContent =  message.loading;

        let res = await fetch(url ,{ //ждет выполнение fetch
            method: 'POST',
            body: data,
        })

        return await res.text(); // ждет выполнение .text();

    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log('test postData');
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => { 
                        statusMessage.remove();
                    }, 5000)
                })
        })
    })
};

export default forms;

