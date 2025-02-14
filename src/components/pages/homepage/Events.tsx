import SecondaryTab from "@/components/ui/tabs/SecondaryTab";

type TabContent = {
  title: string;
  description: string | JSX.Element;
};

const content: Record<string, TabContent> = {
  "sales-marketing": {
    title: "MICROSOFT",
    description: (
      <p className="text-primary-blue">
        Register for a 30 min no obligation Consulting
      </p>
    ),
  },
  operations: {
    title: "ESSENTIAL 8",
    description: <p className="text-primary-blue">Register for a 30 min no obligation Consulting</p>,
  },
  security: {
    title: "3CX",
    description: <p className="text-primary-blue">Register for a 30 min no obligation Consulting</p>,
  },
  training: {
    title: "VTIGER",
    description: <p className="text-primary-blue">Register for a 30 min no obligation Consulting</p>,
  },
};

const Events: React.FC = () => {
  return (
    <div className="global-margin global-padding">
      <SecondaryTab
        tabsContent={content}
        header="EVENTS"
        subHeader="CONSULTING REGISTRATION"
        gradientBackground="bg-gradient-to-r from-primary-orange to-[#ffff]"
        buttonText="REGISTER"
        imageSrc="/components/worldmap.png"
      />
    </div>
  );
};

export default Events;
