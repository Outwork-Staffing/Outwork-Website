<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Parsedown;
use Symfony\Component\Yaml\Yaml;

class MarkdownService
{
    public static function parse($filePath)
    {
        $content = file_get_contents(Storage::path($filePath));

        // Extract front matter
        preg_match('/^---(.*?)---/s', $content, $matches);
        $frontMatter = Yaml::parse($matches[1]);

        // Extract Markdown content
        $markdownContent = preg_replace('/^---(.*?)---/s', '', $content);

        $parsedown = new Parsedown();
        $htmlContent = $parsedown->text($markdownContent);

        return [
            'meta' => $frontMatter,
            'content' => $htmlContent,
        ];
    }
}
