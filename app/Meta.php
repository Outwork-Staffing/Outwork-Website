<?php

namespace App;

class Meta
{
    protected static $meta = [];

    private static function generateCurrentURL()
    {
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://";
        return $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    }

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
            } else if ($name === 'description') {
                echo '<meta property="og:description" content="' . $content . '"/>';
                echo '<meta property="twitter:description" content="' . $content . '"/>';

                $html .= '<meta name="' . $name . '" content="' . $content . '" />' . PHP_EOL;
            } else {
                $html .= '<meta name="' . $name . '" content="' . $content . '" />' . PHP_EOL;
            }
        }

        $html .= '<meta property="og:url" content="' . self::generateCurrentURL() . '" />' . PHP_EOL;
        $html .= '<link rel="canonical" href="' . self::generateCurrentURL() . '" />' . PHP_EOL;

        return $html;
    }
}
