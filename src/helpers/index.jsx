export const MakeGAEvent = ({ action, category, label, value = null }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
