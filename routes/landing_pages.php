<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CaseStudyController;
use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;

use App\Meta;
use Inertia\Inertia;

Route::get('/lp/support-agents', function () {
    Meta::addMeta('title', 'Hire Customer Support Agents - Outwork Staffing');

    return Inertia::render('LandingPages/SupportAgents');
});
