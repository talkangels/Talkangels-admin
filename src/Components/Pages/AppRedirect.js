import { useEffect } from "react";

export default function AppRedirect() {
useEffect(() => {
  const packageName = "com.talkangels.pro";
  const playStore = `https://play.google.com/store/apps/details?id=${packageName}`;

  const isAndroid = /Android/i.test(navigator.userAgent);
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const routePath = window.location.pathname;

  // ❌ DO NOT redirect payment page
  if (routePath.startsWith("/payment")) {
    console.log("⛔ Skipping redirect: Payment route", routePath);
    return;
  }

  // Redirect allowed only on 3 pages
  const allowedRoutes = ["/open", "/profile", "/refer"];

  if (!allowedRoutes.includes(routePath)) {
    console.log("⛔ Route not allowed:", routePath);
    return;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id") || "";
  const code = searchParams.get("code") || "";

  let fullPath = routePath.replace("/", "");

  if (id) fullPath += `/${id}`;
  if (code) fullPath += `/${code}`;

  if (isAndroid && isMobile) {
    const intentUrl =
      `intent://${fullPath}` +
      `#Intent;scheme=https;package=${packageName};` +
      `S.browser_fallback_url=${encodeURIComponent(playStore)};end`;

    window.location.href = intentUrl;
    return;
  }

  if (isMobile) {
    window.location.href = playStore;
    return;
  }
}, []);


  return (
    <div style={{ padding: 40 }}>
      <h2>Opening App…</h2>
      <p>If nothing happens, open Play Store manually.</p>
    </div>
  );
}
