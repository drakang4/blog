const language =
  typeof window !== 'undefined' ? window.navigator.language : 'ko';

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

function formatDuration(
  startDate: string | number | Date,
  endDate: string | number | Date,
) {
  if (!startDate) {
    return '';
  }

  const formattedStartDate = new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: 'short',
  }).format(new Date(startDate));

  const formattedEndDate = endDate
    ? new Intl.DateTimeFormat(language, {
        year: 'numeric',
        month: 'short',
      }).format(new Date(endDate))
    : 'Present';

  return `${formattedStartDate} - ${formattedEndDate}`;
}

export { language, formatDate, formatDuration };
