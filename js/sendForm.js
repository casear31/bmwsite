const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack,falseCallBack) => {
    
    const request = new XMLHttpRequest();
    request.open('POST', server);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText);
            callBack(response.id);
        } else {
            falseCallBack(request.status)
            throw new Error(request.status)
        }            
    });

    request.send(data);
}

const formElems = document.querySelectorAll('.form');


const formHandler = (form) => {
    const message = document.createElement('p');
    const btnSubmit = form.querySelector('[type="submit"]');

    message.innerHTML = '';

    form.append(message);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = {};
        let flag = true;

        for (const elem of form.elements) {
            const { name, value } = elem;
            if (name) {
                if (value.trim()) {
                    elem.style.border = '';
                    data[name] = value.trim();
                } else {
                    elem.style.border = '1px solid red'
                    flag = false;
                    elem.value = '';
                }
            }
        }
            
        if (!flag) { 
            message.innerHTML = `Пожалуйста, заполните все поля`;
            message.style.color = "#FF0000";
            setTimeout(() => {
                message.innerHTML = '';
                btnSubmit.disabled = false;
                for (const elem of form.elements) {
                    console.log(elem.value);
                    elem.value = '';
                    elem.style.border = '';
                    }
                                
                }, 5000)
                return;
            }
            


            sendData(JSON.stringify(data),
                (id) => {
                    
                    message.innerHTML = `Ваша заявка принята!
                    <br>Номер заявки ${id}
                    <br>Мы свяжемся с Вами в ближайшее время!`;
                    message.style.color = '#00FF00';
                    btnSubmit.disabled = true;

                    setTimeout(() => {
                        message.innerHTML = '';
                        btnSubmit.disabled = false;
                        
                    }, 5000)

                    },
                (err) => {
                    message.innerHTML = `Страница в данный момент недоступна, 
                        <br> попробуйте отправить заявку позже!`;
                    message.style.color = "#FF0000";
                    });

        form.reset();

    })
}

formElems.forEach(formHandler);

