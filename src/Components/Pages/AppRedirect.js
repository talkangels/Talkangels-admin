import { useEffect } from "react";

export default function AppRedirect() {
    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();

        const androidLink =
            "https://play.google.com/store/apps/details?id=com.talkangels.app";

        const cleanedPath = path.replace(/^\//, "");
        // Try opening app first
        window.location.href = `intent://${cleanedPath}#Intent;scheme=https;package=com.talkangels.app;S.browser_fallback_url=" +
            encodeURIComponent(https://play.google.com/store/apps/details?id=com.talkangels.app) +
            ";end`;

        // If app is not installed → fallback after 1500ms
        setTimeout(() => {
            if (ua.includes("android")) {
                window.location.replace(androidLink);
            }
        }, 1000);
    }, []);

    return (
        <div style={{ padding: 50, textAlign: "center" }}>
            <h2>Opening TalkAngels App...</h2>
            <p>If nothing happens, you will be redirected shortly.</p>
        </div>
    );
}
