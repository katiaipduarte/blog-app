import he from 'he';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

type Props = {
  title: string;
  description: string;
};

const PageSeo = (props: Props) => {
  const { title, description } = props;
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`;

  return (
    <NextSeo
      title={`${he.decode(title)} | Blog App`}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description
      }}
    />
  );
};

export default PageSeo;
