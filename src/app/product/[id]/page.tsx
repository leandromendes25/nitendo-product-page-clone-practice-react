"use client";
import Slider from "@/components/common/Slider";
import useSearchData from "@/components/hooks/useSearchData";
import AgeRestriction from "@/components/pdp/AgeRestriction";
import GameDescription from "@/components/pdp/GameDescription";
import GameDetails from "@/components/pdp/GameDetails";
import PlayOnlineAds from "@/components/PlayOnlineAds";
import ShowCaseProduct from "@/components/ShowCaseProduct";
import SupportedModes from "@/components/SupportedModes";
import WarningEpilepsy from "@/components/WarningEpilepsy";

export default function Page({ params }: { params: { id: string } }) {
  const { data, loading, error } = useSearchData(params.id);
  return (
    <>
      <main>
        <ShowCaseProduct data={data} loading={loading} error={error} />
        <GameDescription data={data} loading={loading} error={error} />
        <div className="flex flex-col items-center md:items-start md:flex-row">
          <div className="bg-nitendo-gray rounded-lg  my-1">
            <h3 className="text-center font-semibold mt-3">ESRB rating</h3>
            <AgeRestriction className="shadow" />
          </div>
          <SupportedModes />
        </div>
        <GameDetails />
      </main>
      <div className="mx-4">
        <PlayOnlineAds />
        <Slider data={data} loading={loading} error={error} />
        <WarningEpilepsy />
      </div>
    </>
  );
}
