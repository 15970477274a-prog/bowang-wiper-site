import CategoryAllClient from "../../../../../../components/CategoryAllClient";
import { productListItems } from "../../../../../data/productList";
import { CATEGORY_MAP } from "../../../../../data/categories";

type Props = { params: Promise<{ lang: string; slug: string }> };
const locales = ["en", "es", "ru", "fr", "de", "zh"] as const;
type Locale = (typeof locales)[number];

function asLocale(value: string): Locale {
  return ((locales as readonly string[]).includes(value) ? value : "en") as Locale;
}

/** Full series listing — server component; only this category's items are serialised. */
export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  const locale = asLocale(lang);
  const category = CATEGORY_MAP[slug];

  return (
    <CategoryAllClient
      locale={locale}
      slug={slug}
      products={category ? productListItems(locale, category) : []}
    />
  );
}
