<?php

namespace App\Helpers;

use Contentful\RichText\Renderer;
use Contentful\RichText\Node\Text;

class Helpers
{
    public static function extractPlainText($node)
    {
        $text = '';

        if ($node instanceof Text) {
            $text .= $node->getValue();
        } else {
            foreach ($node->getContent() as $childNode) {
                $text .= self::extractPlainText($childNode);
            }
        }

        return $text;
    }
}
