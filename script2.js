btn6.addEventListener("click",fnc);

function fnc() {
    a = parseInt(digit.value);
    console.log(a);
    if (a > 100) {
        result.innerHTML = "Проект приносить прибуток!";
        result.classList.add("correct");
    }
    else {
        if (a == 100) {
            result.innerHTML = "Проект окупився, але не приносить прибуток. Перегляньте проект та перевірте, який процес не дозволяє вам розвиватися.";
            result.classList.add("middle");
        }
        else {
            
                result.innerHTML = "Інвестиції не окупилися, ви вклали більше, ніж отримали. Подумайте, чи варто продовжувати вкладати гроші в проект, але для початку порівняйте інші показники ефективності.";
                result.classList.add("incorrect");
        }
    }
}