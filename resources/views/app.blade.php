<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

  <!-- Start VWO Async SmartCode -->
  <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
  <script type='text/javascript' id='vwoCode'>
    window._vwo_code || (function() {
      var account_id = 823345,
        version = 2.0,
        settings_tolerance = 2000,
        hide_element = 'body',
        hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
        /* DO NOT EDIT BELOW THIS LINE */
        f = false,
        w = window,
        d = document,
        v = d.querySelector('#vwoCode'),
        cK = '_vwo_' + account_id + '_settings',
        cc = {};
      try {
        var c = JSON.parse(localStorage.getItem('_vwo_' + account_id + '_config'));
        cc = c && typeof c === 'object' ? c : {}
      } catch (e) {}
      var stT = cc.stT === 'session' ? w.sessionStorage : w.localStorage;
      code = {
        use_existing_jquery: function() {
          return typeof use_existing_jquery !== 'undefined' ? use_existing_jquery : undefined
        },
        library_tolerance: function() {
          return typeof library_tolerance !== 'undefined' ? library_tolerance : undefined
        },
        settings_tolerance: function() {
          return cc.sT || settings_tolerance
        },
        hide_element_style: function() {
          return '{' + (cc.hES || hide_element_style) + '}'
        },
        hide_element: function() {
          return typeof cc.hE === 'string' ? cc.hE : hide_element
        },
        getVersion: function() {
          return version
        },
        finish: function() {
          if (!f) {
            f = true;
            var e = d.getElementById('_vis_opt_path_hides');
            if (e) e.parentNode.removeChild(e)
          }
        },
        finished: function() {
          return f
        },
        load: function(e) {
          var t = this.getSettings(),
            n = d.createElement('script'),
            i = this;
          if (t) {
            n.textContent = t;
            d.getElementsByTagName('head')[0].appendChild(n);
            if (!w.VWO || VWO.caE) {
              stT.removeItem(cK);
              i.load(e)
            }
          } else {
            n.fetchPriority = 'high';
            n.src = e;
            n.type = 'text/javascript';
            n.onerror = function() {
              _vwo_code.finish()
            };
            d.getElementsByTagName('head')[0].appendChild(n)
          }
        },
        getSettings: function() {
          try {
            var e = stT.getItem(cK);
            if (!e) {
              return
            }
            e = JSON.parse(e);
            if (Date.now() > e.e) {
              stT.removeItem(cK);
              return
            }
            return e.s
          } catch (e) {
            return
          }
        },
        init: function() {
          if (d.URL.indexOf('__vwo_disable__') > -1) return;
          var e = this.settings_tolerance();
          w._vwo_settings_timer = setTimeout(function() {
            _vwo_code.finish();
            stT.removeItem(cK)
          }, e);
          var t = d.currentScript,
            n = d.createElement('style'),
            i = this.hide_element(),
            r = t && !t.async && i ? i + this.hide_element_style() : '',
            c = d.getElementsByTagName('head')[0];
          n.setAttribute('id', '_vis_opt_path_hides');
          v && n.setAttribute('nonce', v.nonce);
          n.setAttribute('type', 'text/css');
          if (n.styleSheet) n.styleSheet.cssText = r;
          else n.appendChild(d.createTextNode(r));
          c.appendChild(n);
          this.load('https://dev.visualwebsiteoptimizer.com/j.php?a=' + account_id + '&u=' + encodeURIComponent(d.URL) + '&vn=' + version)
        }
      };
      w._vwo_code = code;
      code.init();
    })();
  </script>
  <!-- End VWO Async SmartCode -->
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBMLSN7" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  @inertia
</body>


</html>