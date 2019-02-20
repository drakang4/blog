const language =
  typeof window !== 'undefined' ? window.navigator.language : 'en';

function formatDate(date: string | number | Date) {
  return new Intl.DateTimeFormat(language, {
    year:
      new Date(date).getFullYear() === new Date().getFullYear()
        ? undefined
        : 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}

export { language, formatDate };
