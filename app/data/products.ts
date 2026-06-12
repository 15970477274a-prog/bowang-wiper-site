export interface Product {
  id: string;
  category: string;
  name: string;
  price: string;
  moq: string;
  desc: string;
  longDesc: string;
  specs: string[];
  tag: string;
  image: string;
  technicalDetails: Record<string, string>;
}

export const allProducts: Product[] = [
  {
    id: "universal-wiper-blades",
    category: "Universal",
    name: "Universal Wiper Blades",
    price: "$1.05 - $1.45",
    moq: "500 PCS",
    desc: "Designed to fit 99% of vehicles with pre-installed hooks.",
    longDesc: "Our Universal Series wiper blades feature a high-performance aerodynamic design that ensures uniform pressure distribution across the windshield. Manufactured with premium AAA-grade natural rubber and high-carbon tension memory springs, they provide a crystal-clear, streak-free wipe even at high highway speeds.",
    specs: ["AAA-Grade Natural Rubber", "12\" to 28\" Sizes", "> 1,000,000 Wipes Life", "Pre-installed U-Hook"],
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1621244094916-2d6451659929?auto=format&fit=crop&q=80&w=600",
    technicalDetails: {
      "Material": "Natural Rubber & High-Carbon Steel",
      "HS Code": "85124000",
      "Temperature Range": "-40°C to +80°C",
      "Warranty": "12 Months",
      "Certification": "ISO9001 / CE",
      "Adapters": "Universal U-Hook (9x3 & 9x4)"
    }
  },
  {
    id: "specific-fit-wiper-blades",
    category: "Specific Fit",
    name: "Specific Fit Wiper Blades",
    price: "$1.65 - $2.35",
    moq: "300 PCS",
    desc: "OEM replacement matching luxury and European vehicle models.",
    longDesc: "The Specific Fit Series is engineered to match the exact specifications of original equipment for premium vehicle brands like BMW, Mercedes-Benz, Audi, and Porsche. These blades feature a dedicated connection system that allows for a perfect, adapter-free installation, maintaining the vehicle's original aesthetic and wiping performance.",
    specs: ["Teflon Coated Rubber", "14\" to 28\" Sizes", "OE Original Quality", "Direct Fit Connection"],
    tag: "Premium Choice",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600",
    technicalDetails: {
      "Material": "Teflon Coated Natural Rubber",
      "HS Code": "85124000",
      "Fitment": "98% European Car Models",
      "Durability": "Tested for 1.5M cycles",
      "Noise Level": "< 50dB (Ultra Quiet)",
      "Design": "Frameless Flat Blade"
    }
  },
  {
    id: "multifunction-wiper-blades",
    category: "Multifunction",
    name: "Multifunction Wiper Blades",
    price: "$1.35 - $1.95",
    moq: "500 PCS",
    desc: "Equipped with interchangeable adapters to fit 15+ wiper arms.",
    longDesc: "Designed for wholesalers looking to optimize inventory, the Multifunction Series utilizes a patented multi-clip system. With just 10 interchangeable adapters, these blades can be fitted to over 15 different types of wiper arms, covering nearly every modern vehicle on the market and significantly reducing stock-keeping unit (SKU) complexity.",
    specs: ["Silicone / Natural Rubber", "12\" to 30\" Sizes", "10+ Adapters Included", "Inventory Cost Leader"],
    tag: "Multi-Compatible",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600",
    technicalDetails: {
      "Core Advantage": "Multi-Adapter System",
      "Compatibility": "15+ Arm Types",
      "Rubber Grade": "Class A+ Imported Rubber",
      "Frame Type": "Aerodynamic Hybrid/Flat",
      "Packaging": "Customized OEM Boxes",
      "Production Lead Time": "15-25 Days"
    }
  }
];
