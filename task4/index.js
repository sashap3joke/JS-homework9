//В папці [task4](task4/) створіть HTML-сторінку з 6 чекбоксами. 
//Підключіть бібліотеку **JQuery** та напишіть скріпт, 
//який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.

const $checkboxes = $(':checkbox');
$checkboxes.on('click', function () {
    if ($(':checkbox:checked').length == 3) {
        $checkboxes.attr('disabled', 'true');
    };
  });
