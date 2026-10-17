import { allProducts } from "./products";
import { getProductTranslation } from "./productTranslations";

/**
 * Minimal product shape used by the listing grids.
 *
 * The listing pages used to be client components that imported `allProducts`
 * and `getProductTranslation` directly: that sent the whole catalogue (534 KB
 * of JS) and the entire product-translation table (2.1 MB of JS) to the browser
 * so that a grid could show six cards. The server now resolves the localised
 * strings once and hands the browser only the fields a card actually renders.
 *
 * Keep this in sync with the cards in components/*Client.tsx. Add a field here
 * only when a card renders it — every field is multiplied by ~345 products.
 */
export type ProductListItem = {
  id: string;
  name: string;
  image: string;
  category: string;
  tag: string;
  moq: string;
  /** Already limited to the three the cards render. */
  specs: string[];
};

/**
 * @param locale  route locale, used to resolve translated name/specs
 * @param category  optional category filter (applied before mapping, so
 *                  category pages only serialise their own items)
 */
export function productListItems(locale: string, category?: string): ProductListItem[] {
  const source = category ? allProducts.filter((p) => p.category === category) : allProducts;

  return source.map((product) => {
    const translation = getProductTranslation(product.id, locale);
    const specs = translation?.specs || product.specs || [];

    return {
      id: product.id,
      name: translation?.name || product.name,
      image: product.image,
      category: product.category,
      tag: product.tag,
      moq: product.moq,
      specs: specs.slice(0, 3),
    };
  });
}
