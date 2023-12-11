<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <meta property="og:type" content="website" />
  <link rel="icon" type="image/svg+xml" href="/fav.svg">

  <meta property="og:image" content="/social_share.png" />
  <meta name="twitter:image" content="/social_share.png">

  @vite('resources/js/app.js')
  @vite('resources/css/app.css')
  @inertiaHead
  {!! \App\Meta::render() !!}
  <script>
    ! function(t, e) {
      var o, n, p, r;
      e.__SV || (window.posthog = e, e._i = [], e.init = function(i, s, a) {
        function g(t, e) {
          var o = e.split(".");
          2 == o.length && (t = t[o[0]], e = o[1]), t[e] = function() {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
          }
        }(p = t.createElement("script")).type = "text/javascript", p.async = !0, p.src = s.api_host + "/static/array.js", (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
        var u = e;
        for (void 0 !== a ? u = e[a] = [] : a = "posthog", u.people = u.people || [], u.toString = function(t) {
            var e = "posthog";
            return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e
          }, u.people.toString = function() {
            return u.toString(1) + ".people (stub)"
          }, o = "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "), n = 0; n < o.length; n++) g(u, o[n]);
        e._i.push([i, s, a])
      }, e.__SV = 1)
    }(document, window.posthog || []);
    posthog.init('phc_ms5RtHFBjKsiQTS3cuPU1fI1lK9NuGz7RigmwANV3cT', {
      api_host: 'https://app.posthog.com'
    })
  </script>

  <!-- Google Tag Manager -->
  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-PBMLSN7');
  </script>
  <!-- End Google Tag Manager -->
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBMLSN7" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  @inertia
</body>
<script>
  window.SavvyCal = window.SavvyCal || function() {
    (SavvyCal.q = SavvyCal.q || []).push(arguments)
  };
</script>
<script async src="https://embed.savvycal.com/v1/embed.js"></script>
<script>
  SavvyCal('init', {
    widget: {
      enabled: true,
      link: 'bryan-outwork-staffing/inquiry',
      prompt: 'Book an inquiry call',
      backgroundColor: '#152a29',
      textColor: '#ffffff'
    }
  });
</script>

</html>