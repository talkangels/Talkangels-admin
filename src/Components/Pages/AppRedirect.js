import { useEffect } from "react";
import { Logs } from "../services/auth";

export default function AppRedirect() {
  const handleSend = async (data) => {
    try {
      await Logs({ data: data })
    } catch (error) {
      await Logs({ error: error })
    }
  }
  useEffect(() => {
    const packageName = "com.talkangels.pro";
    const playStore = `https://play.google.com/store/apps/details?id=${packageName}`;

    const isAndroid = /Android/i.test(navigator.userAgent);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Full route (/open, /profile, /refer)
    const routePath = window.location.pathname; // /open or /profile or /refer

    if (window.location.pathname.replace(/^\//, "").startsWith("payment/")) {
      handleSend(`🚫 Payment route detected → No redirect ${window.location.pathname.replace(/^\//, "")} -==> ${window.location.pathname.replace(/^\//, "").startsWith("payment/")}`)
      console.log("🚫 Payment route detected → No redirect");
      return;
    }

    // Query params
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id") || "";
    const code = searchParams.get("code") || "";

    // Create full deep link path
    let fullPath = routePath.replace("/", ""); // open  OR refer OR profile

    if (id) fullPath += `/${id}`;
    if (code) fullPath += `/${code}`;

    console.log("Route Path:", routePath);
    console.log("Full Path:", fullPath);

    if (isAndroid && isMobile) {
      const intentUrl =
        `intent://${fullPath}` +
        `#Intent;scheme=https;package=${packageName};` +
        `S.browser_fallback_url=${encodeURIComponent(playStore)};end`;

      handleSend(`🤖 Android detected → Opening App ${intentUrl}`)

      window.location = intentUrl;
    } else if (isMobile) {
      handleSend(`🍎 iOS detected → Opening App Store ${playStore}`)
      window.location = playStore;
    }
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Opening App…</h2>
      <p>If nothing happens, open Play Store manually.</p>
    </div>
  );
}
