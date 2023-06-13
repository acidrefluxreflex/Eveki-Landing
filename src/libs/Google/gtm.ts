declare global {
    interface Window {
      dataLayer: Record<string, any>[];
    }
}

export const pageview = (url: string) => {
    window.dataLayer.push({
        event: "pageview",
        page: url,
    });
};
