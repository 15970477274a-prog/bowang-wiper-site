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
}

export const allProducts: Product[] = [
  {
    id: "bw-201-specific-fit-tesla-model-x",
    category: "Specific Fit",
    name: "BW-201 Specific Fit Wiper Blade for Tesla Model X",
    moq: "300 PCS",
    desc: "OEM Spray-Type wiper blade specifically engineered for Tesla Model X.",
    longDesc: "The BW-201 is a premium OEM replacement wiper blade specifically designed for the Tesla Model X. It features an innovative integrated spray-type nozzle system to ensure clear vision and safe driving in all conditions. Built with high-quality natural rubber and a firm buckle system, this blade offers a perfect plug-and-play fit without any adapters. Designed to meet the highest OE standards for luxury electric vehicles.",
    specs: ["Integrated Spray System", "OEM Tesla Model X Fitment", "Low Noise & Smooth Wiping", "Direct Plug & Play Installation"],
    tag: "Custom Fit",
    image: "https://sc02.alicdn.com/kf/Hf62654b25ce145c596b525b489f1a81aW.png",
    gallery: [
      "https://sc02.alicdn.com/kf/H6e3b51f66a584ee5a665478f3be7110aA.jpg",
      "https://sc02.alicdn.com/kf/H86d15ad536c54fa994a5b6f37a465243N.jpg"
    ],
    technicalDetails: {
      "Product Model": "BW-201",
      "Compatibility": "Tesla Model X (Specific Fit)",
      "Nozzle Type": "Integrated Spray System",
      "Size Specifications": "18\" (460mm) & 28\" (710mm)",
      "Main Material": "AA+ Grade Natural Rubber",
      "Steel Sheet": "Memory High-Elastic Steel",
      "Installation": "Direct-Fit (No Adapter Needed)"
    }
  },
  {
    id: "bw-861-multifunction-wiper-blade",
    category: "Multifunction",
    name: "BW-861 Multi-Functional Wiper Blade",
    moq: "500 PCS",
    desc: "Premium Multi-Adapter system fitting 95% of global vehicles.",
    longDesc: "The BW-861 is a master-class engineering solution for diverse markets. Featuring a patented multi-adapter hub, it effortlessly transitions between different wiper arm types including U-Hook, Push Button, Side Pin, and Pinch Tab. The high-performance aerodynamic design ensures clear visibility and quiet operation under all weather conditions, from tropical heat to arctic cold. Perfect for distributors looking to minimize inventory while maximizing vehicle coverage.",
    specs: ["Multi-Adapter System (Fits 95% Cars)", "Quiet & Smooth Operation", "All-Weather Performance", "Long Service Life (1.5M Wipes)"],
    tag: "High Efficiency",
    image: "https://sc02.alicdn.com/kf/Hb0410965e6194f008a583d7f500e1b7at.png",
    gallery: [
      "https://sc02.alicdn.com/kf/He42f0008cec147939f26d8d074cbaa93g.png",
      "https://sc02.alicdn.com/kf/H1f15201a978647bab1f01360a4aeadf91.png"
    ],
    technicalDetails: {
      "Model Number": "BW-861",
      "Compatibility": "Universal + 12 Special Adapters",
      "Wiper Type": "Flat / Frameless Beam Blade",
      "Main Material": "Class A+ Natural Rubber",
      "Frame": "Flexible Memory Spring Steel",
      "Size Range": "12\" - 30\" Available",
      "B2B Service": "OEM Brand Logo / Custom Packaging"
    }
  },
  {
    id: "bw-802-universal-wiper-blade",
    category: "Universal",
    name: "BW-802 Universal Soft Wiper Blade",
    moq: "500 PCS",
    desc: "Soft Wiper Blade with U-Hook adapter, size range 12\"-28\".",
    longDesc: "The BW-802 series represents our flagship high-performance soft/frameless wiper blade technology. Engineered for the global B2B automotive aftermarket, this model combines aesthetic aerodynamics with extreme weather resistance. It features a memory high-elastic steel sheet that maintains uniform pressure distribution throughout its life cycle. We provide full OEM support including custom brand laser-printing and specialized retail packaging.",
    specs: ["AA-Grade Natural Rubber", "Memory High-Elastic Steel", "Standard U-Hook Compatibility", "Passed 500,000 Wipes Test"],
    tag: "New Arrival",
    image: "https://sc02.alicdn.com/kf/H3fc79edf0c004afebbb2c992eb4cc6edX.png",
    gallery: [
      "https://sc02.alicdn.com/kf/H563b4eb9873d44aaa600d2f33c3d747cE.jpg",
      "https://sc02.alicdn.com/kf/H6f971fa213ae4ce3aeda59079a6c2f72L.jpg",
      "https://sc02.alicdn.com/kf/H461a16ca7c3049c2869a1c9bb2990fc7v.jpg"
    ],
    technicalDetails: {
      "Product Model": "BW-802",
      "Structure": "Soft / Frameless / Aerodynamic",
      "Material": "AA Grade Natural Rubber + Teflon Coating",
      "Size Range": "12\" - 28\" (300mm - 700mm)",
      "Connection": "Pre-installed U-Hook (9x3 & 9x4)",
      "Life Cycle": "Verified for 1.5M Wipes",
      "HS Code": "85124000"
    }
  }
];
