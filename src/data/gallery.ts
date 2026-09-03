export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  alt: string;
}

export interface GallerySection {
  id: string;
  label: string;
  /** Short name, used for the filter */
  short: string;
  blurb: string;
  images: GalleryImage[];
}

export const sections: GallerySection[] = [
  {
    id: "staircase-balustrades",
    label: "Staircase & landing balustrades",
    short: "Staircases",
    blurb:
      "Frameless, standoff and post-fixed glass to stairs, landings and stairwell voids.",
    images: [
      {
        id: "staircase-balustrades/IMG_6084.JPG",
        src: "/gallery/staircase-balustrades/IMG_6084.JPG",
        caption: "Bronze-tinted stair balustrade",
        alt: "Bronze-tinted toughened glass balustrade on a staircase with standoff fixings",
      },
      {
        id: "staircase-balustrades/IMG_4392.JPG",
        src: "/gallery/staircase-balustrades/IMG_4392.JPG",
        caption: "Frameless stairwell screen",
        alt: "Full-height frameless glass screen returning around a stairwell void",
      },
      {
        id: "staircase-balustrades/CAM00280.jpg",
        src: "/gallery/staircase-balustrades/CAM00280.jpg",
        caption: "Galleried landing balustrade",
        alt: "Frameless glass landing balustrade on polished stainless steel standoffs",
      },
      {
        id: "staircase-balustrades/CAM00272.jpg",
        src: "/gallery/staircase-balustrades/CAM00272.jpg",
        caption: "Galleried landing balustrade",
        alt: "Glass balustrade running along a galleried landing during fit-out",
      },
      {
        id: "staircase-balustrades/IMG_0736.JPG",
        src: "/gallery/staircase-balustrades/IMG_0736.JPG",
        caption: "Curved staircase balustrade",
        alt: "Curved frameless glass balustrade",
      },
    ],
  },
  {
    id: "terrace-balustrades",
    label: "Terrace, balcony & garden balustrades",
    short: "Balustrades",
    blurb:
      "Frameless, standoff and post-fixed glass balustrades for terraces, balconies, gardens, roof terraces and stadium seating.",
    images: [
      {
        id: "terrace-balustrades/IMG_1617.jpeg",
        src: "/gallery/terrace-balustrades/IMG_1617.jpeg",
        caption: "The City Ground, Nottingham Forest",
        alt: "Long run of frameless glass balustrade",
      },
      {
        id: "terrace-balustrades/IMG_1615.jpeg",
        src: "/gallery/terrace-balustrades/IMG_1615.jpeg",
        caption: "The City Ground, Nottingham Forest",
        alt: "Glass stadium balustrade with the Nottingham Forest name etched into the panel",
      },

      {
        id: "terrace-balustrades/IMG_1611.jpeg",
        src: "/gallery/terrace-balustrades/IMG_1611.jpeg",
        caption: "The City Ground, Nottingham Forest",
        alt: "Frameless glass balustrade at pitch level beside the dugouts",
      },
      {
        id: "terrace-balustrades/IMG_1250.jpeg",
        src: "/gallery/terrace-balustrades/IMG_1250.jpeg",
        caption: "The City Ground, Nottingham Forest",
        alt: "Glass balustrade to an executive box overlooking the pitch during ground works",
      },
      {
        id: "terrace-balustrades/IMG_6164.jpeg",
        src: "/gallery/terrace-balustrades/IMG_6164.jpeg",
        caption: "Split-level garden balustrade",
        alt: "Frameless glass garden balustrade with a white handrail above a planted bed",
      },
      {
        id: "terrace-balustrades/IMG_6162.jpeg",
        src: "/gallery/terrace-balustrades/IMG_6162.jpeg",
        caption: "Split-level garden balustrade",
        alt: "Glass balustrade dividing a raised patio from a lower seating terrace",
      },
      {
        id: "terrace-balustrades/IMG_6168.jpeg",
        src: "/gallery/terrace-balustrades/IMG_6168.jpeg",
        caption: "Split-level garden balustrade",
        alt: "Glass balustrade running the length of a landscaped garden terrace",
      },
      {
        id: "terrace-balustrades/IMG_6169.jpeg",
        src: "/gallery/terrace-balustrades/IMG_6169.jpeg",
        caption: "Split-level garden balustrade",
        alt: "Stepped frameless glass balustrade beside stone garden steps",
      },
      {
        id: "terrace-balustrades/IMG_6242.jpeg",
        src: "/gallery/terrace-balustrades/IMG_6242.jpeg",
        caption: "Post-fixed garden balustrade",
        alt: "Stainless posts and glass balustrade",
      },
      {
        id: "terrace-balustrades/IMG_6238.jpeg",
        src: "/gallery/terrace-balustrades/IMG_6238.jpeg",
        caption: "Post-fixed garden balustrade",
        alt: "Stainless post and glass balustrade being set out on a new sandstone patio",
      },
      {
        id: "terrace-balustrades/IMG_6250.jpeg",
        src: "/gallery/terrace-balustrades/IMG_6250.jpeg",
        caption: "Post-fixed garden balustrade",
        alt: "Stainless posts awaiting glass infill panels along a garden patio edge",
      },
      {
        id: "terrace-balustrades/P4260405.JPG",
        src: "/gallery/terrace-balustrades/P4260405.JPG",
        caption: "Rooftop terrace balustrade",
        alt: "Frameless glass balustrade fixed to a rendered roof terrace parapet against the sky",
      },
      {
        id: "terrace-balustrades/CAM00281.jpg",
        src: "/gallery/terrace-balustrades/CAM00281.jpg",
        caption: "Frosted glass balustrade",
        alt: "Frosted toughened glass balustrade panels on stainless steel standoff fixings",
      },
    ],
  },
  {
    id: "showers",
    label: "Shower enclosures & bath screens",
    short: "Showers",
    blurb:
      "Walk-in enclosures, hinged and sliding doors, wet room screens and over-bath screens.",
    images: [
      {
        id: "showers/IMG_0080.jpg",
        src: "/gallery/showers/IMG_0080.jpg",
        caption: "Corner shower enclosure",
        alt: "Frameless corner glass shower enclosure with a hinged door",
      },
      {
        id: "showers/IMG_2878.JPG",
        src: "/gallery/showers/IMG_2878.JPG",
        caption: "Walk-in shower",
        alt: "Frameless walk-in glass shower enclosure beside a full-height window",
      },
      {
        id: "showers/IMG_4389.JPG",
        src: "/gallery/showers/IMG_4389.JPG",
        caption: "Marble wet room screens",
        alt: "Frameless glass panels and a pivot door dividing a marble-tiled wet room",
      },
      {
        id: "showers/IMG_0960.JPG",
        src: "/gallery/showers/IMG_0960.JPG",
        caption: "Marble corner shower enclosure",
        alt: "Frameless corner shower enclosure with a hinged glass door",
      },
      {
        id: "showers/ili 063.jpg",
        src: "/gallery/showers/ili 063.jpg",
        caption: "Marble corner shower enclosure",
        alt: "Frameless corner shower enclosure with a hinged glass door and stone tray",
      },
      {
        id: "showers/20140430_141609.jpg",
        src: "/gallery/showers/20140430_141609.jpg",
        caption: "Walk-in steam enclosure",
        alt: "Large walk-in glass steam enclosure with sliding doors and dark shower panels",
      },
      {
        id: "showers/20140430_141635.jpg",
        src: "/gallery/showers/20140430_141635.jpg",
        caption: "Walk-in steam enclosure",
        alt: "Sliding glass doors with sandblasted lower panels on a steam enclosure",
      },
      {
        id: "showers/20140402_115447.jpg",
        src: "/gallery/showers/20140402_115447.jpg",
        caption: "Frosted en-suite screen",
        alt: "Sandblasted glass en-suite door with a matching fixed side panel",
      },
      {
        id: "showers/IMG_7248.JPG",
        src: "/gallery/showers/IMG_7248.JPG",
        caption: "Sliding shower doors",
        alt: "Framed sliding glass shower doors in a bathroom with an orange glass wall",
      },
      {
        id: "showers/IMG_0987.JPG",
        src: "/gallery/showers/IMG_0987.JPG",
        caption: "Over-bath shower screen",
        alt: "Full-length sliding glass shower screen fitted over a bath",
      },
    ],
  },
  {
    id: "splashbacks",
    label: "Splashbacks & coloured glass",
    short: "Splashbacks",
    blurb:
      "Back-painted toughened glass for kitchen splashbacks, upstands, worktops and wall panels.",
    images: [
      {
        id: "splashbacks/IMG_1962.JPG",
        src: "/gallery/splashbacks/IMG_1962.JPG",
        caption: "Grey glass kitchen splashback",
        alt: "Grey back-painted glass splashback behind a hob and along a kitchen worktop",
      },
      {
        id: "splashbacks/IMG_0858.JPG",
        src: "/gallery/splashbacks/IMG_0858.JPG",
        caption: "Grey glass kitchen splashback",
        alt: "Grey glass splashback wrapping the corner behind a kitchen extractor",
      },
      {
        id: "splashbacks/IMG_1634.JPG",
        src: "/gallery/splashbacks/IMG_1634.JPG",
        caption: "Glass worktop & upstand",
        alt: "White back-painted glass kitchen worktop with a matching glass upstand",
      },
      {
        id: "splashbacks/IMG_7250.JPG",
        src: "/gallery/splashbacks/IMG_7250.JPG",
        caption: "Orange glass wall panel",
        alt: "High-gloss orange back-painted glass wall panel beside a fitted wardrobe",
      },
    ],
  },
  {
    id: "glass-doors",
    label: "Frosted & etched glass doors",
    short: "Glass doors",
    blurb: "Sandblasted and etched frameless doors, pivots and dividers.",
    images: [
      {
        id: "glass-doors/IMG_7222.JPG",
        src: "/gallery/glass-doors/IMG_7222.JPG",
        caption: "Etched office entrance doors",
        alt: "Pair of sandblasted glass office doors with a clear etched bird motif",
      },
      {
        id: "glass-doors/diafora 009a.jpg",
        src: "/gallery/glass-doors/diafora 009a.jpg",
        caption: "Frosted glass room divider",
        alt: "Pair of full-height sandblasted glass doors used as a room divider",
      },
      {
        id: "glass-doors/ili 040.jpg",
        src: "/gallery/glass-doors/ili 040.jpg",
        caption: "Frosted pivot door",
        alt: "Frameless sandblasted glass pivot door to a bathroom",
      },
      {
        id: "glass-doors/diafora 006.jpg",
        src: "/gallery/glass-doors/diafora 006.jpg",
        caption: "Tinted glass kitchen door",
        alt: "Green-tinted sandblasted frameless glass door into a kitchen",
      },
    ],
  },
  {
    id: "partitions",
    label: "Partitions & display glass",
    short: "Partitions",
    blurb:
      "Frameless partitions with manifestation, glazed display cabinets and glass shelving.",
    images: [
      {
        id: "partitions/IMG_4864.JPG",
        src: "/gallery/partitions/IMG_4864.JPG",
        caption: "Corridor manifestation partition",
        alt: "Full-height frameless glass partition with a graduated frosted stripe pattern",
      },
      {
        id: "partitions/IMG_4866.JPG",
        src: "/gallery/partitions/IMG_4866.JPG",
        caption: "Corridor manifestation partition",
        alt: "Glazed corridor partition with frosted manifestation stripes catching the light",
      },
      {
        id: "partitions/IMG_1308.jpeg",
        src: "/gallery/partitions/IMG_1308.jpeg",
        caption: "Trophy display cabinet",
        alt: "Toughened glass display cabinet holding football trophies and a shirt",
      },
      {
        id: "partitions/IMG_0735.JPG",
        src: "/gallery/partitions/IMG_0735.JPG",
        caption: "Glass shelving",
        alt: "Toughened glass shelving on stainless brackets",
      },
    ],
  },
];

export const allImages: GalleryImage[] = sections.flatMap((s) => s.images);
