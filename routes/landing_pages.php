<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CaseStudyController;
use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;

use App\Meta;
use App\Services\MarkdownService;
use Inertia\Inertia;

Route::get('/lp/support-agents', function () {
    Meta::addMeta('title', 'Hire Customer Support Agents - Outwork Staffing');
    return Inertia::render('LandingPages/SupportAgents');
});

Route::get('/lp/staging', function () {
    if (env('APP_ENV') != 'local') {
        return redirect('/');
    }
    $resumes = [
        'Operations' => MarkdownService::parse('resumes/operations.md'),
        'Marketing' => MarkdownService::parse('resumes/marketer.md'),
        'Support' => MarkdownService::parse('resumes/support.md'),


    ];
    //dd($resumes);
    return Inertia::render('LP/Staging');
});
