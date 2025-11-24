import { useEffect } from "react";

export default function AppRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;
    const isAndroid = /Android/i.test(ua);

    // Accepted routes
    const allowedRoutes = ["open", "profile", "refer"];

    // Get route name (open / profile / refer)
    const route = window.location.pathname.replace("/", "");

    // If route not matched → do nothing
    if (!allowedRoutes.includes(route)) return;

    // OPEN APP ONLY (no Play Store)
    if (isAndroid) {
      const appUrl = `intent://${route}#Intent;scheme=https;package=com.talkangels.pro;end`;
      window.location.replace(appUrl);
    }
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Opening App…</h2>
      <p>If nothing happens, your app may not be installed.</p>
    </div>
  );
}
