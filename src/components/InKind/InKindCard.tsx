import './InKind.scss';

export type DonationType = 'Face Masks' | 'Mobile Testing Lab';

interface InKindCardProps {
  title: string;
  description: string;
  donationCount: number;
  donor: string;
  donationDate: string;
  articleLink: string;
  donationType: DonationType;
}

const InKindCard = (props: InKindCardProps) => {
  const {
    title,
    description,
    donationCount,
    donor,
    donationDate,
    articleLink,
    donationType,
  } = props;
  let cardImage = '';

  switch (donationType) {
    case 'Face Masks':
      cardImage = './masks.svg';
      break;

    case 'Mobile Testing Lab':
      cardImage = './testing_kits.svg';
      break;

    default:
      break;
  }

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="card in-kind-card" onClick={() => window.open(articleLink)}>
      <div className="card-image">
        <figure className="image is-4by3 m-2">
          <img src={cardImage} alt="Donation image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5">
              {donationCount} {donationType} donated by {donor}
            </p>
            <p className="subtitle is-6 mt-2">{title}</p>
          </div>
        </div>

        <div className="content">
          <br />
          <time dateTime={donationDate}>
            {new Date(donationDate).toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            })}
          </time>
        </div>
      </div>
    </div>
  );
};

export default InKindCard;
