import { useEffect } from "react";

export default function AppRedirect() {
  useEffect(() => {
    const packageName = "com.talkangels.pro";
    const playStore = `https://play.google.com/store/apps/details?id=${packageName}`;

    const ua = navigator.userAgent || navigator.vendor;
    const isAndroid = /Android/i.test(ua);

    // Get only the first folder name
    const path = window.location.pathname.split("/")[1];

    const allowedRoutes = ["open", "profile", "refer"];

    // Only redirect for these routes
    if (!allowedRoutes.includes(path)) return;

    const intentUrl =
      `intent://${path}` +
      `#Intent;scheme=https;package=${packageName};` +
      `S.browser_fallback_url=${encodeURIComponent(playStore)};end`;

    if (isAndroid) {
      window.location.replace(intentUrl);
    } else {
      window.location.replace(playStore);
    }
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Opening App…</h2>
      <p>If nothing happens, install the app from Play Store.</p>
    </div>
  );
}
