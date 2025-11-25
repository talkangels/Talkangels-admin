import { useEffect, useState } from "react";
import { Logs } from "../services/auth";

export default function AppRedirect() {

  const handleClickLogs = async (ua, isAndroid, path, allowedRoutes, intentUrl, playStore, status) => {
    try {
      await Logs({ ua, isAndroid, path, allowedRoutes, intentUrl, playStore, status })
    } catch (error) {
      console.log(error.message)
    }
  }


  useEffect(() => {
    const packageName = "com.talkangels.pro";
    const playStore = `https://play.google.com/store/apps/details?id=${packageName}`;

    const ua = navigator.userAgent || navigator.vendor;
    const isAndroid = /Android/i.test(ua);

    // Get only the first folder name
    const path = window.location.pathname.split("/")[1];

    const allowedRoutes = ["open", "profile", "refer"];

    handleClickLogs(ua, isAndroid, path, allowedRoutes, null, playStore, "is before")

    // Only redirect for these routes
    if (!allowedRoutes.includes(path)) return;

    const intentUrl =
      `intent://${path}` +
      `#Intent;scheme=https;package=${packageName};` +
      `S.browser_fallback_url=${encodeURIComponent(playStore)};end`;

    handleClickLogs(ua, isAndroid, path, allowedRoutes, intentUrl, playStore, "is after")

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
