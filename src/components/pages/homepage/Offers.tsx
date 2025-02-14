import SecondaryTab from "@/components/ui/tabs/SecondaryTab";

type TabContent = {
  title: string;
  description: string | JSX.Element;
};

const content: Record<string, TabContent> = {
  "sales-marketing": {
    title: "SECURITY AUDIT",
    description: (
      <p className="text-primary-blue">
        We are offering at special pricing three types of Cyber security audits.
        360 ° audit, Firewall Audit, Compliance Audit no matter which industry
        vertical, or the size of business you belong to. One of the three audits
        if not all would be beneficial to your business.
      </p>
    ),
  },
  operations: {
    title: "Networking Audit",
    description: (
      <>
        Network architecture, design and performance audit. To help your
        business achieve, network strategy, performance, resiliency, agility,
        and best practises to support data driven operations.
      </>
    ),
  },
  security: {
    title: "Simphony Audit",
    description: (
      <>
        We offer to asses and audit your Micros POS and Opera PMS systems at a
        special an introductory pricing. So, your investment on critical
        applications can be better aligned to your business goals
      </>
    ),
  },
  training: {
    title: "Hana Readiness",
    description: (
      <>
        We offer to asses and audit your Micros POS and Opera PMS systems at a
        special an introductory pricing. So, your investment on critical
        applications can be better aligned to your business goals
      </>
    ),
  },
};

const CurrentOffers: React.FC = () => {
  return (
    <div className="global-margin global-padding">
      <SecondaryTab
        tabsContent={content}
        header="CURRENT OFFERS"
        subHeader="TAKE A TEST DRIVE OF OUR SERVICES"
        gradientBackground="bg-gradient-to-r from-primary-orange to-[#ffff]"
        buttonText="GET STARTED"
        imageSrc="/components/worldmap.png"
      />
    </div>
  );
};

export default CurrentOffers;
