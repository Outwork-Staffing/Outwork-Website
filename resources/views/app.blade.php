<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <meta property="og:type" content="website" />
  <link rel="icon" type="image/svg+xml" href="/fav.svg">

  @vite('resources/js/app.js')
  @vite('resources/css/app.css')
  @inertiaHead
  {!! \App\Meta::render() !!}

</head>

<body>
  @inertia
</body>

</html>