import { FormCard } from "../../../shared";



type AddEventsAdditionalPaimentCardProps = {
  cardTitle: string;
}

const AddEventsAdditionalPaimentCard = ({ cardTitle }: AddEventsAdditionalPaimentCardProps) => {

  return (
    <FormCard title={cardTitle}>
    <div style={{height: 225}}></div>
    </FormCard>
  );
};

export { AddEventsAdditionalPaimentCard };