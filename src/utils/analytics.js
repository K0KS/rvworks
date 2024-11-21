// Google Analytics Event Types
export const GA_EVENTS = {
  PAGE_VIEW: 'page_view',
  CLICK: 'click',
  FORM_SUBMIT: 'form_submit',
  FORM_START: 'form_start',
};

// Initialize Google Tag Manager
export const initGTM = () => {
  const gtmId = 'GTM-XXXXXXX'; // Replace with your GTM ID
  
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    
    // GTM Script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(script);

    // GTM NoScript
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.appendChild(noscript);
  }
};

// Push event to dataLayer
export const pushEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
};

// Track page views
export const trackPageView = (path, title) => {
  pushEvent(GA_EVENTS.PAGE_VIEW, {
    page_path: path,
    page_title: title,
  });
};

// Track form submissions
export const trackFormSubmit = (formName, formData = {}) => {
  pushEvent(GA_EVENTS.FORM_SUBMIT, {
    form_name: formName,
    form_data: formData,
  });
};

// Track form start
export const trackFormStart = (formName) => {
  pushEvent(GA_EVENTS.FORM_START, {
    form_name: formName,
  });
};

// Track button clicks
export const trackClick = (buttonName, buttonLocation) => {
  pushEvent(GA_EVENTS.CLICK, {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};
