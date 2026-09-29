import { useNavigate } from "react-router-dom";

import { popularDestinations } from "../../data/popularDestinations";

export default function PopularDestinations() {
  const navigate = useNavigate();

  // ====================
  // Destination Select
  // ====================

  const handleDestinationClick = (destination) => {
    navigate("/trip-create", {
      state: {
        destination: {
          id: destination.id,

          placeId: "",

          name: destination.name,

          type: destination.type,

          city: destination.city,

          country: destination.country,

          countryCode: destination.countryCode,

          lat: destination.lat,

          lng: destination.lng,

          imageUrl: destination.imageUrl,
        },
      },
    });
  };

  return (
    <section
      className="
        overflow-hidden
        px-5
        pt-[36px]
      "
    >
      {/* ====================
          Title
      ==================== */}

      <h2
        className="
          text-[24px]
          font-bold
          leading-[32px]
          tracking-[-0.02em]
        "
      >
        인기 여행지
      </h2>

      {/* ====================
          Destination List
      ==================== */}

      <div
        className="
          hide-scrollbar
          mt-[16px]
          flex
          snap-x
          snap-mandatory
          gap-[12px]
          overflow-x-auto
          pb-[10px]
        "
      >
        {popularDestinations.map((destination) => (
          <button
            key={destination.id}
            type="button"
            onClick={() => handleDestinationClick(destination)}
            className="
              click-scale
              relative
              block
              h-[140px]
              w-[calc((100%-24px)/3)]
              min-w-[calc((100%-24px)/3)]
              shrink-0
              snap-start
              overflow-hidden
              rounded-xl
              bg-[#D9D9D9]
              text-left
            "
          >
            {/* ====================
                Image
            ==================== */}

            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* ====================
                Gradient
            ==================== */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-[75%]
                bg-gradient-to-t
                from-black/75
                via-black/25
                to-transparent
              "
            />

            {/* ====================
                Destination Name
            ==================== */}

            <span
              className="
                absolute
                bottom-[12px]
                left-[12px]
                z-10
                text-[16px]
                font-normal
                leading-[24px]
                text-white
              "
            >
              {destination.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
