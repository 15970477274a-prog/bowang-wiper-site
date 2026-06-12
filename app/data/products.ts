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
  },
  {
    id: "universal-wiper-blades",
    category: "Universal",
    name: "Universal Eco-Series Wiper Blades",
    moq: "1000 PCS",
    desc: "Standard aerodynamic frame with universal pre-installed hooks.",
    longDesc: "Our Eco-Series provides a cost-effective yet reliable solution for large-scale distributors. It features a durable frame structure and high-quality natural rubber, delivering consistent wiping performance in diverse climates. Ideal for wholesalers looking for a high-volume, reliable product line.",
    specs: ["AAA-Grade Rubber", "12\" to 28\" Sizes", "Cost-Effective B2B Solution", "Quick Installation"],
    tag: "Bulk Choice",
    image: "https://images.unsplash.com/photo-1621244094916-2d6451659929?auto=format&fit=crop&q=80&w=400",
    technicalDetails: {
      "Material": "Natural Rubber & High-Carbon Steel",
      "HS Code": "85124000",
      "Temperature Range": "-40°C to +70°C",
      "Warranty": "12 Months",
      "Certification": "ISO9001",
      "Packaging": "Neutral or Custom Brand Box"
    }
  },
  {
    id: "specific-fit-wiper-blades",
    category: "Specific Fit",
    name: "Specific Fit Luxury Wiper Series",
    moq: "300 PCS",
    desc: "OE replacement matching premium European vehicle models.",
    longDesc: "Designed for premium vehicle brands like BMW, Mercedes-Benz, and Audi, this series ensures a perfect match with the original equipment connection arms. It eliminates the need for adapters, providing a sleek, factory-original look and top-tier wiping silence and efficiency.",
    specs: ["Teflon Coated Rubber", "14\" to 28\" Sizes", "OE Original Connection", "Ultra-Quiet Performance"],
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400",
    technicalDetails: {
      "Target Market": "High-end Repair Shops & Car Dealers",
      "Fitment": "99% Luxury European Car Models",
      "Rubber Grade": "G1 Grade Synthetic Rubber",
      "Noise Level": "Less than 45dB",
      "Design": "Direct-Fit Original Style"
    }
  },
  {
    id: "multifunction-wiper-blades",
    category: "Multifunction",
    name: "Multi-Clip System Wiper Blades",
    moq: "500 PCS",
    desc: "Equipped with 10+ interchangeable adapters to fit 15+ arms.",
    longDesc: "The ultimate solution for inventory management. One blade body with multiple clips covers the vast majority of vehicles on the road. This system allows distributors to maximize their market coverage while minimizing SKU storage requirements.",
    specs: ["Patented Multi-Clip System", "12\" to 30\" Sizes", "Space-Saving Inventory", "Universal + Specific Arms"],
    tag: "Inventory Optimizer",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400",
    technicalDetails: {
      "Core Tech": "Interchangeable Adapter Hub",
      "Compatibility": "Fits 15+ Wiper Arm Types",
      "Lead Time": "20-30 Days for Bulk Orders",
      "Customization": "Laser logo supported",
      "Design": "All-Season Frameless"
    }
  }
];
