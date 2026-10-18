import FullCatalogClient from "../../../../components/FullCatalogClient";
import { productListItems } from "../../../data/productList";

type Props = { params: Promise<{ lang: string }> };
const locales = ["en", "es", "ru", "fr", "de", "zh"] as const;
type Locale = (typeof locales)[number];

function asLocale(value: string): Locale {
  return ((locales as readonly string[]).includes(value) ? value : "en") as Locale;
}

/** Full catalogue — server component; see app/data/productList.ts. */
export default async function Page({ params }: Props) {
  const { lang } = await params;
  const locale = asLocale(lang);

  return <FullCatalogClient locale={locale} products={productListItems(locale)} />;
}
