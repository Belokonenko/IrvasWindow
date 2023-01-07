import checkNumIputs from "./checkNumInput";

const forms = (state) => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    checkNumIputs('input[name="user_phone"]');

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

            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
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

