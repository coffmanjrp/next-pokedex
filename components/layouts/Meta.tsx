import Head from 'next/head';
import { server } from 'config';

type Meta = {
  title?: string;
  pageName?: string;
  keywords?: string;
  description?: string;
  url?: string;
};

const Meta = ({ title, pageName, keywords, description, url }: Meta) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={`${pageName} | ${title}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="game" />
      <meta property="og:image" content="" />
      <meta property="og:description" content={description} />
      <meta property="fb:app_id" content="" />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:image" content="" />
      <link rel="canonical" href="" />
      <link rel="icon" href="/favicon.ico" />
      <title>
        {pageName} | {title}
      </title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Pokédex',
  keywords:
    'Pokédex,pokémon,Pokemon,pokemon,pokemon index,ポケモン,ぽけもん,ポケットモンスター,図鑑,ずかん,ポケモンずかん,ぽけもんずかん',
  description:
    'Pokédex provides information on Pokémon that appear in the "Pokémon" series.',
  url: server,
};

export default Meta;
