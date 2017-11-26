<?php
    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['street'];
    $house = $_POST['house-number'];
    $block = $_POST['block-number'];
    $flat = $_POST['flat-number'];
    $floor = $_POST['floor-number'];
    $pay = $_POST['pay-option'];
    $comment = $_POST['comment'];
    $callback = $_POST['callback']; // 1 или null 
    $callback = isset($callback) ? 'НЕТ' : 'ДА'; 
    $mail_message = '
    <html>
        <head>
            <title>Заказ на бургер</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $house . '</li>
                <li>Корпус: ' . $block . '</li>
                <li>Квартира: ' . $flat . '</li>
                <li>Этаж: ' . $floor . '</li>
                <li>Вариант оплаты: ' . $pay . '</li>
                <li>Комментарии к заказу: ' . $comment . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
            </ul>
        </body>
    </html>';

    $headers = "From: Заказ с сайта <burgers.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('timberwolf.max@gmail.com', 'Заказ', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }
    echo json_encode($data);
?>