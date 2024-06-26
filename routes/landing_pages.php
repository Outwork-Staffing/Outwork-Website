<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CaseStudyController;
use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;
use App\Helpers\Helpers;
use App\Services\MarkdownService;
use Inertia\Inertia;
use App\Meta;


Route::get('/lp/support-agents', function () {
    Meta::addMeta('title', 'Hire Customer Support Agents - Outwork Staffing');
    return Inertia::render('LandingPages/SupportAgents');
});

Route::get('/lp/staging', function () {
    if (env('APP_ENV') != 'local') {
        //   return redirect('/');
    }
    $resumes = [
        'operations' => MarkdownService::parse('resumes/operations.md'),
        'marketing' => MarkdownService::parse('resumes/marketer.md'),
        'support' => MarkdownService::parse('resumes/support.md'),


    ];

    $client = new DeliveryClient(env('CONTENTFUL_DELIVERY_TOKEN'), env('CONTENTFUL_SPACE_ID'), env('CONTENTFUL_ENVIRONMENT_ID'));
    $testimonials_query = new Query();
    $testimonials_query->setContentType('testimonials')
        ->orderBy('fields.title', true);
    $posts = $client->getEntries($testimonials_query);

    $testimonials = [];
    foreach ($posts as $post) {
        $img = null;
        if ($post->profile) {
            $imageUrl = $post->profile->getFile()->getUrl();
            $img = $imageUrl . '?w=500&h=500&fit=fill&fm=webp';
        }


        $testimonials[] = [
            'quote' => Helpers::extractPlainText($post->quote),
            'title' => $post->getTitle(),
            'name' => $post->name(),
            'img' => 'https:' . $img,
            'action_line' => $post->actionLine,
        ];
    }

    $client = new DeliveryClient(env('CONTENTFUL_DELIVERY_TOKEN'), env('CONTENTFUL_SPACE_ID'), env('CONTENTFUL_ENVIRONMENT_ID'));
    $query = new Query();
    $query->setContentType('caseStudies')
        ->orderBy('fields.date', true)->setLimit(4);
    $posts = $client->getEntries($query);

    $formattedPosts = [];
    foreach ($posts as $post) {
        $imageUrl = $post->featuredImage->getFile()->getUrl();
        $resizedImageUrl = $imageUrl . '?w=500&h=500&fit=fill&fm=webp';

        $formattedPosts[] = [
            'title' => $post->getTitle(),
            'img' => $resizedImageUrl,
            'desc' => $post->getminiBlurb(),
            'slug' => $post->getSlug(),
            'type' => $post->getjobType(),
            'date' =>
            $post->getdate()->format('F jS, Y'),
            'industry' => $post->getIndustry(),
        ];
    }

    return Inertia::render('LP/Staging', [
        'resumes' => $resumes,
        'testimonials' => $testimonials,
        'success_stories' => $formattedPosts
    ]);
});


Route::get('/lp/startups-for-the-rest-of-us', function () {

    Meta::addMeta('title', 'Outwork Staffing - Hire International Talent for Your Startup');


    $resumes = [
        'operations' => MarkdownService::parse('resumes/operations.md'),
        'marketing' => MarkdownService::parse('resumes/marketer.md'),
        'support' => MarkdownService::parse('resumes/support.md'),


    ];

    $client = new DeliveryClient(env('CONTENTFUL_DELIVERY_TOKEN'), env('CONTENTFUL_SPACE_ID'), env('CONTENTFUL_ENVIRONMENT_ID'));
    $testimonials_query = new Query();
    $testimonials_query->setContentType('testimonials')
        ->orderBy('fields.title', true);
    $posts = $client->getEntries($testimonials_query);

    $testimonials = [];
    foreach ($posts as $post) {
        $img = null;
        if ($post->profile) {
            $imageUrl = $post->profile->getFile()->getUrl();
            $img = $imageUrl . '?w=500&h=500&fit=fill&fm=webp';
        }


        $testimonials[] = [
            'quote' => Helpers::extractPlainText($post->quote),
            'title' => $post->getTitle(),
            'name' => $post->name(),
            'img' => 'https:' . $img,
            'action_line' => $post->actionLine,
        ];
    }

    $client = new DeliveryClient(env('CONTENTFUL_DELIVERY_TOKEN'), env('CONTENTFUL_SPACE_ID'), env('CONTENTFUL_ENVIRONMENT_ID'));
    $query = new Query();
    $query->setContentType('caseStudies')
        ->orderBy('fields.date', true)->setLimit(4);
    $posts = $client->getEntries($query);

    $formattedPosts = [];
    foreach ($posts as $post) {
        $imageUrl = $post->featuredImage->getFile()->getUrl();
        $resizedImageUrl = $imageUrl . '?w=500&h=500&fit=fill&fm=webp';

        $formattedPosts[] = [
            'title' => $post->getTitle(),
            'img' => $resizedImageUrl,
            'desc' => $post->getminiBlurb(),
            'slug' => $post->getSlug(),
            'type' => $post->getjobType(),
            'date' =>
            $post->getdate()->format('F jS, Y'),
            'industry' => $post->getIndustry(),
        ];
    }

    return Inertia::render('LandingPages/MicroConfAd', [
        'resumes' => $resumes,
        'testimonials' => $testimonials,
        'success_stories' => $formattedPosts
    ]);
})->name('startups-for-the-rest-of-us');
