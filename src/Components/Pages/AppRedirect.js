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

    // FULL PATH INCLUDING QUERY PARAMS
    const fullPath = window.location.pathname + window.location.search;

    // Route name only
    const route = window.location.pathname.split("/")[1];

    const allowedRoutes = ["open", "profile", "refer"];

    handleClickLogs(ua, isAndroid, route, allowedRoutes, null, playStore, "before");

    if (!allowedRoutes.includes(route)) return;

    // Intent URL WITH QUERY PARAMS
    const intentUrl =
      `intent://${fullPath}` +
      `#Intent;scheme=https;package=${packageName};` +
      `S.browser_fallback_url=${encodeURIComponent(playStore)};end`;

    handleClickLogs(ua, isAndroid, route, allowedRoutes, intentUrl, playStore, "after");

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
