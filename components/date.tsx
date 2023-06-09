import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  if (!dateString) return null;
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}