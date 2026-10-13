import { migratedProducts } from "./migratedProducts";

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
      "Product Model": "BW-861",
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
    id: "bw-027-toyota-corolla-wiper-arm",
    category: "Wiper Arm",
    name: "BW-027 Front Right Wiper Arm for Toyota Corolla 1993-1996 (RHD)",
    moq: "100 PCS",
    desc: "OEM replacement front right wiper arm for Toyota Corolla 1993-1996. Durable construction, direct fit, easy installation.",
    longDesc: "This is a brand new front right wiper arm specifically designed for the 1993-1996 Toyota Corolla (RHD - Right Hand Drive). As a high-quality OEM replacement part, this wiper arm ensures a perfect fit and reliable performance for your windshield system. Crafted from premium materials with corrosion-resistant coating, it is built to last and provides clear visibility in all weather conditions. The direct replacement design makes installation quick and hassle-free - simply remove the old arm and attach this one. Maintains a secure connection with your wiper blade and ensures smooth, quiet operation. OE Part Number: 8521112300.",
    specs: [
      "Direct OEM Replacement - No Modification Required",
      "Fits Toyota Corolla 1993-1996 (RHD - Right Hand Drive)",
      "Premium Corrosion-Resistant Materials",
      "Easy Installation - Direct Bolt-On Fit",
      "Smooth and Quiet Operation",
      "OE Part Number: 8521112300",
      "1 Piece - Front Right Side"
    ],
    tag: "OEM Part",
    image: "/products/ABUIABAEGAAgrtPRwwYo49Ch-QQw6Ac46Ac.jpg",
    gallery: [],
    technicalDetails: {
      "Product Model": "BW-027",
      "Product Type": "Front Wiper Arm Assembly",
      "Position": "Front Right (Passenger Side for RHD)",
      "Vehicle Compatibility": "Toyota Corolla (1993-1996) RHD",
      "Part Number": "8521112300",
      "Material": "Premium Steel with Corrosion-Resistant Coating",
      "Installation": "Direct Bolt-On Replacement",
      "Fitment": "OEM Standard - No Modifications Required",
      "HS Code": "85129000",
      "OEM Service": "Custom Logo / Bulk Orders Available"
    },
    keywords: [
      "Toyota Corolla wiper arm",
      "front right wiper arm Corolla 1993",
      "wiper arm replacement Toyota",
      "Corolla windshield wiper arm",
      "8521112300 wiper arm",
      "BW-027 Toyota Corolla wiper arm",
      "OEM wiper arm Toyota",
      "wiper arm assembly",
      "China wiper arm manufacturer",
      "BW-027 wiper arm"
    ],
    applications: [
      "Toyota Corolla (1993-1996) RHD",
      "Asian Vehicle Aftermarket",
      "OEM Replacement Parts",
      "Southeast Asia & Japan Market"
    ],
    features: [
      "Direct bolt-on OEM replacement - no modification or adapters needed",
      "Premium steel construction with corrosion-resistant coating for long life",
      "Maintains secure connection with wiper blade for consistent wiping pressure",
      "Smooth and quiet operation in all weather conditions",
      "Quick and hassle-free installation - replace in minutes",
      "Ideal for Toyota Corolla owners seeking reliable OEM-quality replacement"
    ]
  },
  {
    id: "bw-808-hybrid-wiper",
    category: "Hybrid",
    name: "BW-808 Hybrid Wiper Blade - Three-Section Design (12-28 inch)",
    moq: "500 PCS",
    desc: "Premium three-section hybrid wiper blade combining aerodynamic beam design with durable metal-frame construction. Fits 95% of vehicles with U-Hook arms.",
    longDesc: "The BW-808 Hybrid Wiper Blade combines the aerodynamic properties of a beam blade with the robust construction of a conventional metal-frame wiper. As a professional three-section hybrid design, it provides multiple pressure points for a streak-free wipe across the entire blade length. The protective shell shields the internal tension spring from ice, snow, and debris build-up, ensuring reliable year-round performance. Features graphite-coated natural rubber for silent operation in extreme temperatures from -40°C to +100°C. The universal hook adapter fits most J-Hook and U-Hook wiper arms, covering 95% of vehicles. Compatible with Denso Hybrid, Trico Sentry, Michelin Stealth, and Bosch Vantage series. As a trusted China wiper blade manufacturer, every BW-808 undergoes rigorous quality testing including salt spray corrosion, ozone durability, and cold flexibility tests. Available in sizes 12 to 28 inches with full OEM/ODM support including custom logo and packaging.",
    specs: [
      "Three-Section Hybrid Design - Beam + Metal Frame Construction",
      "Multiple Pressure Points for Streak-Free Wipe",
      "Protective Shell - Shields Spring from Ice, Snow & Debris",
      "Graphite-Coated Natural Rubber for Silent Operation",
      "Universal U-Hook Adapter - Fits 9x3 & 9x4 Hook Arms",
      "Vehicle Coverage: 95% of Vehicles with Hook-Type Arms",
      "Temperature Range: -40°C to +100°C",
      "Available Sizes: 12 to 28 inch",
      "Compatible: Denso Hybrid, Trico Sentry, Michelin Stealth, Bosch Vantage",
      "OEM/ODM: Custom Logo, Packaging, Private Label Available"
    ],
    tag: "Hybrid",
    image: "/products/ABUIABACGAAgl8y2vQYorPOy7QIwuBc4uBc.jpg",
    gallery: [
      "/products/ABUIABACGAAgn_2OvwYooOy-iQUw7gU4-gE.jpg",
      "/products/ABUIABAEGAAg3oroygYo5qXg8wUw6Ac46Ac.jpg",
    ],
    technicalDetails: {
      "Product Model": "BW-808",
      "Wiper Type": "Hybrid (Three-Section Design)",
      "Frame Design": "Hybrid - Beam Blade Shell + Metal Frame Core",
      "Rubber Material": "Graphite-Coated Natural Rubber",
      "Adapter Type": "Universal U-Hook (Fits 9x3 & 9x4)",
      "Vehicle Coverage": "95% of Vehicles with Hook-Type Arms",
      "Available Sizes": "12 to 28 inch",
      "Operating Temperature": "-40°C to +100°C",
      "Compatible Series": "Denso Hybrid, Trico Sentry, Michelin Stealth, Bosch Vantage",
      "HS Code": "85124000",
      "OEM Service": "Custom Logo / Custom Packaging Available"
    },
    keywords: [
      "hybrid wiper blade",
      "three-section wiper blade",
      "BW-808 hybrid wiper",
      "hybrid wiper blade manufacturer",
      "three-section wiper factory",
      "hybrid wiper wholesale China",
      "Denso hybrid replacement",
      "Bosch Vantage alternative",
      "Trico Sentry hybrid",
      "OEM hybrid wiper blade",
      "custom hybrid wiper manufacturer",
      "China wiper blade factory"
    ],
    applications: [
      "Japanese Vehicles (Toyota, Honda, Hyundai)",
      "Korean Vehicles (Kia, Hyundai)",
      "Universal Fit for Hook-Type Arms",
      "OEM Replacement Market",
      "North America & Europe Aftermarket"
    ],
    features: [
      "Three-section hybrid design combines beam aerodynamics with metal-frame durability",
      "Full-cover protective shell prevents ice, snow, and debris accumulation on spring mechanism",
      "Multiple pressure point technology ensures even wiping pressure across curved windshields",
      "Graphite-coated natural rubber refill for whisper-quiet, streak-free operation",
      "Universal U-Hook adapter fits 95% of vehicles with standard hook-type wiper arms",
      "Rigorous factory testing: salt spray corrosion, ozone durability, cold flexibility",
      "OEM cross-reference compatible with Denso Hybrid, Trico Sentry, Michelin Stealth, Bosch Vantage"
    ]
  },
{
    id: "bw-160-rear-wiper-blade",
    category: "Rear Wiper",
    name: "BW-160 Multi-Functional Rear Wiper Blade - Universal Fit (98% Coverage)",
    moq: "500 PCS",
    desc: "Premium multi-functional rear wiper blade with universal adapter system covering 98% of vehicles. Ideal for wholesale distributors.",
    longDesc: "The BW-160 is a high-performance multi-functional rear wiper blade designed for maximum vehicle coverage. With its specialized adapter system, the BW-160 fits 98% of original rear wiper arms, making it the perfect choice for automotive parts wholesalers looking to reduce inventory complexity. Features a precision-engineered OE-spec design that matches the look and performance of original equipment rear blades. The synthetic rubber wiping edge is treated with graphite for silent, long-lasting wiping in harsh environments. Universal Rear Fitment includes multiple adapters to fit various rear arm types including Rocker, Slide, Button types. As a trusted China wiper blade manufacturer, every BW-160 undergoes rigorous quality testing including salt spray corrosion, ozone durability, and cold flexibility tests. Available with full OEM/ODM support including custom logo and packaging.",
    specs: [
      "Multi-Adapter System - Fits 98% of Rear Wiper Arms",
      "Universal Rear Fitment: Rocker, Slide, Button Types",
      "OE-Spec Design - Matches OEM Performance",
      "Graphite-Treated Synthetic Rubber for Silent Operation",
      "Universal Adapter System for Maximum Coverage",
      "Easy Installation - Quick Clip-On Design",
      "Tested for Extreme Weather Conditions",
      "OEM/ODM: Custom Logo, Packaging, Private Label Available"
    ],
    tag: "Rear Wiper",
    image: "/products/ABUIABAEGAAgwpPQxAYooJLKoQQwuBc4uBc.jpg",
    gallery: [
      "/products/ABUIABAEGAAgmZ7QxAYosMW1iwUwuBc4uBc.jpg",
      "/products/ABUIABACGAAgxoCpygYokMjkmgEwgBs4gBI.jpg",
      "/products/ABUIABAEGAAgrJeQyAYov_-RxAIwwQI4ywE.jpg"
    ],
    technicalDetails: {
      "Product Model": "BW-160",
      "Wiper Type": "Multi-Functional Rear Wiper Blade",
      "Vehicle Coverage": "98% of Vehicles with Rear Wipers",
      "Adapter Types": "Rocker, Slide, Button (Multiple Adapters Included)",
      "Rubber Material": "Graphite-Treated Synthetic Rubber",
      "Frame Design": "Aerodynamic Beam Design",
      "Design Standard": "OE-Spec Design",
      "Installation": "Quick Clip-On, Tool-Free",
      "HS Code": "85124000",
      "OEM Service": "Custom Logo / Custom Packaging Available"
    },
    keywords: [
      "rear wiper blade",
      "multi-functional rear wiper",
      "BW-160 rear wiper",
      "universal rear wiper blade",
      "rear wiper blade manufacturer",
      "rear wiper wholesale China",
      "replacement rear wiper blade",
      "OEM rear wiper blade",
      "custom rear wiper manufacturer",
      "China wiper blade factory",
      "BW-160 wiper blade",
      "rear windshield wiper blade"
    ],
    applications: [
      "Universal Fit for Rear Wiper Arms (98% Coverage)",
      "Sedans, SUVs, Hatchbacks, Wagons",
      "OEM Replacement Market",
      "North America & Europe Aftermarket",
      "Asia & Middle East Aftermarket"
    ],
    features: [
      "Multi-adapter system covers 98% of rear wiper arm types including Rocker, Slide, and Button",
      "OE-spec design matches original equipment look and performance for seamless replacement",
      "Graphite-treated synthetic rubber provides whisper-quiet, long-lasting wiping in harsh environments",
      "Universal rear fitment reduces SKU complexity for wholesalers and distributors",
      "Quick clip-on installation - tool-free replacement in seconds",
      "Aerodynamic beam design ensures consistent pressure across curved rear windshields",
      "Rigorous factory testing: salt spray corrosion, ozone durability, cold flexibility"
    ]
  },
{
    id: "bw-161-rear-wiper-blade",
    category: "Rear Wiper",
    name: "BW-161 Multi-Functional Rear Windshield Wiper Blade - Universal",
    moq: "1000 PCS",
    desc: "Wholesale multi-functional rear windshield wiper blade with universal fitment. Ideal for bulk distributors and OEM replacement market.",
    longDesc: "The BW-161 is a wholesale-grade multi-functional rear windshield wiper blade designed for maximum vehicle coverage and durability. As a high-quality universal rear wiper solution, it is engineered to fit a wide range of vehicles including sedans, SUVs, hatchbacks, and wagons. The sleek black design matches original equipment specifications for seamless replacement. Built with durable synthetic rubber and an aerodynamic frame, the BW-161 ensures streak-free wiping and reliable performance in all weather conditions. With MOQ of 1000 PCS, it is ideal for bulk wholesale orders. As a trusted China wiper blade manufacturer, every BW-161 undergoes rigorous quality testing including salt spray corrosion, ozone durability, and cold flexibility tests. Full OEM/ODM support including custom logo, packaging, and private label available.",
    specs: [
      "Multi-Functional Rear Wiper Design",
      "Universal Fitment - Fits Most Vehicles",
      "Durable Synthetic Rubber Wiping Edge",
      "Aerodynamic Frame Design",
      "OE-Spec Design for Seamless Replacement",
      "Bulk Wholesale - MOQ 1000 PCS",
      "OEM/ODM: Custom Logo, Packaging, Private Label Available"
    ],
    tag: "Rear Wiper",
    image: "/products/ABUIABACGAAg0vDQvQYo7L3S8QIwuBc4uBc.jpg",
    gallery: [
      "/products/ABUIABACGAAg0vDQvQYo3NWu2QUwuBc4uBc.jpg",
      "/products/ABUIABACGAAg0vDQvQYo6I63lAMwuBc4uBc.jpg",
      "/products/ABUIABACGAAg0vDQvQYogPb2oQEw7gU4uwo.jpg"
    ],
    technicalDetails: {
      "Product Model": "BW-161",
      "Wiper Type": "Multi-Functional Rear Windshield Wiper Blade",
      "Color": "Black",
      "Frame Design": "Aerodynamic Beam Design",
      "Rubber Material": "Durable Synthetic Rubber",
      "Vehicle Coverage": "Universal Fit - Most Vehicles",
      "MOQ": "1000 PCS",
      "HS Code": "85124000",
      "OEM Service": "Custom Logo / Custom Packaging Available"
    },
    keywords: [
      "rear wiper blade",
      "BW-161 rear wiper",
      "multi-functional rear wiper",
      "rear windshield wiper blade",
      "rear wiper wholesale",
      "universal rear wiper blade",
      "BW-161 wiper blade",
      "rear wiper blade manufacturer",
      "China rear wiper factory",
      "OEM rear wiper blade",
      "bulk rear wiper wholesale",
      "rear windshield wiper"
    ],
    applications: [
      "Universal Fit - Sedans, SUVs, Hatchbacks, Wagons",
      "OEM Replacement Market",
      "Wholesale & Bulk Distribution",
      "North America & Europe Aftermarket",
      "Asia & Middle East Aftermarket"
    ],
    features: [
      "Multi-functional rear wiper design for universal fitment across most vehicle models",
      "Aerodynamic frame ensures consistent wiping pressure on curved rear windshields",
      "Durable synthetic rubber wiping edge for long-lasting streak-free performance",
      "OE-spec black design matches original equipment for seamless replacement",
      "Bulk wholesale pricing available with MOQ of 1000 PCS",
      "Full OEM/ODM support includes custom logo, retail packaging, and private label"
    ]
  },

  {
    id: "bw-001-audi-q7-rhd-wiper-arm",
    category: "Wiper Arm",
    name: "BW-001 Front Windshield RHD Wiper Arm for AUDI Q7 2007-2016",
    moq: "10 PCS",
    desc: "OEM-grade front windshield RHD (Right Hand Drive) wiper arm specifically designed for Audi Q7 2007-2016. Direct fit replacement, black finish.",
    longDesc: "The BW-001 is a precision-engineered front windshield wiper arm for Audi Q7 (2007-2016) in RHD configuration. Manufactured to strict OE specifications, this wiper arm ensures perfect fitment and reliable wiping performance. The durable black finish provides corrosion resistance and maintains the factory appearance. As part of Lelion's comprehensive wiper arm lineup, the BW-001 delivers the same quality and durability that global distributors have trusted since 2011. Ideal for the European, Australian, and other RHD markets.",
    specs: [
      "Front Windshield RHD (Right Hand Drive) Configuration",
      "Specific Fit for Audi Q7 2007-2016",
      "OE-Spec Design for Direct Replacement",
      "Durable Black Corrosion-Resistant Finish",
      "Precision-Engineered for Perfect Fitment",
      "Low MOQ - 10 PCS for New Partnerships",
      "ISO 9001 Certified Manufacturing"
    ],
    tag: "Wiper Arm",
    image: "/products/ABUIABACGAAgr-usvwYokMvmogcwuBc4uBc.jpg",
    gallery: [
      "/products/ABUIABACGAAgi6WUvwYov5W02wIwuBc4uBc.jpg"
    ],
    technicalDetails: {
      "Product Model": "BW-001",
      "Compatibility": "Audi Q7 2007-2016 - RHD Specific Fit",
      "Wiper Type": "Front Windshield Wiper Arm",
      "Drive Configuration": "RHD (Right Hand Drive)",
      "Color": "Black",
      "Material": "High-Strength Steel with Corrosion-Resistant Coating",
      "Installation": "Direct OE Replacement - No Modification Required",
      "MOQ": "10 PCS",
      "HS Code": "85124000",
      "OEM Service": "Custom Logo / Custom Packaging Available"
    },
    keywords: [
      "Audi Q7 wiper arm",
      "RHD wiper arm",
      "front windshield wiper arm",
      "BW-001 wiper arm",
      "Audi wiper arm replacement",
      "wiper arm manufacturer China",
      "OEM wiper arm",
      "Audi Q7 2007-2016 wiper",
      "right hand drive wiper arm",
      "China wiper arm factory",
      "Lelion wiper arm",
      "automotive wiper arm wholesale"
    ],
    applications: [
      "Audi Q7 2007-2016 (RHD Models)",
      "European Aftermarket (UK, Ireland, Malta, Cyprus)",
      "Australian & New Zealand Aftermarket",
      "Japanese & Southeast Asian RHD Markets",
      "OEM Replacement Market"
    ],
    features: [
      "Precision-engineered RHD configuration for perfect Audi Q7 fitment (2007-2016)",
      "OE-spec design ensures seamless direct replacement without vehicle modification",
      "Durable black corrosion-resistant coating for long-lasting factory appearance",
      "High-strength steel construction maintains consistent spring tension",
      "Low MOQ of 10 PCS ideal for new distributor partnerships and sample orders",
      "ISO 9001 certified manufacturing ensures automotive-grade quality"
    ]
  },

  {
    id: "bw-002-audi-q7-lhd-wiper-arm",
    category: "Wiper Arm",
    name: "BW-002 Front Windshield Wiper Arm for AUDI Q7 (LHD) 2007-2016",
    moq: "10 PCS",
    desc: "OEM-grade front windshield LHD (Left Hand Drive) wiper arm for Audi Q7 2007-2016. Direct replacement with corrosion-resistant black finish, low MOQ.",
    longDesc: "The BW-002 is a precision-manufactured front windshield wiper arm designed for Audi Q7 (2007-2016) in LHD configuration. Featuring high-strength steel construction with a durable black anti-corrosion coating, this OE-spec replacement arm ensures perfect fit and reliable performance. As part of Lelion's comprehensive wiper arm series, the BW-002 serves the Americas, Europe, China, and other LHD markets. Backed by ISO 9001 certified manufacturing, this wiper arm meets the highest automotive quality standards. Low MOQ of 10 PCS makes it ideal for new distributor partnerships.",
    specs: [
      "Front Windshield LHD (Left Hand Drive) Configuration",
      "Exact Fit for Audi Q7 2007-2016 Models",
      "OE-Spec Direct Replacement Design",
      "High-Strength Steel with Anti-Corrosion Black Coating",
      "Precision Manufacturing for Perfect Fitment",
      "Low MOQ - 10 PCS",
      "ISO 9001 Certified Production"
    ],
    tag: "Wiper Arm",
    image: "/products/ABUIABACGAAgxJSUvwYou7KG_gYwuBc4uBc.jpg",
    gallery: [
      "/products/ABUIABACGAAgnZyUvwYozsncuwQwuBc4uBc.jpg",
      "/products/ABUIABACGAAg5JuUvwYo4OiTogQwuBc4uBc.jpg"
    ],
    technicalDetails: {
      "Product Model": "BW-002",
      "Compatibility": "Audi Q7 2007-2016 - LHD Specific Fit",
      "Wiper Type": "Front Windshield Wiper Arm",
      "Drive Configuration": "LHD (Left Hand Drive)",
      "Color": "Black",
      "Material": "High-Strength Steel with Anti-Corrosion Coating",
      "Installation": "Direct OE Replacement",
      "MOQ": "10 PCS",
      "HS Code": "85124000",
      "OEM Service": "Custom Logo / Custom Packaging Available"
    },
    keywords: [
      "Audi Q7 LHD wiper arm",
      "BW-002 wiper arm",
      "front windshield wiper arm",
      "left hand drive wiper arm",
      "Audi Q7 replacement wiper",
      "wiper arm manufacturer China",
      "OEM wiper arm Audi",
      "Lelion wiper arm",
      "China wiper arm factory",
      "automotive wiper arm wholesale"
    ],
    applications: [
      "Audi Q7 2007-2016 (LHD Models)",
      "North American Aftermarket",
      "European LHD Markets (Germany, France, Italy, Spain)",
      "China & Asian LHD Markets",
      "OEM Replacement Market"
    ],
    features: [
      "Precision-engineered LHD configuration for Audi Q7 2007-2016 perfect fitment",
      "OE-spec design enables tool-free direct replacement without vehicle modification",
      "High-strength steel with durable black anti-corrosion coating for long service life",
      "Consistent spring tension maintained through premium material selection",
      "Low MOQ of 10 PCS ideal for new distributor sampling and market testing",
      "ISO 9001 certified manufacturing ensures automotive-grade quality"
    ]
  },

  {
    id: "bw3002-mini-cooper-rear-wiper-arm",
    category: "Rear Wiper Combo",
    name: "BW3002 Rear Wiper Blade Arm for MINI COOPER R50 R53 2001-2004",
    moq: "100 PCS",
    desc: "OEM-spec rear windshield wiper arm for MINI COOPER R50 R53 (2001-2004). Precision-engineered direct replacement with durable construction.",
    longDesc: "The BW3002 is a precision rear wiper arm designed specifically for MINI COOPER R50 and R53 models (2001-2004). Manufactured to strict OE specifications, this rear wiper arm ensures perfect noise-free operation and streak-free wiping for the distinctive MINI rear windshield. The compact design maintains the vehicle's iconic look while delivering reliable performance. As a trusted China wiper blade and arm manufacturer, Lelion Autoparts ensures every BW3002 meets rigorous quality standards including salt spray corrosion testing and mechanical durability testing. Ideal for European aftermarket distributors specializing in German and British vehicle parts.",
    specs: [
      "Specific Fit for MINI COOPER R50 R53 2001-2004",
      "Rear Windshield Wiper Arm Configuration",
      "OE-Spec Design for Direct Replacement",
      "Durable Weather-Resistant Construction",
      "Precision-Engineered for MINI Factory Fitment",
      "Bulk Wholesale - MOQ 100 PCS",
      "ISO 9001 Certified Manufacturing"
    ],
    tag: "Wiper Arm",
    image: "/products/ABUIABACGAAgtsiEvgYow7nr6wQwuBc4uBc.jpg",
    gallery: [],
    technicalDetails: {
      "Product Model": "BW3002",
      "Compatibility": "MINI COOPER R50 R53 2001-2004 - Rear",
      "Wiper Type": "Rear Windshield Wiper Arm",
      "Vehicle Brand": "MINI / BMW Group",
      "Color": "Black",
      "Material": "High-Strength Steel with Weather-Resistant Coating",
      "Installation": "Direct OE Replacement",
      "MOQ": "100 PCS",
      "HS Code": "85124000",
      "OEM Service": "Custom Logo / Custom Packaging Available"
    },
    keywords: [
      "MINI COOPER rear wiper arm",
      "MINI R50 R53 wiper",
      "BW3002 wiper arm",
      "rear wiper arm MINI",
      "MINI Cooper replacement wiper",
      "wiper arm manufacturer China",
      "OEM MINI wiper arm",
      "Lelion wiper arm",
      "British car wiper parts",
      "European car wiper arm wholesale"
    ],
    applications: [
      "MINI COOPER R50 (2001-2004) - Rear",
      "MINI COOPER R53 (2001-2004) - Rear",
      "European Aftermarket",
      "British & German Vehicle Specialists",
      "OEM Replacement Market"
    ],
    features: [
      "Exact-fit OE-spec design for MINI COOPER R50 R53 rear windshield (2001-2004)",
      "Precision-engineered to maintain MINI's iconic compact rear wiper profile",
      "Durable weather-resistant construction ensures long service life in European climates",
      "Direct bolt-on replacement - no modification or adapters required",
      "Bulk wholesale available with MOQ of 100 PCS for established distributors",
      "ISO 9001 certified production ensures consistent automotive-grade quality"
    ]
  },
  
  ...migratedProducts,
];
