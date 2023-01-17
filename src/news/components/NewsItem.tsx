import { useMemo } from 'react';
import { parseDate } from '../../helpers';

interface NewsItemProps {
  _id: string
  image?: string,
  title: string;
  description: string;
  publicationDate: string | Date;
}

export const NewsItem = ({ _id, title, image, description, publicationDate }: NewsItemProps) => {

  const newDescription = useMemo<string>(() => {
    if (description.length >= 80) {
      return description.length > 80
      ? description.substring(0, 80) + "..."
      : description;
    }
    return description.length > 120
      ? description.substring(0, 120) + "..."
      : description;
  }, [ description ]);

  const getNewFormatDate = (): string => {
    const date = parseDate(publicationDate as string);
    return date;
  }

  return (

    <div className="card card-compact w-80 lg:w-80 md:w-72 bg-base-100 shadow-xl mb-5 mx-3">
      <figure><img src={image} alt="image" className="w-[400px]" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{ newDescription }</p>
      </div>
      <footer>
        <small className="text-sm flex justify-end mr-6 mb-3">{ getNewFormatDate() }</small>
      </footer>
    </div>
  );
}
