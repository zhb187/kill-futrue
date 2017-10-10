<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div id="app">

        </div>
    </body>
    <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
</html>
