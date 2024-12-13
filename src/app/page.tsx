"use client";
import { Card } from "@/components/card";
import { MiniCard } from "@/components/minicard";
import { FaGem, FaTicketAlt } from "react-icons/fa";

export default function Home() {
  const handleButtonClick = (text: string) => {
    alert(`You clicked on: ${text}`);
  };

  return (
    <div className="px-4 md:px-16 lg:px-32 py-8 md:py-16">
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <Card
          title="Farms & Staking"
          description="Donec volutpat pulvinar elem."
          stats={[
            { label: "Ruby to Harvest", value: "0.000", convertedValue: "~$0.00" },
            { label: "Ruby in Wallet", value: "0.000", convertedValue: "~$0.00" },
          ]}
          buttonText="Harvest All (0)"
          image={<FaGem className="h-24 w-24 md:h-36 md:w-36 text-white" />}
          isDisabled={false}
          onClick={() => alert("Harvested!")}
        />
        <Card
          title="Your Lottery Winnings"
          description="Sed nullam viverra fusce id at amet."
          stats={[
            { label: "Ruby to Collect", value: "0.000", convertedValue: "~$0.00" },
            { label: "Total Jackpot this Round", value: "Coming Soon", convertedValue: "" },
          ]}
          buttonText={["Collect Winnings", "Approve Ruby"]}
          image={<FaTicketAlt className="h-24 w-24 md:h-36 md:w-36 text-yellow-500" />}
          isDisabled={[true, false]}
          onClick={[
            () => alert("Winnings Collected!"),
            () => alert("Ruby Approved!"),
          ]}
        />
      </div>

      {/* MiniCard Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-8">
        <MiniCard
          title="Earn"
          value="305.40%"
          description="APR in Farms"
          buttonText="→"
          onClick={() => handleButtonClick("Earn 305.40%")}
        />
        <MiniCard
          title="Earn"
          value="RUBY, VRT, KALM"
          description="In Pools"
          buttonText="→"
          onClick={() => handleButtonClick("Earn RUBY, VRT, KALM")}
        />
        <MiniCard
          title="Lottery"
          value="Coming Soon"
          description="Stay Tuned!"
          buttonText="→"
          onClick={() => handleButtonClick("Lottery Coming Soon")}
        />
      </div>
    </div>
  );
}
