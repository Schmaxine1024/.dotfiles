/* Disables the warning when accessing about:config */
user_pref("browser.aboutConfig.showWarning", false);

/* Disables disk caching - reduces disk I/O and improves privacy, but may slow down page loads on revisits */
user_pref("browser.cache.disk.enable", false);

/* Sets content blocking to strict mode - enhances privacy and security but may break some websites */
user_pref("browser.contentblocking.category", "strict");

/* Downloads first go to the operating system's temp directory before final location - improves security against malicious downloads */
user_pref("browser.download.start_downloads_in_tmp_dir", true);

/* Disables weather display on new tab page - improves privacy by preventing location tracking */
user_pref("browser.newtabpage.activity-stream.showWeather", false);

/* Enables the "End Private Session" button during private browsing */
user_pref("browser.privatebrowsing.resetPBM.enabled", true);

/* Enables multiple browser profiles */
user_pref("browser.profiles.enabled", true);

/* Disables remote lookups for checking reputation of downloaded files - improves privacy but may reduce security against malicious downloads */
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/* Prevents automatic updates to search engines and their configurations */
user_pref("browser.search.update", false);

/* Sets session save interval to 60 seconds - reduces disk writes, balancing data preservation with performance */
user_pref("browser.sessionstore.interval", 60000);

/* Disables check for default browser status */
user_pref("browser.shell.checkDefaultBrowser", false);

/* Disables captive portal detection URL - improves privacy */
user_pref("captivedetect.canonicalURL", "");

/* Decreases minimum interval between content reflows - improves perceived page loading speed */
user_pref("content.notify.interval", 100000);

/* Enables automatic cookie banner handling. Attempts to reject cookies where possible and ignores other types of banners */
user_pref("cookiebanners.service.mode", 1);

/* Enables automatic cookie banner handling for private browsing sessions. Attempts to reject cookies where possible and ignores other types of banners */
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

/* Prevents truncation of pasted text */
user_pref("editor.truncate_user_pastes", false);

/* Increases canvas cache size - improves performance for graphics-intensive pages */
user_pref("gfx.canvas.accelerated.cache-size", 512);

/* Decreases font cache size - conserves memory usage */
user_pref("gfx.content.skia-font-cache-size", 20);

/* Decreases media read-ahead limit - balances performance for media streaming with memory usage */
user_pref("media.cache_readahead_limit", 7200);

/* Decreases memory cache for media - balances performance for media playback with memory usage */
user_pref("media.memory_cache_max_size", 65536);

/* Allows HTTP authentication in subresources from same-origin - balances usability and security */
user_pref("network.auth.subresource-http-auth-allow", 1);

/* Disables captive portal service - improves privacy */
user_pref("network.captive-portal-service.enabled", false);

/* Disables network connectivity checking - improves privacy */
user_pref("network.connectivity-service.enabled", false);

/* Disables DNS prefetching - improves privacy */
user_pref("network.dns.disablePrefetch", true);

/* Disables DNS prefetching from HTTPS - improves privacy */
user_pref("network.dns.disablePrefetchFromHTTPS", true);

/* Increases maximum connections - improves loading speed for sites with many resources */
user_pref("network.http.max-connections", 1800);

/* Increases persistent connections per server - improves loading performance */
user_pref("network.http.max-persistent-connections-per-server", 10);

/* Disables HTTP request pacing - improves performance */
user_pref("network.http.pacing.requests.enabled", false);

/* Omits the Referer header from cross-origin requests - providing privacy but potentially breaking functionality on some websites */
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/* Disables network prediction - improves privacy */
user_pref("network.predictor.enabled", false);

/* Disables link prefetching - improves privacy and reduces bandwidth */
user_pref("network.prefetch-next", false);

/* Decreases SSL token cache - balances performance for HTTPS connections with memory usage */
user_pref("network.ssl_tokens_cache_capacity", 10240);

/* Blocks all websites from sending desktop notifications by default (2=block) - improves privacy */
user_pref("permissions.default.desktop-notification", 2);

/* Blocks all websites from accessing location by default (2=block) - improves privacy */
user_pref("permissions.default.geo", 2);

/* Disables loading of default permissions URL - improves privacy */
user_pref("permissions.manager.defaultsUrl", "");

/* Disables OCSP checking of certificate revocation (0=disabled) - improves performance and privacy */
user_pref("security.OCSP.enabled", 0);

/* Blocks display of mixed content, ensuring that all resources on HTTPS pages are secure */
user_pref("security.mixed_content.block_display_content", true);

/* Enables CRLite in enforcing mode (2=enforce) - improves privacy and performance of certificate checks */
user_pref("security.pki.crlite_mode", 2);

/* Disables capturing and offering to save passwords from web forms not explicitly defining fields for usernames and passwords */
user_pref("signon.formlessCapture.enabled", false);

/* Disables capturing and offering to save passwords in private sessions - improves privacy */
user_pref("signon.privateBrowsingCapture.enabled", false);
