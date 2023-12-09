<?php

namespace App;

class Meta
{
    protected static $meta = [];

    public static function addMeta($name, $content)
    {
        static::$meta[$name] = $content;
    }

    public static function render()
    {
        $html = '';
        foreach (static::$meta as $name => $content) {
            if ($name === 'title') {
                echo '<title>' . $content . '</title>';
                echo '<meta property="og:title" content="' . $content . '"/>';
                echo '<meta property="twitter:title" content="' . $content . '"/>';


                $html .= '<meta name="' . $name . '" content="' . $content . '" />' . PHP_EOL;
            } else {
                $html .= '<meta name="' . $name . '" content="' . $content . '" />' . PHP_EOL;
            }
        }
        return $html;
    }
}
