//State 
    let selectList = [
        "Odessa", "Dnepr", "Kyiv", "Kherson", "lviv"
    ];
    $('.calculation__inputState').select2({
        data: selectList,
        containerCssClass: "error",
        dropdownCssClass: "test",
        maximumInputLength: 30
    });
    $('.calculation__inputState').on('select2:select', function (e) {
        $('.scoreboard__stateList')[0].innerHTML += e.params.data.text + "<br>"
    });
    $('.calculation__inputState').on('select2:unselecting', function (e) {
        $('.scoreboard__stateList')[0].innerHTML = $('.scoreboard__stateList')[0].innerHTML.replace(e.params.args.data.text + "<br>", '')
    });

//inputDate
    $('#inputDate').datepicker({
        onSelect(formattedDate) {
            String.prototype.replaceAll = function (find, replace) {
                var str = this;
                return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
            };
            let updDate = formattedDate.replaceAll('.', '/');
            $('#result').html(updDate);
            $('.scoreboard__dataList')[0].innerHTML = updDate
        }
    });

//validation
    $('#form').parsley().on('field:validated', function () {}).on('form:submit', function () {
        return false;
    });
