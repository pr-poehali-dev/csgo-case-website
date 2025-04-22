
import { CaseProps } from "./CaseCard";
import CaseCard from "./CaseCard";

interface CaseGridProps {
  cases: Partial<CaseProps>[];
  className?: string;
}

const CaseGrid = ({ cases, className }: CaseGridProps) => {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${className}`}>
      {cases.map((caseItem) => (
        <CaseCard
          key={caseItem.id}
          name={caseItem.name}
          image={caseItem.image}
          price={caseItem.price}
        />
      ))}
    </div>
  );
};

export default CaseGrid;
