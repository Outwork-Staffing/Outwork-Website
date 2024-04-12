<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CaseStudyController;
use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;

use App\Meta;
use Inertia\Inertia;

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
        $imageUrl = $post->image->getFile()->getUrl();
        $resizedImageUrl = $imageUrl . '?w=500&h=500&fit=fill&fm=webp';

        $formattedPosts[] = [
            'title' => $post->getTitle(),
            'img' => $resizedImageUrl,
        ];
    }

    Meta::addMeta('title', 'Outwork Staffing - Hire Elite Global Talent');
    Meta::addMeta('description', 'Hire Elite Talent at a Fraction of the Cost of US Counterparts. We are a recruiting firm built to help US companies hire quality talent globally for between $900-$1500 a month!');


    return Inertia('Home', ['roles' => $formattedPosts]);
});



Route::get('/virtual-assistant-guide', function () {
    Meta::addMeta('title', 'Virtual Assistant Guide - Outwork Staffing');
    return Inertia('Guide');
});

Route::get('/virtual-assistant-resource', function () {
    //This is part of a split test. 
    //This variant includes the same resource; but it includes 1) my (Bryan) face 2) different order of data
    Meta::addMeta('title', 'Virtual Assistant Guide - Outwork Staffing');
    return Inertia('Guide2');
});

Route::get('/404', function () {
    Meta::addMeta('title', '404 - Outwork Staffing');

    return Inertia('404');
});
