import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';

import { FiUser, FiCalendar } from 'react-icons/fi';

import S from './home.module.scss';

import { formatDate } from '../utils/format-date';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  const [posts, setPosts] = useState(postsPagination);
  const loadMore = async () => {
    await fetch(posts.next_page)
      .then(res => res.json())
      .then((newPosts: PostPagination) => {
        const data: PostPagination = {
          next_page: newPosts.next_page,
          results: [...postsPagination.results, ...newPosts.results],
        };

        setPosts(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={`${S.Wrapper} ${commonStyles.Container}`}>
      <main>
        {posts.results.map(post => (
          <article key={post.uid} className={S.Post}>
            <Link href={`post/${post.uid}`}>
              <a>
                <h2>{post.data.title}</h2>
                <p>{post.data.subtitle}</p>
                <footer>
                  <div>
                    <FiCalendar />
                    <time>{formatDate(post.first_publication_date)}</time>
                  </div>
                  <div>
                    <FiUser />
                    <span>{post.data.author}</span>
                  </div>
                </footer>
              </a>
            </Link>
          </article>
        ))}
      </main>
      <footer className={S.Footer}>
        {posts.next_page && (
          <button onClick={loadMore}>Carregar mais posts</button>
        )}
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});

  const postsResponse = await prismic.getByType('posts', {
    pageSize: 5,
  });

  return {
    props: {
      postsPagination: postsResponse,
    },
  };
};
