import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import { useEffect, useState } from 'react';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import { formatDate } from '../../utils/format-date';
import S from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div className={commonStyles.Container}>Carregando...</div>;
  }

  const result = post.data.content.reduce((countReadingTime, content) => {
    if (content.body) {
      countReadingTime += RichText.asText(content.body).split(' ').length;
    }

    if (content.heading) {
      countReadingTime += content.heading.split(' ').length;
    }

    return countReadingTime;
  }, 0);

  return (
    <>
      <div className={S.Banner}>
        <Image
          src={post.data.banner.url}
          alt={`Banner - ${post.data.title}`}
          objectFit="cover"
          loading="lazy"
          layout="fill"
        />
      </div>

      <article className={`${commonStyles.Container} ${S.Content}`}>
        <header>
          <h2>{post.data.title}</h2>
          <footer>
            <div>
              <FiCalendar />
              <time>{formatDate(post.first_publication_date)}</time>
            </div>
            <div>
              <FiUser />
              <span>{post.data.author}</span>
            </div>
            <div>
              <FiClock />
              <span>{Math.ceil(result / 200)} min</span>
            </div>
          </footer>
        </header>

        <div className={S.PostContent}>
          {post.data.content.map(article => (
            <div key={article.heading}>
              <h3 className={S.Heading}>{article.heading}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(article.body),
                }}
              ></p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const posts = await prismic.getByType('posts', {
    pageSize: 5,
  });

  return {
    paths: posts.results.map(post => ({
      params: {
        slug: post.uid,
      },
    })),

    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient({});
  const response = await prismic.getByUID('posts', String(params?.slug));

  const post = {
    ...response,
    data: {
      ...response.data,
      // content: RichText.asHtml(response.data.content),
    },
  };

  return {
    props: {
      post,
    },
  };
};
