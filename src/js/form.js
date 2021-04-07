$(document).ready(function () {
    $('.send__form-btn').click(function (e){
        e.preventDefault();
        let name = $("#user-name").val();
        let tel = $("#user-tel").val();
        let email = $("#user-email").val();
        let comment = $("#user-comment").val();
        let text = `<b>Имя пользователя:</b> ${name}%0A<b>Телефон:</b> ${tel}%0A<b>Email:</b> ${email}%0A<b>Комментарий:</b> ${comment}%0A`;
        let chatID = "-565626597";

        fetch(`https://api.telegram.org/bot1793783589:AAF2hxe9ZOEBEhDhWJh4ZcTEe4M34y4xmVk/sendMessage?chat_id=${chatID}&parse_mode=html&text=${text}`)
            .then( function (response) {
                $('.backdrop').addClass("is-hidden");
                $("#user-name").val('');
                $("#user-tel").val('');
                $("#user-email").val('');
                $("#user-comment").val('');

            });
    });
});