import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { fetchImages } from '../api';

import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Container } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const changeQuery = newQuery => {
    if (newQuery === query) {
      return Notiflix.Notify.failure('Потрібні параметри пошуку');
    }
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (query === '') return;
    if (prevState.query !== query || prevState.page !== page) {
      const updateQuery = query.slice(query.indexOf('/') + 1);
      setLoading(true);
      try {
        const getImages = await fetchImages(updateQuery, page);
        if (getImages.hits.length === 0) {
          Notiflix.Notify.failure('Таких фото не знайдено!');
          setLoading(false)
        }
        setImages(prevState => [...prevState, ...getImages.hits])
        setLoading(false)
        setTotalPages(Math.ceil(getImages.totalHits / 12));

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }, [query, page]);

  useEffect(() => {
  const fetchData = async () => {
    if (query === '') return;
    setImages(prevState => {
      if (prevState.query !== query || prevState.page !== page) {
        const updateQuery = query.slice(query.indexOf('/') + 1);
        setLoading(true);
        try {
          const getImages = await fetchImages(updateQuery, page);
          if (getImages.hits.length === 0) {
            Notiflix.Notify.failure('Таких фото не знайдено!');
          }
          return [...prevState, ...getImages.hits];
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      return prevState;
    });
    setTotalPages(prevState => Math.ceil(getImages.totalHits / 12));
  };
  fetchData();
}, [query, page]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
    setLoading(true);
  };

  return (
    <Container>
      <div>
        <SearchBar onSubmit={changeQuery} />
      </div>
      <div>
        <ImageGallery images={images} />
      </div>
      {loading && <Loader />}
      <div>
        {images.length !== 0 && totalPages !== page && (
          <Button onClick={handleLoadMore} />
        )}
      </div>
    </Container>
  );
};
