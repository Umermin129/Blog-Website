const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    const webVitals = require('web-vitals');
    webVitals.getCLS(onPerfEntry);
    webVitals.getFID(onPerfEntry);
    webVitals.getFCP(onPerfEntry);
    webVitals.getLCP(onPerfEntry);
    webVitals.getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
