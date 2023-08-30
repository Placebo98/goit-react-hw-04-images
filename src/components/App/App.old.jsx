import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { fetchImages } from '../api';

import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Container } from './App.styled';

export class App extends Component {
  // state = {
  //   query: '',
  //   images: [],
  //   page: 1,
  //   loading: false,
  //   totalPages: 0,
  // };

  // changeQuery = newQuery => {
  //   if (newQuery === this.state.query) {
  //     return Notiflix.Notify.failure('Потрібні параметри пошуку');
  //   }

  //   this.setState({
  //     query: `${Date.now()}/${newQuery}`,
  //     images: [],
  //     page: 1,
  //   });
  // };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const updateQuery = this.state.query.slice(
        this.state.query.indexOf('/') + 1
      );

      this.setState({ loading: true });

      try {
        const images = await fetchImages(updateQuery, this.state.page);

        if (images.hits.length === 0) {
          Notiflix.Notify.failure('Таких фото не знайдено!');
          this.setState({
            loading: false,
          });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          loading: false,
          totalPages: Math.ceil(images.totalHits / 12),
        }));
      } catch (error) {
        console.log(error);
        this.setState({ loading: false });
      }
    }
  }

  // handleLoadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  //   this.setState({ loading: true });
  // };

  // render() {
  //   return (
  //     <Container>
  //       <div>
  //         <SearchBar onSubmit={this.changeQuery} />
  //       </div>
  //       <div>
  //         <ImageGallery images={this.state.images} />
  //       </div>
  //       {this.state.loading && <Loader />}
  //       <div>
  //         {this.state.images.length !== 0 &&
  //           this.state.totalPages !== this.state.page && (
  //             <Button onClick={this.handleLoadMore} />
  //           )}
  //       </div>
  //     </Container>
  //   );
  // }
}
