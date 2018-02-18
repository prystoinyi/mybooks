var arr = [];
var str = new Object();
var str = JSON.stringify(arr[0]);

function foundBook(ID) {
    for (var i = 0; i < arr.length; i++) {

    }
}

$(document).ready(function () {
    $('#btnLoad').click(function () {
        $.ajax({
            url: 'api/book',
            method: 'GET',
            success: function (data) {
                //$('#divData').removeClass('hidden');
                $('#listData').empty();
                $.each(arr = data, function (index, value) {
                    var row = $('<div class="item"><div class="thumbnail item' + value.ID + '"><div class="container"><h3 class="col-sm-12">'
                        + value.Name + '<h4 class="col-sm-10">'
                        + value.Author + '</h4><p class="col-sm-2"><a href="#" class="mdi mdi-lead-pencil btn btn-success btn-md  position" onclick="foundBookId(' + value.ID + ')" data-toggle="modal" data-target="#edit"></a><a href="#" class="mdi mdi-window-close btn btn-danger btn-md  position btnDelete" onclick="Delete(' + value.ID + ')"></a></p></div></div></div>');

                    $('#listData').append(row);
                });
                salvattore.recreateColumns($('#listData')[0]);
            },
        })
    })
    $('#btnCreate').click(function () {
        var obj = new Object();
        obj.Name = $('#name').val();
        obj.Author = $('#author').val();
        obj.PublicationYear = $('#publication').val();
        obj.Edition = $('#editing').val();

        //var obj = {
        //    'Name': $('#editName').val(),
        //    'Author': $('#editAuthor').val(),
        //    'PublicationYear': $('#editPublication').val(),
        //    'Edition': $('#editEditing').val()
        //};

        //var str = JSON.stringify(obj);

        $.ajax({
            url: 'api/book',
            type: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                $.ajax({
                    url: 'api/book',
                    method: 'GET',
                    success: function (data) {
                        //$('#divData').removeClass('hidden');
                        $('#listData').empty();
                        $.each(arr = data, function (index, value) {
                            var row = $('<div class="item"><div class="thumbnail item' + value.ID + '"><div class="container"><h3 class="col-sm-12">'
                                + value.Name + '<h4 class="col-sm-10">'
                                + value.Author + '</h4><p class="col-sm-2"><a href="#" class="mdi mdi-lead-pencil btn btn-success btn-md  position" onclick="foundBookId(' + value.ID + ')" data-toggle="modal" data-target="#edit"></a><a href="#" class="mdi mdi-window-close btn btn-danger btn-md  position btnDelete" onclick="Delete(' + value.ID + ')"></a></p></div></div></div>');

                            $('#listData').append(row);
                        });
                        salvattore.recreateColumns($('#listData')[0]);
                    },
                })
            }

        })
    })

    $('#btnUpdate').click(function () {
        var updt = new Object();
        var id;
        id = arr[elementArray].ID;

        updt.Name = $('#editName').val();
        updt.Author = $('#editAuthor').val();
        updt.PublicationYear = $('#editPublication').val();
        updt.Edition = $('#editEditing').val();

        $.ajax({
            url: 'api/book/' + id,
            type: "PUT",
            data: JSON.stringify(updt),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $.ajax({
                    url: 'api/book',
                    method: 'GET',
                    success: function (data) {
                        //$('#divData').removeClass('hidden');
                        $('#listData').empty();
                        $.each(arr = data, function (index, value) {
                            var row = $('<div class="item"><div class="thumbnail item' + value.ID + '"><div class="container"><h3 class="col-sm-12">'
                                + value.Name + '<h4 class="col-sm-10">'
                                + value.Author + '</h4><p class="col-sm-2"><a href="#" class="mdi mdi-lead-pencil btn btn-success btn-md  position" onclick="foundBookId(' + value.ID + ')" data-toggle="modal" data-target="#edit"></a><a href="#" class="mdi mdi-window-close btn btn-danger btn-md  position btnDelete" onclick="Delete(' + value.ID + ')"></a></p></div></div></div>');

                            $('#listData').append(row);
                        });
                        salvattore.recreateColumns($('#listData')[0]);
                    },
                })
            },
        })

    })

});
function Delete(index) {
    $.ajax({
        url: 'api/book/' + index,
        type: "DELETE",
        success: function () {
            //window.location = "/";
            $('.item' + index).remove();
            $.ajax({
                url: 'api/book',
                method: 'GET',
                success: function (data) {
                    //$('#divData').removeClass('hidden');
                    $('#listData').empty();
                    $.each(arr = data, function (index, value) {
                        var row = $('<div class="item"><div class="thumbnail item' + value.ID + '"><div class="container"><h3 class="col-sm-12">'
                            + value.Name + '<h4 class="col-sm-10">'
                            + value.Author + '</h4><p class="col-sm-2"><a href="#" class="mdi mdi-lead-pencil btn btn-success btn-md  position" onclick="foundBookId(' + value.ID + ')" data-toggle="modal" data-target="#edit"></a><a href="#" class="mdi mdi-window-close btn btn-danger btn-md  position btnDelete" onclick="Delete(' + value.ID + ')"></a></p></div></div></div>');

                        $('#listData').append(row);
                    });
                    salvattore.recreateColumns($('#listData')[0]);
                },
            })
        }
    })
}

var elementArray;
function foundBookId(id) {



    for (var i = 0; i < arr.length; i++) {
        if (id == arr[i].ID) {
            elementArray = i;
        }
    }

    $('#editName').val(arr[elementArray].Name);
    $('#editAuthor').val(arr[elementArray].Author);
    $('#editPublication').val(arr[elementArray].PublicationYear);
    $('#editEditing').val(arr[elementArray].Edition);



}