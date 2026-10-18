import ProductsClient from "../../../components/ProductsClient";
import { productListItems } from "../../data/productList";

type Props = { params: Promise<{ lang: string }> };
const locales = ["en", "es", "ru", "fr", "de", "zh"] as const;
type Locale = (typeof locales)[number];

function asLocale(value: string): Locale {
  return ((locales as readonly string[]).includes(value) ? value : "en") as Locale;
}

/**
 * Product listing — server component.
 *
 * The client component used to import `allProducts` + `getProductTranslation`,
 * which shipped the whole catalogue and the whole translation table to the
 * browser. Only the fields a card renders are serialised now.
 */
export default async function Page({ params }: Props) {
  const { lang } = await params;
  const locale = asLocale(lang);

  return <ProductsClient locale={locale} products={productListItems(locale)} />;
}
