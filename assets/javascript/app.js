// Toast
const toastElement = document.querySelector('#toast');
// Truyền vào 1 object chứa tiêu đề, nội dung, kiểu, thời gian bị ẩn đi
function Toast({
    title = '',
    content = '',
    type = '',
    duration = 3
}) {
    const icons = {
        success: 'fa-solid fa-circle-check',
        infor: 'fa-solid fa-circle-info',
        loading: 'fa-solid fa-spinner',
        warning: 'fa-solid fa-circle-exclamation',
        error: 'fa-solid fa-circle-xmark',
    };
    const icon = icons[type];
    const toast = document.createElement('div');
    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `ScrollIn ease 0.3s, FadeOut linear 1s ${duration}s forwards`;
    toast.innerHTML = `
    <div class="toast__icon">
        <i class="${icon}"></i>
    </div>
    <div class="toast__body">
        <div class="toast__heading">
            <h2>${title}</h2>
        </div>
        <div class="toast__content">
            <p>${content}</p>
        </div>
    </div>
    <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
    </div>
    `;
    toastElement.appendChild(toast);
    var timer;
    timer = setTimeout(function () {
        toastElement.removeChild(toast);
    }, (duration * 1000 + 1000));
    toast.onmouseenter = function () {
        toast.style.animation = '';
        clearTimeout(timer);
    }
    toast.onmouseleave = function () {
        toast.style.animation = `FadeOut linear 1s ${duration}s forwards`;
        return timer = setTimeout(function () {
            toastElement.removeChild(toast);
        }, (duration * 1000 + 1000));
    }
    handleClose(toast, timer);
}

function handleClose(toast, timer) {
    toast.onclick = function (e) {
        if (e.target.closest('.toast__close')) {
            clearTimeout(timer);
            toastElement.removeChild(toast);
        }
    }
}