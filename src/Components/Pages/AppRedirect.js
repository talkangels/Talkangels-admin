import { useEffect } from "react";

export default function AppRedirect() {
  useEffect(() => {
    const packageName = "com.talkangels.pro";
    const playStore = `https://play.google.com/store/apps/details?id=${packageName}`;

    const ua = navigator.userAgent || navigator.vendor;
    const isAndroid = /Android/i.test(ua);

    // Get current route: /open, /profile, /refer
    const route = window.location.pathname.replace("/", ""); 

    // Only allow these 3 pages
    const allowedRoutes = ["open", "profile", "refer"];

    if (!allowedRoutes.includes(route)) return;

    // Build simple deep link path
    let fullPath = route; // open OR profile OR refer

    const intentUrl =
      `intent://${fullPath}` +
      `#Intent;scheme=https;package=${packageName};` +
      `S.browser_fallback_url=${encodeURIComponent(playStore)};end`;

      window.location.replace(intentUrl); // Open app
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Opening App…</h2>
      <p>If nothing happens, install the app from Play Store.</p>
    </div>
  );
}
