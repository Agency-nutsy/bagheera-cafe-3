import type { BlogPost, BlogCategory } from "@/types/blog";

// ── Authentic Asset Imports ──
import tikkaPeriPeriImg from "@/assets/peri peri.jpg";
import tikkaSizzleImg from "@/assets/tikka.webp";
import sangriyaImg from "@/assets/sangriya.jpg";

import forestImg from "@/assets/forest.webp";
import vibe2Img from "@/assets/vibe 2.webp";
import fullLoungeImg from "@/assets/full.webp";

import djImg from "@/assets/dj.webp";
import vibe3Img from "@/assets/vibe 3.webp";
import platterImg from "@/assets/platter.jpg";

import biryaniImg from "@/assets/biryani.jpg";
import nachosImg from "@/assets/nachos.jpg";
import pizzaImg from "@/assets/pizza (3).webp";

import blogMocktailsImg from "@/assets/blog-mocktails.jpg";
import blogGourmetShakeImg from "@/assets/blog-gourmet-shake.jpg";
import blogPartyCelebrationImg from "@/assets/blog-party-celebration.jpg";
import blogPartyPlatterImg from "@/assets/blog-party-platter.jpg";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "hudson-lane-party-blueprint-birthdays-group-gatherings-bagheera",
    title: "The Hudson Lane Party Blueprint: How to Host Epic Birthdays & Squad Gatherings at Bagheera",
    subtitle:
      "From VIP emerald booth reservations and custom sharing platters to resident DJ drops and celebratory sparklers — your definitive guide to stress-free group events in GTB Nagar.",
    excerpt:
      "Planning a birthday, reunion, or milestone celebration in North Delhi? Discover how Bagheera crafts unforgettable squad events with biophilic booths, multicuisine feasts, and late-night vibes.",
    date: "October 28, 2026",
    isoDate: "2026-10-28T18:30:00+05:30",
    readTime: "6 min read",
    category: "Stories & Guides",
    featuredImage: blogPartyCelebrationImg,
    featuredImageAlt:
      "Friends celebrating a birthday party with champagne flutes and sparklers at Bagheera Lounge VIP booth",
    author: {
      name: "Rohan Malhotra",
      role: "Events & Nightlife Curator, Bagheera Delhi",
    },
    sections: [
      {
        type: "paragraph",
        text: "Planning a group gathering in North Delhi can quickly turn into a logistical headache. Finding a venue on Hudson Lane that delivers pristine sound without ear-shattering distortion, generous seating without feeling squeezed against stranger tables, and food that genuinely wows everyone in your squad is notoriously difficult.",
      },
      {
        type: "paragraph",
        text: "At Bagheera Cafe & Lounge, group celebrations are our specialty. From milestone 21st birthdays and college society blowouts to intimate corporate farewells, our jungle-luxe interior was architected from the floor up to handle high-energy gatherings with effortless elegance.",
      },
      {
        type: "heading2",
        text: "The VIP Sanctuary: Booths Designed for Groups",
      },
      {
        type: "paragraph",
        text: "Forget cramming chairs around flimsy cafe tables. Bagheera's layout features expansive semicircular booth seating wrapped in deep emerald velvet. Designed to host squads of 6 to 15 guests in secluded comfort, these alcoves offer panoramic views of the lounge while granting your crew an intimate circle for toasts, laughter, and cake-cutting.",
      },
      {
        type: "image",
        image: blogPartyCelebrationImg,
        alt: "Squad celebration with glowing celebratory sparklers and champagne flutes around a velvet booth table",
        caption: "Milestones in style: Our emerald VIP booths combine party intimacy with electric lounge energy.",
      },
      {
        type: "paragraph",
        text: "When your birthday cake arrives, our service team coordinates directly with the DJ console. As celebratory cold sparklers light up your table, custom birthday tracks fill the room, turning your special moment into an all-eyes-on-you spectacle.",
      },
      {
        type: "quote",
        text: "A great party isn't just about loud music. It's about pacing: great finger food first, uninterrupted drinks, and then a seamless crescendo onto the dance floor.",
        author: "Rohan Malhotra",
      },
      {
        type: "heading2",
        text: "The Squad Feast: High-Impact Sharing Platters",
      },
      {
        type: "paragraph",
        text: "Nothing stalls party momentum faster than guests struggling over complicated menus. For large groups, our culinary team recommends starting with our jumbo sharing platters — engineered to satisfy diverse palates in one dramatic presentation.",
      },
      {
        type: "image",
        image: blogPartyPlatterImg,
        alt: "Lavish sharing platter with gourmet sliders, loaded cheese nachos, and tandoori skewers on slate board",
        caption: "Feasting made seamless: Handcrafted sharing boards packed with sliders, skewers, and loaded nachos.",
      },
      {
        type: "paragraph",
        text: "Our crowd-pleaser party lineup brings together crowd favorites designed for sharing:",
      },
      {
        type: "list",
        items: [
          "Loaded Corn Tortilla Nachos: In-house fried corn chips smothered in melted cheddar queso, spiced shredded chicken, garden pico de gallo, and cool sour cream.",
          "Gourmet Artisanal Sliders: Fluffy golden brioche buns layered with melted cheddar, sweet caramelized onions, and juicy herb patties.",
          "Smoky Clay-Pit Skewers: Succulent chunks of tandoor-roasted chicken and spiced paneer tikka charred fresh over live charcoal embers.",
          "Signature Dip Flight: House-milled mint-coriander emulsion, smoky chipotle aioli, and sweet mango-chili relish for effortless dipping.",
        ],
      },
      {
        type: "heading2",
        text: "Seamless Sound & Live DJ Requests",
      },
      {
        type: "paragraph",
        text: "Have a special playlist your crew can't live without? Our resident DJs are on deck every Friday and Saturday night, ready to weave your anthem requests into their high-octane sets. Transitioning smoothly from chill sunset lounge beats to peak commercial-Punjabi and Afro-tech drops, the vibe evolves organically as the evening unfolds.",
      },
      {
        type: "callout",
        calloutTitle: "Party Booking Checklist",
        calloutType: "tip",
        text: "Planning for 8 or more guests? Book your VIP booth at least 48 hours in advance by calling our reservation desk (+91-09910192252). Ask our events team about custom pre-fixe appetizer packages and cake-holding services to make your night completely hassle-free.",
      },
      {
        type: "heading2",
        text: "Celebrate Tonight at Bagheera",
      },
      {
        type: "paragraph",
        text: "Life's best milestones deserve more than an ordinary dinner. Step inside the emerald sanctuary of Bagheera, gather your tribe, and let us take care of every detail while you create memories that will be talked about for months to come.",
      },
    ],
    seo: {
      metaTitle: "Host Birthdays & Group Parties in Hudson Lane | Bagheera Delhi",
      metaDescription:
        "Plan your dream birthday party, reunion, or group celebration at Bagheera Delhi in Hudson Lane. VIP booth seating, gourmet sharing platters, live DJ, and late-night vibes.",
      keywords: [
        "birthday celebration cafe Hudson Lane",
        "party lounge GTB Nagar",
        "group bookings Delhi cafes",
        "Bagheera party packages",
        "best place for birthday party North Delhi",
      ],
    },
  },
  {
    slug: "sip-the-wild-signature-mocktails-and-shakes-hudson-lane",
    title: "Sip the Wild: Signature Mocktails & Shakes Crafted for Hudson Lane",
    subtitle:
      "Beyond ordinary coolers: How cold-pressed botanicals, smoking citrus infusions, and decadent loaded shakes turned Bagheera's non-alcoholic bar into a North Delhi destination.",
    excerpt:
      "Explore the artistry behind Bagheera's mixology. From smoking botanical coolers to velvet KitKat dessert shakes, discover the ultimate drinks to pair with your Hudson Lane feast.",
    date: "October 28, 2026",
    isoDate: "2026-10-28T15:00:00+05:30",
    readTime: "5 min read",
    category: "Food & Flavors",
    featuredImage: blogMocktailsImg,
    featuredImageAlt:
      "Trio of handcrafted signature mocktails with dry ice vapor and botanical garnishes at Bagheera Lounge",
    author: {
      name: "Kabir Sen",
      role: "Head of Mixology & Beverage Craft, Bagheera Delhi",
    },
    sections: [
      {
        type: "paragraph",
        text: "Step into Hudson Lane on a sultry Delhi afternoon or an electric weekend evening, and the search for truly inventive drinks often leaves diners disappointed. Most cafes rely on premixed syrups, oversweet sodas, and watered-down mint mojitos. But at Bagheera, our beverage counter was conceived with the same obsessive artisan rigor as our live tandoor and stone-baked pizza stations.",
      },
      {
        type: "paragraph",
        text: "We believe a non-alcoholic cocktail or specialty shake should possess depth, theater, and botanical sophistication. Whether you are balancing the fiery heat of our Peri Peri Tikka or settling in for an evening of long conversation under our canopy, our beverage program transforms everyday sipping into a sensory journey.",
      },
      {
        type: "heading2",
        text: "The Botanical Awakening: Cold-Pressed Fruits & Smoking Vapor",
      },
      {
        type: "paragraph",
        text: "The foundation of our signature mocktail menu lies in fresh, whole botanical ingredients. Instead of shelf-stable flavor concentrates, our bar team begins each afternoon cold-pressing fresh Valencia oranges, tart key limes, and ripe pomegranate seeds. We hand-pound fresh basil, kaffir lime leaves, and garden rosemary to extract their natural aromatic oils.",
      },
      {
        type: "image",
        image: blogMocktailsImg,
        alt: "Vibrant botanical mocktails garnished with fresh orchids, citrus wheels, and delicate aromatic smoke",
        caption: "The art of non-alcoholic mixology: Cold-pressed juices, layered tinctures, and gentle mist infuse every glass.",
      },
      {
        type: "paragraph",
        text: "Take our iconic Wild Orchard Cooler: layered pomegranate reduction with crushed wild berries, topped with ginger beer and chilled dry-ice mist that cascades over the rim. It is crisp, fragrant, and instantly cleanses the palate without cloying sweetness.",
      },
      {
        type: "quote",
        text: "Mixology isn't about alcohol; it's about balance. Acid, sweetness, aroma, and temperature must hit in harmonious waves with every single sip.",
        author: "Kabir Sen",
      },
      {
        type: "heading2",
        text: "The Shake Sanctuary: Thick, Velvety & Decadent",
      },
      {
        type: "paragraph",
        text: "For sweet tooth aficionados and late-night dessert cravers, our shake bar offers pure indulgence. Unlike mass-produced shakes thinned out with ice cubes, Bagheera shakes are churned dense with premium whole dairy, rich Madagascar vanilla cream, and generous chunks of gourmet treats.",
      },
      {
        type: "image",
        image: blogGourmetShakeImg,
        alt: "Rich artisan KitKat and chocolate hazelnut loaded milkshake topped with whipped cream and wafer stick",
        caption: "Decadence in a glass: Our artisan shakes are churned extra thick with real chocolate shavings and Belgian fudge.",
      },
      {
        type: "paragraph",
        text: "Our headline favorite — the Loaded KitKat Crunch Shake — blends crisp malt wafers, Belgian cocoa ganache, and chilled hazelnut praline, crowned with a towering swirl of whipped cream, crispy waffle crisps, and warm chocolate fudge drizzle. It has become an undisputed rite of passage for students and foodies celebrating post-exam victories in GTB Nagar.",
      },
      {
        type: "callout",
        calloutTitle: "The Golden Palate Pairing Tip",
        calloutType: "tip",
        text: "Heading in for our spicy clay-oven starters like the Stuffed Murg Tangdi or Peri Peri Skewers? Skip ordinary water and pair your grill with our Blue Citrus Lagoon Cooler. The cooling blue curacao syrup, crushed mint, and fizz counterbalance the charcoal heat like a dream.",
      },
      {
        type: "heading2",
        text: "Late-Night Refreshment Until 1:00 AM",
      },
      {
        type: "paragraph",
        text: "Because our bar keeps pouring until 1:00 AM every night, you don't need to wrap up early. Whether you are driving down from Civil Lines or wrapping up group study sessions in North Campus, the doors of Bagheera's bar stay open to cool, comfort, and elevate your nocturnal cravings.",
      },
    ],
    seo: {
      metaTitle: "Signature Mocktails & Shakes in Hudson Lane | Bagheera Delhi",
      metaDescription:
        "Discover North Delhi's most inventive mocktails and loaded gourmet shakes at Bagheera Delhi, Hudson Lane. Cold-pressed botanical coolers, KitKat shakes, and late-night bar sips.",
      keywords: [
        "best mocktails Hudson Lane",
        "shakes in GTB Nagar",
        "Bagheera Delhi drinks menu",
        "non-alcoholic bar North Campus",
        "dessert shakes Delhi cafe",
      ],
    },
  },
  {
    slug: "why-our-peri-peri-chicken-tikka-is-talk-of-gtb-nagar",
    title: "Why Our Peri Peri Chicken Tikka Is the Talk of GTB Nagar",
    subtitle:
      "A fiery African spice blend meets the traditional North Indian clay tandoor. Here is what makes this Hudson Lane sensation an obsession.",
    excerpt:
      "Discover the secret marinade, the intense clay tandoor char, and why foodies across North Delhi flock to Bagheera for our signature Peri Peri Tikka.",
    date: "September 8, 2026",
    isoDate: "2026-09-08T14:30:00+05:30",
    readTime: "5 min read",
    category: "Food & Flavors",
    featuredImage: tikkaPeriPeriImg,
    featuredImageAlt: "Sizzling Peri Peri Chicken Tikka plated with mint dip and sliced onions",
    author: {
      name: "Chef Vikram Rathore",
      role: "Head of Culinary, Bagheera Delhi",
    },
    sections: [
      {
        type: "paragraph",
        text: "Walk down Hudson Lane on any given evening, and the sheer density of cafes in GTB Nagar can feel overwhelming. Menus blur together with predictable burgers, standardized pastas, and safe appetizers. But step into the sultry, emerald gloom of Bagheera, and you will notice a distinct aroma cutting through the twilight air: charred garlic, crushed African bird’s eye chilies, and the unmistakable smokiness of authentic charcoal-fired clay.",
      },
      {
        type: "paragraph",
        text: "Our Peri Peri Chicken Tikka wasn't conceived as another generic spicy starter. It was engineered to redefine what tandoori chicken can be in North Delhi. By fusing vibrant African culinary fire with heritage Punjabi tandoor craftsmanship, we created a dish that has quickly become the most talked-about plate in North Campus.",
      },
      {
        type: "heading2",
        text: "The 24-Hour Citrus & Bird's Eye Marinade",
      },
      {
        type: "paragraph",
        text: "The real alchemy begins a full day before a single skewer meets the flames. While ordinary chicken tikka relies heavily on generic commercial powders and food coloring, our kitchen takes a no-shortcuts artisan approach. We steep boneless tender chicken thigh chunks in a proprietary marinade crafted from imported African bird's eye chilies, roasted red bell peppers, charred garlic cloves, zesty lemon juice, and cold-pressed mustard oil.",
      },
      {
        type: "image",
        image: tikkaSizzleImg,
        alt: "Freshly roasted chicken tikka skewers fresh from the clay tandoor",
        caption: "Charred to golden-red perfection: Our skewers take on an intense, natural smoke ring without artificial dyes.",
      },
      {
        type: "paragraph",
        text: "Resting the meat for twenty-four hours allows the natural citric acids and crushed botanicals to penetrate deep into the fibers. The result? Meat that remains overwhelmingly juicy inside, even when exposed to intense 700-degree clay oven embers.",
      },
      {
        type: "quote",
        text: "A great tikka isn't just about heat that numbs your tongue; it's about layered acidity, smokiness, and that succulent burst when you take the first bite.",
        author: "Chef Vikram Rathore",
      },
      {
        type: "heading2",
        text: "The High-Heat Charcoal Embrace",
      },
      {
        type: "paragraph",
        text: "Cooking over authentic charcoal is an art that requires razor-sharp timing. Each skewer is plunged into our custom high-heat tandoor, searing the outer glaze in seconds. This seals in the moisture and creates those signature blackened edges that deliver an irresistible caramelized crunch.",
      },
      {
        type: "paragraph",
        text: "Before arriving at your table, each portion is given a light brush of spiced clarified butter (desi ghee infused with smoked paprika) and sprinkled with our house-milled jungle masala. Served alongside fresh mint-coriander emulsion and quick-pickled beetroot onions, it strikes a harmonious balance between intense heat and palate-cleansing freshness.",
      },
      {
        type: "callout",
        calloutTitle: "The Insider Pairing Recommendation",
        calloutType: "tip",
        text: "The bold, zesty capsicum kick of the Peri Peri Tikka pairs exceptionally well with our signature chilled Bagheera Sangriya. The wine-steeped citrus fruits and cold berry undertones cut right through the chili warmth, creating an unforgettable sensory contrast.",
      },
      {
        type: "image",
        image: sangriyaImg,
        alt: "Chilled Bagheera Sangriya goblet garnished with fresh citrus and fruit slices",
        caption: "The ultimate balance: Bagheera's chilled ruby Sangriya acts as the perfect cooling accompaniment.",
      },
      {
        type: "heading2",
        text: "Why North Campus Keeps Coming Back",
      },
      {
        type: "paragraph",
        text: "Whether you're unwinding after lectures at Delhi University or catching up with friends before a late-night party, this dish has earned its reputation through sheer consistency. It delivers the kind of punchy flavor memory that has food bloggers and casual diners alike coming back week after week. If you haven't experienced it yet, your next table booking at Bagheera is incomplete without it.",
      },
    ],
    seo: {
      metaTitle: "Why Our Peri Peri Chicken Tikka Is the Talk of GTB Nagar | Bagheera Delhi",
      metaDescription:
        "Discover how Bagheera Delhi transformed the classic tandoori starter into Hudson Lane's most craved dish with a 24-hour bird's eye chili marinade.",
      keywords: [
        "Peri Peri Chicken Tikka GTB Nagar",
        "best chicken tikka Hudson Lane",
        "Bagheera Delhi food menu",
        "North Campus cafes Delhi",
        "tandoori starters Delhi",
      ],
    },
  },
  {
    slug: "inside-bagheera-jungle-theme-story-behind-design",
    title: "Inside Bagheera's Jungle Theme: The Story Behind the Design",
    subtitle:
      "How we transformed a third-floor Hudson Lane space into North Delhi's most immersive, mystical forest-luxe sanctuary.",
    excerpt:
      "Step into the wild side of luxury. Explore the architectural philosophy, moody emerald tones, and nocturnal elegance that define Bagheera Cafe & Lounge.",
    date: "September 5, 2026",
    isoDate: "2026-09-05T16:00:00+05:30",
    readTime: "6 min read",
    category: "Behind the Scenes",
    featuredImage: forestImg,
    featuredImageAlt: "Lush botanical foliage and golden amber backlighting inside Bagheera Lounge",
    author: {
      name: "Tushar Anand",
      role: "Founder & Creative Director",
    },
    sections: [
      {
        type: "paragraph",
        text: "Hudson Lane is universally celebrated for its vibrant energy: throngs of university students, buzzing traffic, neon signs flashing across every storefront, and the non-stop hum of North Delhi hustle. But when we first stepped onto the third floor of building 2529, we envisioned something entirely contradictory to the chaos below — an escape.",
      },
      {
        type: "paragraph",
        text: "We asked ourselves a daring question: What if walking into a lounge in GTB Nagar felt like stepping straight off the street and into a forgotten, moonlit clearing deep inside a nocturnal rainforest? That singular thought birthed Bagheera Cafe & Lounge.",
      },
      {
        type: "heading2",
        text: "The Concept: Nocturnal Luxury Meets Untamed Nature",
      },
      {
        type: "paragraph",
        text: "Most thematic cafes in Delhi fall into the trap of superficial gimmicks — plastic vines, artificial grass on plain drywall, and harsh fluorescent lighting. From day one, our design mandate was 'Jungle-Luxe'. We wanted an opulent, moody environment where nature feels ancient, sophisticated, and deeply atmospheric rather than costume-like.",
      },
      {
        type: "image",
        image: vibe2Img,
        alt: "Intimate booth seating bathed in warm amber tones surrounded by deep jungle greens",
        caption: "Sensory design in action: Custom velvet banquettes, shadowed alcoves, and warm golden illumination.",
      },
      {
        type: "paragraph",
        text: "We chose a hyper-curated color palette anchored by our signature midnight base (#0A0F0D) — a pitch-black green that mimics the floor of a dense canopy at midnight. Against this moody canvas, we layered rich emerald velvets, warm polished wood grains, and bespoke ambient lighting finished in antique gold (#F3D06B) and lion’s amber.",
      },
      {
        type: "quote",
        text: "Bagheera was created as a sanctuary. You step out of the elevator and the city melts away; your eyes adjust to the amber glow, and the rhythm of the jungle takes over.",
        author: "Tushar Anand",
      },
      {
        type: "heading2",
        text: "The Architecture of Ambience: Sound, Light & Canopy",
      },
      {
        type: "paragraph",
        text: "True immersion is multi-sensory. To bring the forest to life, every structural decision was carefully orchestrated:",
      },
      {
        type: "list",
        items: [
          "Biophilic Suspended Ceilings: Cascading botanical installations and hanging terrariums that break hard ceiling angles, providing a sense of natural shelter.",
          "Curated Acoustic Damping: Custom-treated acoustic walls hidden behind deep textures ensure intimate conversations remain private, even when the lounge is packed.",
          "Dynamic Twilight Illumination: Custom dimmers and concealed warm-spectrum LED ribbons that transition seamlessly from a mellow daytime lounge to an electric late-night sanctum.",
          "Textured Gold Details: Brushed brass fixtures and metallic trims that catch stray beams of light, evocative of moonlight piercing through rainforest branches.",
        ],
      },
      {
        type: "image",
        image: fullLoungeImg,
        alt: "Panoramic interior view of Bagheera showing the bar and canopy detailing",
        caption: "The grand expanse: Where industrial edge gives way to botanical elegance and golden shadows.",
      },
      {
        type: "heading2",
        text: "The Spirit of the Black Panther",
      },
      {
        type: "paragraph",
        text: "In literature and folklore, Bagheera represents stealth, regal poise, and absolute mastery of the wilderness. That spirit is woven into our service ethos. Our staff moves with quiet attentiveness; our cocktails are poured with precision; and our spaces offer corners of total discretion alongside high-energy communal tables.",
      },
      {
        type: "callout",
        calloutTitle: "Best Time to Experience the Atmosphere",
        calloutType: "highlight",
        text: "Visit us around 7:00 PM on a Thursday or Friday evening. As twilight settles over GTB Nagar, our lighting shifts into evening mode, the resident DJ eases into melodic jungle-house grooves, and the ambient glow makes every photograph look cinematic.",
      },
      {
        type: "paragraph",
        text: "When you spend an evening at Bagheera, you aren't merely sitting down for dinner — you are taking shelter in the wild. We invite you to step through our doors, claim your booth, and leave the noise of the city behind.",
      },
    ],
    seo: {
      metaTitle: "Inside Bagheera's Jungle Theme: The Story Behind the Design | Bagheera Delhi",
      metaDescription:
        "Learn how Bagheera Cafe & Lounge created North Delhi's premier jungle-luxe interior on Hudson Lane, blending nocturnal forest motifs with modern luxury.",
      keywords: [
        "jungle themed lounge Delhi",
        "Bagheera Cafe interior design",
        "Hudson Lane aesthetic cafes",
        "best ambiance lounge GTB Nagar",
        "themed restaurants North Delhi",
      ],
    },
  },
  {
    slug: "best-nights-to-visit-bagheera-dj-sets-sheesha-late-night",
    title: "Best Nights to Visit Bagheera: DJ Sets, Sheesha & Late-Night Menu",
    subtitle:
      "From high-octane weekend DJ drops to laid-back weekday sheesha sessions until 1:00 AM, here is your insider guide to North Delhi's nocturnal playground.",
    excerpt:
      "Plan your perfect night out at Bagheera. Learn when our top resident DJs perform, how to pick the finest herbal sheesha blends, and what to order late at night.",
    date: "September 2, 2026",
    isoDate: "2026-09-02T18:00:00+05:30",
    readTime: "5 min read",
    category: "Nightlife",
    featuredImage: djImg,
    featuredImageAlt: "Live DJ mixing high-energy beats at Bagheera Lounge under dynamic club lighting",
    author: {
      name: "Rohan Malhotra",
      role: "Events & Nightlife Curator",
    },
    sections: [
      {
        type: "paragraph",
        text: "When the sun goes down over North Campus, Hudson Lane shifts into a completely different gear. Students pack away their study notes, professionals clock out of nearby offices, and groups of friends look for a place that offers more than just loud background noise. They want an experience with energy, great food, and flawless late-night hospitality.",
      },
      {
        type: "paragraph",
        text: "At Bagheera Cafe & Lounge, nightfall is when the jungle truly awakens. With doors open until 1:00 AM every single night of the week, we have established ourselves as the premier late-night refuge in GTB Nagar. Here is everything you need to know to pick the ideal night for your tribe.",
      },
      {
        type: "heading2",
        text: "The Weekend Pulse: Friday & Saturday DJ Nights",
      },
      {
        type: "paragraph",
        text: "If your idea of a great night out includes thumping basslines, infectious Punjabi-commercial drops, and an electric dance floor, Friday and Saturday nights at Bagheera are non-negotiable. Our resident DJs curate sonic journeys that transition effortlessly from melodic afro-house and deep tech early in the evening to high-energy commercial chart-toppers as the clock ticks past 10:00 PM.",
      },
      {
        type: "image",
        image: vibe3Img,
        alt: "Vibrant party atmosphere with illuminated lounge tables and partygoers at Bagheera",
        caption: "Peak weekend vibes: State-of-the-art lighting and sound engineering deliver an unmatched club-lounge experience.",
      },
      {
        type: "paragraph",
        text: "What sets our dance sessions apart is the layout: our lounge is structured with generous spacing between tables so you never feel cramped, while central areas allow dancers to move freely without bumping into dining patrons.",
      },
      {
        type: "heading2",
        text: "The Weekday Vibe: Unwind with Premium Herbal Sheesha",
      },
      {
        type: "paragraph",
        text: "Prefer a chill, conversational evening where you can sink into velvet sofas, listen to deep lounge tracks, and share long conversations? Tuesday and Wednesday evenings are Bagheera’s best-kept secret.",
      },
      {
        type: "paragraph",
        text: "Our dedicated sheesha lounge serves an extensive collection of 100% tobacco-free herbal molasses blends engineered for long-lasting, ultra-dense clouds without the harsh throat bite:",
      },
      {
        type: "list",
        items: [
          "Double Apple & Ice Mint: The timeless classic, delivering crisp orchard sweetness backed by sub-zero throat cooling.",
          "Citrus Blast: A tangy fusion of sweet Valencia orange, lime zest, and cold spearmint.",
          "Blueberry Mist: Deep berry richness paired with smooth vanilla undertones.",
          "Kiwi Strawberry Swirl: Tropical tangy top notes with a mellow, aromatic finish.",
        ],
      },
      {
        type: "quote",
        text: "We keep our coals fresh and rotate our pipes continuously. A sheesha session at Bagheera is crafted to stay smooth from the first puff to the last.",
        author: "Bagheera Master Shisha Artisan",
      },
      {
        type: "heading2",
        text: "The 1:00 AM Midnight Feast",
      },
      {
        type: "paragraph",
        text: "Most eateries in GTB Nagar shut their kitchens down by 11:00 PM, leaving hungry night owls with few quality options. At Bagheera, our kitchen keeps firing late into the night.",
      },
      {
        type: "image",
        image: platterImg,
        alt: "Gourmet assorted appetizer platter with tandoori delicacies and dips",
        caption: "Fuel for the night: Our assorted sharing platters keep the table fueled until last call.",
      },
      {
        type: "paragraph",
        text: "Whether you crave a steaming handi of Moradabadi Biryani, a crisp stone-baked pepperoni pizza, or loaded cheese nachos to share with your group, you receive the same gourmet standard at midnight as you would during prime dinner hours.",
      },
      {
        type: "callout",
        calloutTitle: "Weekend Table Reservation Tip",
        calloutType: "tip",
        text: "Due to North Delhi nightlife demand, tables on Friday and Saturday nights between 8:30 PM and 11:30 PM book out hours in advance. We strongly recommend calling our reservation desk (+91-09910192252) at least 24 hours ahead to secure prime booth seating.",
      },
    ],
    seo: {
      metaTitle: "Best Nights to Visit Bagheera: DJ Sets, Sheesha & Late-Night Menu | Bagheera Delhi",
      metaDescription:
        "Your guide to nightlife at Bagheera Delhi in Hudson Lane. Discover live DJ sets, premium herbal sheesha flavours, and our 1:00 AM late-night kitchen menu.",
      keywords: [
        "best lounge GTB Nagar nightlife",
        "live DJ Hudson Lane",
        "sheesha lounge North Delhi",
        "late night cafes open until 1am Delhi",
        "Bagheera weekend party",
      ],
    },
  },
  {
    slug: "5-dishes-you-must-try-at-bagheera-biryani-to-nachos",
    title: "5 Dishes You Must Try at Bagheera (From Biryani to Nachos)",
    subtitle:
      "A foodie's roadmap through our multicuisine kitchen — five legendary plates that define the Bagheera dining experience in Hudson Lane.",
    excerpt:
      "From aromatic Moradabadi and Yakhni Biryani to molten cheesy nachos and our signature Sangriya, here are the top 5 culinary showstoppers at Bagheera.",
    date: "August 28, 2026",
    isoDate: "2026-08-28T13:00:00+05:30",
    readTime: "6 min read",
    category: "Food & Flavors",
    featuredImage: biryaniImg,
    featuredImageAlt: "Aromatic Dum Biryani garnished with golden fried onions and fresh mint leaves",
    author: {
      name: "Chef Vikram Rathore",
      role: "Head of Culinary, Bagheera Delhi",
    },
    sections: [
      {
        type: "paragraph",
        text: "When you look at our menu for the first time, you will immediately notice the bold variety: authentic Mughlai handis sitting shoulder-to-shoulder with artisanal Italian pastas, fiery Mexican starters, and street-style Asian wok specials. But with dozens of tantalizing choices, where should a first-timer begin?",
      },
      {
        type: "paragraph",
        text: "To help you navigate your first expedition into the culinary jungle, our culinary team has distilled our menu down to the five absolute showstoppers. These dishes have garnered hundreds of five-star reviews and earned a loyal cult following among North Delhi gastronomes.",
      },
      {
        type: "heading2",
        text: "1. The Royal Moradabadi Yakhni Biryani",
      },
      {
        type: "paragraph",
        text: "Unlike the heavy, saffron-dominated Hyderabadi biryanis common across Delhi, Moradabadi biryani is all about subtlety, clarity of broth, and pure aromatic intensity. We simmer chicken on the bone with whole coriander seeds, fennel, green cardamom, and ginger in a slow-simmered aromatic yakhni (bone broth).",
      },
      {
        type: "paragraph",
        text: "Aged long-grain basmati rice is cooked directly in this fragrant stock until every grain is infused with essence. Finished with whole fried green chilies and a side of our tangy house raita and spicy tomato relish, it is delicate, deeply comforting, and virtually greaseless.",
      },
      {
        type: "quote",
        text: "The secret to our Yakhni Biryani is patience. You cannot rush the broth. When you lift the lid, the fragrance fills the entire lounge floor.",
        author: "Chef Vikram Rathore",
      },
      {
        type: "heading2",
        text: "2. Stuffed Murg Tangdi: Tandoori Royalty",
      },
      {
        type: "paragraph",
        text: "If you love tandoori chicken, prepare to have your expectations elevated. Our Stuffed Murg Tangdi features plump, prime chicken drumsticks carefully deboned and stuffed with a rich filling of spiced minced chicken, roasted cashews, paneer crumbs, and fresh herbs.",
      },
      {
        type: "paragraph",
        text: "Coated in a velvet yellow mustard marinade and roasted on iron skewers over live coals, the exterior is smoky and crisp, while the center reveals a decadent, savory surprise with every bite. It is pure celebration on a platter.",
      },
      {
        type: "heading2",
        text: "3. Loaded Cheesy Chicken Nachos",
      },
      {
        type: "image",
        image: nachosImg,
        alt: "Tower of crispy tortilla chips smothered in melted cheddar cheese, shredded chicken, and jalapenos",
        caption: "The ultimate sharing plate: Golden corn nachos layered with homemade queso and vibrant pico de gallo.",
      },
      {
        type: "paragraph",
        text: "Every great lounge needs an irresistible table snack, and our Loaded Chicken Nachos reign supreme. We fry fresh corn tortilla chips in-house so they remain audibly crunchy under weight. We then layer them generously with spiced shredded chicken, warm molten cheddar cheese sauce, refried black beans, pickled jalapeños, and chunky garden pico de gallo.",
      },
      {
        type: "paragraph",
        text: "A cool dollop of sour cream on top ties all the contrasting temperatures together. Whether you are splitting it with colleagues or sharing over drinks, the platter disappears in minutes.",
      },
      {
        type: "heading2",
        text: "4. Stone-Baked Artisanal Pizza",
      },
      {
        type: "image",
        image: pizzaImg,
        alt: "Freshly baked thin-crust pizza topped with gourmet cheeses and garden basil",
        caption: "Italian finesse in the jungle: Hand-stretched dough with blistered crusts and rich san marzano style sauce.",
      },
      {
        type: "paragraph",
        text: "We take our oven craft seriously. Our pizza dough undergoes a 48-hour cold fermentation process, creating a crust that is airy, light on the stomach, and delightfully blistered. Topped with our slow-simmered herb tomato sauce and 100% mozzarella, each slice strikes the golden ratio of chewy crust to gooey melt.",
      },
      {
        type: "heading2",
        text: "5. The Signature Bagheera Sangriya",
      },
      {
        type: "image",
        image: sangriyaImg,
        alt: "Bagheera Sangriya with fresh orange slices and cinnamon stick in a crystal glass",
        caption: "Our crown beverage: Steeped fruits, citrus zest, and cold aromatic spices.",
      },
      {
        type: "paragraph",
        text: "No visit to Bagheera is complete without our iconic namesake drink. Crafted by our master mixologists, the Bagheera Sangriya is an exquisite infusion of ruby grapes, diced green apples, fresh orange wheels, and a hint of cinnamon and cloves. Available both as an exotic mocktail or spirit-forward cocktail, it provides a cooling, effervescent finish to any heavy meal.",
      },
      {
        type: "callout",
        calloutTitle: "First Time Ordering?",
        calloutType: "tip",
        text: "For a group of 3 to 4 people, order the Loaded Chicken Nachos and Stuffed Murg Tangdi to start, follow with a handi of Moradabadi Biryani, and wash it all down with a pitcher of Bagheera Sangriya. It is the ultimate Bagheera signature tasting spread.",
      },
    ],
    seo: {
      metaTitle: "5 Dishes You Must Try at Bagheera (From Biryani to Nachos) | Bagheera Delhi",
      metaDescription:
        "The ultimate foodie guide to Bagheera Delhi in Hudson Lane. Discover our top 5 dishes including Moradabadi Biryani, Stuffed Tangdi, Loaded Nachos, and Sangriya.",
      keywords: [
        "best food Bagheera Cafe",
        "Moradabadi Biryani Hudson Lane",
        "chicken nachos GTB Nagar",
        "top dishes to order Bagheera Delhi",
        "North Delhi food guide",
      ],
    },
  },
];

// ── Helper Utilities ──

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  category: BlogCategory,
  limit = 2
): BlogPost[] {
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === category
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const others = BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category !== category
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function getAllCategories(): ("All" | BlogCategory)[] {
  const cats = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
  return ["All", ...cats];
}
