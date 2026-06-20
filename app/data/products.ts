export interface Product {
  id: string;
  category: string;
  name: string;
  moq: string;
  desc: string;
  longDesc: string;
  specs: string[];
  tag: string;
  image: string;
  gallery?: string[];
  technicalDetails: Record<string, string>;
  keywords: string[];
  applications: string[];
  features: string[];
}

export const allProducts: Product[] = [
  {
    id: "bw-201-specific-fit-tesla-model-x",
    category: "Specific Fit",
    name: "BW-201 Specific Fit Wiper Blade for Tesla Model X",
    moq: "300 PCS",
    desc: "OEM-grade spray-type windshield wiper blade engineered specifically for Tesla Model X with integrated washer nozzle system.",
    longDesc: "The BW-201 is a premium OEM replacement wiper blade specifically designed for the Tesla Model X. It features an innovative integrated spray-type nozzle system that delivers washer fluid directly along the blade path, ensuring clear vision and safe driving in all conditions. Built with AA+ grade natural rubber and a precision-engineered buckle system, this blade offers a perfect plug-and-play fit without any adapters. Designed to meet the highest OE standards for luxury electric vehicles, the BW-201 delivers streak-free wiping, ultra-quiet operation, and long-lasting durability. As a leading China wiper blade manufacturer, we ensure every BW-201 meets rigorous quality control standards including salt spray, ozone, and cold resistance testing.",
    specs: ["Integrated Spray-Type Nozzle System", "OEM Tesla Model X Direct Fitment", "Ultra-Low Noise Wiping Technology", "Plug & Play Installation - No Adapters Required", "AA+ Grade Natural Rubber Wiping Edge", "Memory High-Elastic Steel Frame", "Anti-Ozone & UV Resistant Coating"],
    tag: "Custom Fit",
    image: "https://sc02.alicdn.com/kf/Hf62654b25ce145c596b525b489f1a81aW.png",
    gallery: [
      "https://sc02.alicdn.com/kf/H6e3b51f66a584ee5a665478f3be7110aA.jpg",
      "https://sc02.alicdn.com/kf/H86d15ad536c54fa994a5b6f37a465243N.jpg"
    ],
    technicalDetails: {
      "Product Model": "BW-201",
      "Compatibility": "Tesla Model X (2015-2023) - Specific Fit",
      "Wiper Type": "Specific Fit Beam Blade with Integrated Spray Nozzles",
      "Nozzle Type": "Integrated Spray System (Washer Fluid)",
      "Size Specifications": '18" (460mm) Driver Side & 28" (710mm) Passenger Side',
      "Main Material": "AA+ Grade Natural Rubber with Teflon Coating",
      "Steel Sheet": "Memory High-Elastic Spring Steel",
      "Installation": "Direct-Fit (No Adapter Needed)",
      "Wipe Life": "Tested for 1.5 Million Wipes",
      "HS Code": "85124000",
      "OEM Service": "Custom Logo / Custom Packaging Available"
    },
    keywords: ["Tesla Model X wiper blade", "specific fit wiper blade", "Tesla wiper replacement", "OEM wiper blade Tesla", "integrated spray wiper", "China wiper blade manufacturer", "electric vehicle wiper blade", "BW-201 wiper", "Tesla windshield wiper"],
    applications: ["Tesla Model X (2015-2023)", "Luxury Electric Vehicles", "OEM Replacement Market", "North America Market", "Europe Market"],
    features: [
      "Integrated washer spray nozzles eliminate traditional spray jets for cleaner windshield",
      "Aerodynamic spoiler reduces wind lift at high speeds for consistent wiping pressure",
      "Direct OEM replacement - same connector as original Tesla wiper blades",
      "Teflon-coated natural rubber edge reduces friction and extends service life",
      "Tested for extreme weather conditions from -30°C to +80°C"
    ]
  },
  {
    id: "bw-861-multifunction-wiper-blade",
    category: "Multifunction",
    name: "BW-861 Multi-Function Universal Wiper Blade with 22 Adapters",
    moq: "500 PCS",
    desc: "Premium multi-adapter wiper blade system fitting 98% of global vehicles with 22 included adapters - ideal for distributors.",
    longDesc: "The BW-861 is a master-class engineering solution designed for diverse global markets. Featuring a patented multi-adapter hub system, this premium wiper blade effortlessly transitions between different wiper arm types including U-Hook (9x3, 9x4), Push Button, Side Pin, Pinch Tab, and BMW/Hook types. With 22 adapters included in every package, it covers over 98% of vehicles on the road worldwide. The high-performance aerodynamic design features a premium natural rubber wiping edge with Teflon coating, ensuring crystal-clear visibility and whisper-quiet operation under all weather conditions - from tropical heat to arctic cold. The flexible memory spring steel frame maintains consistent pressure across the entire windshield curve. Perfect for wholesale distributors and importers looking to minimize SKU inventory while maximizing vehicle coverage. As a trusted China wiper blade supplier, we offer full OEM/ODM support including custom branding, retail packaging, and private label services for the BW-861.",
    specs: ["Multi-Adapter Hub System with 22 Adapters (Fits 98%+ Vehicles)", "A-Grade Natural Rubber with Teflon Coating", "All-Weather Performance (-40°C to +100°C)", "Tested for 1.5 Million Wipes Durability", "Aerodynamic Frameless Design", "Flexible Memory Spring Steel Frame", "Custom OEM Branding Available"],
    tag: "High Efficiency",
    image: "https://sc02.alicdn.com/kf/Hb0410965e6194f008a583d7f500e1b7at.png",
    gallery: [
      "https://sc02.alicdn.com/kf/He42f0008cec147939f26d8d074cbaa93g.png",
      "https://sc02.alicdn.com/kf/H1f15201a978647bab1f01360a4aeadf91.png"
    ],
    technicalDetails: {
      "Model Number": "BW-861",
      "Compatibility": "Universal - 95%+ Vehicles (U-Hook, Push Button, Side Pin, Pinch Tab, BMW)",
      "Wiper Type": "Flat / Frameless Beam Blade - Multi-Adapter",
      "Main Material": "Class A+ Natural Rubber + Teflon Surface Coating",
      "Frame Material": "Flexible Memory Spring Steel (High Carbon)",
      "Adapters Included": "22 pcs (U-Hook 9x3, 9x4, Push Button, Side Pin, Pinch Tab, BMW, etc.)",
      "Size Range": '12" - 30" (300mm - 750mm) Available',
      "Color Options": "Black Frame + Black Rubber (Custom Colors Available)",
      "Durability": "Verified 1.5 Million Wipes",
      "HS Code": "85124000",
      "B2B Service": "OEM Brand Logo / Custom Retail Packaging / Private Label"
    },
    keywords: ["universal wiper blade", "multifunction wiper blade", "multi-adapter wiper", "wholesale wiper blades", "wiper blade with adapters", "auto parts distributor", "aftermarket wiper blades", "China wiper manufacturer", "OEM wiper blade supplier", "BW-861 wiper", "private label wiper blades"],
    applications: ["Passenger Cars (Sedans, SUVs, Hatchbacks)", "Aftermarket Distribution", "Auto Parts Wholesale", "North America, Europe, Middle East, Asia Markets", "Retail & E-commerce"],
    features: [
      "22 multi-adapters eliminate complex inventory management - one SKU fits 98%+ vehicles",
      "Frameless aerodynamic design reduces wind noise and snow/ice buildup",
      "Memory spring steel maintains optimal windshield contact pressure over entire lifecycle",
      "Teflon-coated wiping edge reduces friction, chatter, and noise",
      "All-weather compound performs in tropical heat, freezing cold, and heavy rain",
      "Ideal for distributors wanting to minimize SKU count while maximizing market coverage"
    ]
  },
  {
    id: "bw-802-universal-wiper-blade",
    category: "Universal",
    name: "BW-802 Universal Frameless Wiper Blade - U-Hook (12\"-28\")",
    moq: "500 PCS",
    desc: "High-performance universal frameless wiper blade with pre-installed U-Hook adapter. Factory-direct pricing from China.",
    longDesc: "The BW-802 series represents our flagship high-performance soft/frameless wiper blade technology, engineered for the global B2B automotive aftermarket. This premium model combines an aerodynamic frameless design with extreme weather resistance, making it suitable for year-round use across diverse climates. Each blade features a memory high-elastic steel sheet that maintains uniform pressure distribution across the entire windshield curvature throughout its lifecycle, ensuring streak-free wiping performance from first use to last. The AA-grade natural rubber wiping lip is coated with Teflon for reduced friction and extended service life, while the pre-installed U-Hook adapter (9x3 and 9x4 compatible) ensures quick installation on 99% of vehicles with hook-type wiper arms. We provide full OEM support including custom brand laser-printing on the steel frame and specialized retail packaging for wholesale clients. As an ISO 9001 certified China factory, every BW-802 undergoes rigorous quality testing including salt spray corrosion resistance, ozone durability, and cold flexibility tests before shipment. Available in sizes 12\" to 28\", perfect for distributors serving the North American, European, Middle Eastern, and Asian aftermarkets.",
    specs: ["AA-Grade Natural Rubber with Teflon Coating", "Memory High-Elastic Spring Steel Frame", "Pre-installed U-Hook Adapter (Fits 99% of Hook-Type Arms)", "Tested for 1.5 Million Wipes Durability", "Aerodynamic Frameless Design for Low Wind Noise", "Anti-Ozone, Anti-UV, and Salt Spray Resistant", "Custom OEM Laser Printing Available"],
    tag: "New Arrival",
    image: "https://sc02.alicdn.com/kf/H3fc79edf0c004afebbb2c992eb4cc6edX.png",
    gallery: [
      "https://sc02.alicdn.com/kf/H563b4eb9873d44aaa600d2f33c3d747cE.jpg",
      "https://sc02.alicdn.com/kf/H6f971fa213ae4ce3aeda59079a6c2f72L.jpg",
      "https://sc02.alicdn.com/kf/H461a16ca7c3049c2869a1c9bb2990fc7v.jpg"
    ],
    technicalDetails: {
      "Product Model": "BW-802",
      "Wiper Type": "Soft / Frameless / Aerodynamic Beam Blade",
      "Main Material": "AA Grade Natural Rubber + Teflon Surface Coating",
      "Steel Frame": "Memory High-Elastic Spring Steel (65Mn Carbon Steel)",
      "Size Range": '12" - 28" (300mm - 700mm) Available',
      "Connection Type": "Pre-installed U-Hook (9x3 & 9x4 Compatible)",
      "Fitment Rate": "99% of Vehicles with Hook-Type Wiper Arms",
      "Durability": "Verified 1.5 Million Wipes / Over 12 Months of Normal Use",
      "Operating Temperature": "-40°C to +100°C",
      "Testing Standards": "ISO 9001, Salt Spray Test, Ozone Test, Cold Flexibility Test",
      "HS Code": "85124000",
      "OEM Services": "Custom Laser Logo / Custom Retail Packaging / Private Label"
    },
    keywords: ["universal wiper blade", "frameless wiper blade", "U-hook wiper blade", "wholesale wiper blades China", "auto parts manufacturer", "OEM wiper blades", "aftermarket wiper blades", "BW-802 wiper", "rubber wiper blade", "car windshield wipers wholesale", "automotive parts China", "wiper blade factory"],
    applications: ["Passenger Cars & SUVs with U-Hook Arms", "Aftermarket Auto Parts Distribution", "Wholesale & Bulk Orders", "North America, Europe, Middle East, Asia, South America", "Retail & E-commerce Marketplace"],
    features: [
      "Pre-installed U-Hook adapter for tool-free installation on 99% of hook-type vehicles",
      "Frameless aerodynamic profile reduces wind lift at highway speeds (100km/h+)",
      "Memory spring steel maintains 12+ contact points across the blade for even pressure",
      "Teflon-coated rubber reduces friction by 30% compared to standard rubber blades",
      "Passed 500,000 continuous wipe test in laboratory conditions",
      "Full OEM support: custom branding, retail-ready packaging, private label welcome"
    ]
  },

  {
    id: "bw-203",
    category: "Specific Fit",
    name: "BW-203 LELION Front Window Spray Wiper Blade for Mercedes Benz W222 (S-Class)",
    moq: "300 PCS",
    desc: "OEM-grade spray-type windshield wiper blade specifically designed for Mercedes Benz S-Class W222 (2014-2020) with integrated washer nozzle system.",
    longDesc: "The LELION Front Window Spray Wiper Blade is engineered specifically for the Mercedes Benz S-Class W222 (2014-2020). It features an innovative integrated spray-type nozzle system built into the spoiler, delivering washer fluid directly along the blade path for crystal-clear visibility in all conditions. Built with premium-grade natural rubber and a precision-engineered buckle system, this blade offers a perfect plug-and-play fitment without any modifications. The aerodynamic spoiler design reduces wind lift at high speeds, ensuring consistent wiping pressure across the entire windshield. As a leading China wiper blade manufacturer, we ensure every blade meets rigorous OE standards including salt spray, ozone, and cold resistance testing. Available in 25-inch + 23-inch (driver + passenger) configuration. Please confirm your vehicle model before purchasing as this is a specific-fit application.",
    specs: [
      "Integrated Spray-Type Nozzle System Built into Spoiler",
      "OEM Fitment for Mercedes Benz S-Class W222 (2014-2020)",
      "Ultra-Low Noise Wiping Technology with Aerodynamic Spoiler",
      "Plug & Play Installation - Direct Fit on Original Wiper Arm",
      "Premium Natural Rubber Wiping Edge with Teflon Coating",
      "Memory High-Elastic Steel Frame for Uniform Pressure",
      "Anti-Ozone & UV Resistant Coating for Extended Life",
      "Size Configuration: 25-inch (635mm) Driver Side + 23-inch (580mm) Passenger Side"
    ],
    tag: "New Arrival",
    image: "https://30558985.s21i.faiusr.com/2/ABUIABACGAAggdK2vQYo8OfGigcwuBc4uBc.jpg",
    gallery: [
      "https://30558985.s21i.faiusr.com/2/ABUIABACGAAggdK2vQYo7ZOehwMwuBc4uBc.jpg",
      "https://30558985.s21i.faiusr.com/2/ABUIABACGAAggdK2vQYowKqwjwMwuBc4uBc.jpg",
      "https://30558985.s21i.faiusr.com/2/ABUIABACGAAg6YaKwgYo453_6gcw7gU4_wI.jpg",
      "https://30558985.s21i.faiusr.com/2/ABUIABACGAAg6YaKwgYo0L_gejCgBjigBg.jpg"
    ],
    technicalDetails: {
      "Product Model": "BW-203",
      "Compatibility": "Mercedes Benz S-Class W222 (2014-2020)",
      "Wiper Type": "Specific Fit Beam Blade with Integrated Spray Nozzles",
      "Nozzle Type": "Integrated Spray System on Spoiler (Washer Fluid)",
      "Size Specifications": "25-inch (635mm) Driver Side & 23-inch (580mm) Passenger Side",
      "Main Material": "Premium Natural Rubber with Teflon Coating",
      "Steel Sheet": "Memory High-Elastic Spring Steel",
      "Installation": "Direct-Fit on OEM Wiper Arm (No Adapter Needed)",
      "Wipe Life": "Tested for 1.5 Million Wipes",
      "Operating Temperature": "-40°C to +100°C",
      "HS Code": "85124000",
      "OEM Service": "Custom Logo / Custom Packaging Available"
    },
    keywords: [
      "Mercedes Benz W222 wiper blade",
      "S-Class wiper replacement",
      "spray wiper blade Benz",
      "specific fit wiper blade Mercedes",
      "W222 windshield wiper",
      "integrated spray wiper",
      "China wiper blade manufacturer",
      "LELION wiper Benz",
      "Mercedes S-Class 2014 2015 2016 2017 2018 2019 2020 wiper"
    ],
    applications: [
      "Mercedes Benz S-Class W222 (2014-2020)",
      "Luxury Sedan Aftermarket",
      "OEM Replacement Market",
      "Europe & North America Market",
      "Middle East Luxury Vehicle Market"
    ],
    features: [
      "Integrated spray nozzles built into the aerodynamic spoiler eliminate traditional spray jets for a cleaner windshield",
      "Direct OEM replacement design - engineered specifically for W222 S-Class wiper arm connectors",
      "Teflon-coated natural rubber wiping edge reduces friction, chatter, and extends service life",
      "Aerodynamic profile reduces wind lift at autobahn/highway speeds (130km/h+)",
      "Memory spring steel maintains 12+ contact points for even pressure across curved windshield",
      "Tested for extreme weather conditions from -40°C to +100°C"
    ]
  },
];
