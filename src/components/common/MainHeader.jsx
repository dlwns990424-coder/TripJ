import { Link } from "react-router-dom";

import { Search } from "lucide-react";
import Header from "./Header";
export default function MainHeader() {
  return (
    <Header
      left={
        <Link to="/home" aria-label="TripJ 홈" className="flex min-h-[44px] items-center">
          <img
            className="block h-auto w-[100px] object-contain"
            src={`${import.meta.env.BASE_URL}img/logo/tripj-wordmark.svg`}
            alt="TripJ" width={408} height={172}
          />
        </Link>
      }
      right={
        <Link
          to="/map"
          className="
                click-scale-sm
                flex
                flex-col
                items-center
                text-[#555555]
              "
        >
          <Search size={22} strokeWidth={1.5} />

          <span
            className="
                  text-[12px]
                  leading-[18px]
                "
          >
            도시검색
          </span>
        </Link>
      }
    />
  );
}
