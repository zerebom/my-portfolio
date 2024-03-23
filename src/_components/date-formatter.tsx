import { parseISO, format } from 'date-fns';

type DataString = {
  dateString: string;
};

const DateFormatter = ({ dateString }: DataString) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>;
};

export default DateFormatter;
