import './Accountability.scss';

interface InKindCardProps {
  title: string;
  description: string;
  source: string;
  amountInvolved: string;
  articleLink: string;
  companiesInvolved: string
}

const InKindCard = (props: InKindCardProps) => {
  const {
    title,
    description,
    source,
    amountInvolved,
    companiesInvolved,
    articleLink,
  } = props;
  let cardImage = '';

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="card in-kind-card" onClick={() => window.open(articleLink)}>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5">
              {title}
            </p>
            <p className="subtitle is-6 mt-2">{title}</p>
          </div>
        </div>

        <div className="content">
          <br />
        </div>
      </div>
      <footer className="card-footer">
       
      </footer>
    </div>
  );
};

export default InKindCard;
