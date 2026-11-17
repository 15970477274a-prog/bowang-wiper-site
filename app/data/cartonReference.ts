// Carton data for the 12-28 inch wiper range.
//
// Generic on purpose: this describes a product range, not one model, so it is
// not keyed by product id. Weights are deliberately absent — the owner decided
// not to publish them. Sizes 12 and 13 inch are not measured yet, which is why
// the page carries a coverage note.

export type CartonRow = {
  size: number;
  pcsPerCarton: number;
  cartonCm: string;
  cbm: number;
  innerBox: "ppGreen";
};

export const cartonRows: CartonRow[] = [
  // 12 and 13 inch blades share the 14 inch carton: their blades are 30.5 cm
  // and 33.0 cm, both shorter than the 40 cm carton length.
  { size: 12, pcsPerCarton: 100, cartonCm: "40 x 28.5 x 52", cbm: 0.05928, innerBox: "ppGreen" },
  { size: 13, pcsPerCarton: 100, cartonCm: "40 x 28.5 x 52", cbm: 0.05928, innerBox: "ppGreen" },
  { size: 14, pcsPerCarton: 100, cartonCm: "40 x 28.5 x 52", cbm: 0.05928, innerBox: "ppGreen" },
  { size: 16, pcsPerCarton: 100, cartonCm: "45 x 28.5 x 52", cbm: 0.06669, innerBox: "ppGreen" },
  { size: 17, pcsPerCarton: 100, cartonCm: "50 x 28.5 x 52", cbm: 0.07410, innerBox: "ppGreen" },
  { size: 18, pcsPerCarton: 100, cartonCm: "50 x 28.5 x 52", cbm: 0.07410, innerBox: "ppGreen" },
  { size: 19, pcsPerCarton: 100, cartonCm: "55 x 28.5 x 52", cbm: 0.08151, innerBox: "ppGreen" },
  { size: 20, pcsPerCarton: 100, cartonCm: "55 x 28.5 x 52", cbm: 0.08151, innerBox: "ppGreen" },
  { size: 22, pcsPerCarton: 100, cartonCm: "65 x 28.5 x 52", cbm: 0.09633, innerBox: "ppGreen" },
  { size: 24, pcsPerCarton: 100, cartonCm: "65 x 28.5 x 52", cbm: 0.09633, innerBox: "ppGreen" },
  { size: 26, pcsPerCarton: 100, cartonCm: "70 x 28.5 x 52", cbm: 0.10374, innerBox: "ppGreen" },
  { size: 28, pcsPerCarton: 100, cartonCm: "75 x 28.5 x 52", cbm: 0.11115, innerBox: "ppGreen" }
];
