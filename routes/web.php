<?php

use Illuminate\Support\Facades\Route;
use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $client = new DeliveryClient(env('CONTENTFUL_DELIVERY_TOKEN'), env('CONTENTFUL_SPACE_ID'), env('CONTENTFUL_ENVIRONMENT_ID'));
    $query = new Query();
    $query->setContentType('examplePositions')
        ->orderBy('fields.title', true);
    $posts = $client->getEntries($query);

    $formattedPosts = [];
    foreach ($posts as $post) {
        $formattedPosts[] = [
            'title' => $post->getTitle(),
            'img' => $post->image->getFile()->getUrl(),
        ];
    }



    return Inertia('Home', ['roles' => $formattedPosts]);
});

Route::get('/why-outsource', function () {
    return Inertia('Home');
});

Route::get('/services', function () {
    return Inertia('Home');
});

Route::get('/about', function () {
    return Inertia('Home');
});

Route::get('/start-hiring', function () {
    return Inertia('StartHiring');
});

Route::get('/meeting-booked', function () {
    return Inertia('MeetingBooked');
});
