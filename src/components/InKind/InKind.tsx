
import InKindCard, { DonationType } from './InKindCard';

import './InKind.scss';

interface InKindProps {
  donations: any[];
}

const InKind = (props: InKindProps) => {
  const { donations } = props;

  const getDonationType = (itemName: string): DonationType => {
    if(itemName == "FaceMasks")
      return "Face Masks"
    else {
      return "Mobile Testing Lab"
    }
  }

  return (
    <div className="columns is-centered">
      {donations.map(donation => {
        const { id, donor, title, content, link, date_pledged, donated_items } = donation;
        const [itemName, itemCount ] = donated_items.split(":")

        return (
          <div key={id} className="column is-4 mt-3">
            <InKindCard
              title={title.rendered}
              donor={donor}
              description={content.rendered}
              articleLink={link}
              donationDate={date_pledged}
              donationCount={itemCount}
              donationType={getDonationType(itemName)}
            />
          </div>
        )
      })}
  
    </div>
  );
}

export default InKind;
