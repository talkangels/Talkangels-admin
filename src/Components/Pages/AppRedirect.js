// import { useEffect, useState } from "react";
// import { Logs } from "../services/auth";

// export default function AppRedirect() {

//   const handleClickLogs = async (ua, isAndroid, path, allowedRoutes, intentUrl, playStore, status) => {
//     try {
//       await Logs({ ua, isAndroid, path, allowedRoutes, intentUrl, playStore, status })
//     } catch (error) {
//       console.log(error.message)
//     }
//   }


//   useEffect(() => {
//     const packageName = "com.talkangels.pro";
//     const playStore = `https://play.google.com/store/apps/details?id=${packageName}`;

//     const ua = navigator.userAgent || navigator.vendor;
//     const isAndroid = /Android/i.test(ua);

//     // Get only the first folder name
//     const path = window.location.pathname.split("/")[1];

//     const allowedRoutes = ["open", "profile", "refer"];

//     handleClickLogs(ua, isAndroid, path, allowedRoutes, null, playStore, "is before")

//     // Only redirect for these routes
//     if (!allowedRoutes.includes(path)) return;

//     const intentUrl =
//       `intent://${path}` +
//       `#Intent;scheme=https;package=${packageName};` +
//       `S.browser_fallback_url=${encodeURIComponent(playStore)};end`;

//     handleClickLogs(ua, isAndroid, path, allowedRoutes, intentUrl, playStore, "is after")

//     if (isAndroid) {
//       window.location.replace(intentUrl);
//     } else {
//       window.location.replace(playStore);
//     }
//   }, []);

//   return (
//     <div style={{ padding: 40 }}>
//       <h2>Opening App…</h2>
//       <p>If nothing happens, install the app from Play Store.</p>
//     </div>
//   );
// }


import { useEffect } from "react";
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

    const path = window.location.pathname.split("/")[1];
    const allowedRoutes = ["open", "profile", "refer"];

    handleClickLogs(ua, isAndroid, path, allowedRoutes, null, playStore, "before");

    if (!allowedRoutes.includes(path)) return;

    // ✅ YOUR ORIGINAL INTENT URL (KEEP IT)
    const intentUrl =
      `intent://${path}` +
      `#Intent;scheme=https;package=${packageName};` +
      `S.browser_fallback_url=${encodeURIComponent(playStore)};end`;

    handleClickLogs(ua, isAndroid, path, allowedRoutes, intentUrl, playStore, "after");

    if (isAndroid) {
      const start = Date.now();

      // 1️⃣ Try your original INTENT URL first
      window.location.href = intentUrl;

      // 2️⃣ After 1 sec → if app didn't open → try custom scheme
      setTimeout(() => {
        if (Date.now() - start < 1600) {
          window.location.href = `talkangels://${path}`;
        }
      }, 1100);

      // 3️⃣ Final fallback → Play Store
      setTimeout(() => {
        if (Date.now() - start < 2500) {
          window.location.href = playStore;
        }
      }, 2300);

    } else {
      window.location.href = playStore;
    }

  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Opening App…</h2>
      <p>If nothing happens, install the app from the Play Store.</p>
    </div>
  );
}

