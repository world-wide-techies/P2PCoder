import NameFinder from "@/components/nameFinder_comp";
import { UserLoginFunction } from "@/composables/userLoginFunction";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col mt-24">
      <div className="flex w-1/3">
        <Fragment>
          <NameFinder />
        </Fragment>
      </div>
    </main>
  );
}
