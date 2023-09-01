// import { Component } from 'react';
// import Notiflix from 'notiflix';
// import { fetchImages } from 'components/api';
// import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { SearchBar } from 'components/Searchbar/Searchbar';
// import { Loader } from 'components/Loader/Loader';
// import { Container } from './App.styled';
// import { Button } from 'components/Button/Button';

// export class App extends Component {
//   state = {
//     query: '',
//     images: [],
//     page: 1,
//     loading: false,
//     noResults: false,
//     totalPages: 0,
//   };

//   changeQuery = newQuery => {
//     if (newQuery === this.state.query) {
//       return Notiflix.Notify.failure('Потрібні параметри пошуку');
//     }
//     this.setState({
//       query: `${Date.now()}/${newQuery}`,
//       images: [],
//       page: 1,
//     });
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.query !== this.state.query ||
//       prevState.page !== this.state.page
//     ) {
//       const updateQuery = prevState.query.slice(
//         prevState.query.indexOf('/') + 1
//       );

//       this.setState({ loading: true });

//       try {
//         const images = await fetchImages(updateQuery, this.state.page);

//         if (images.hits.length === 0) {
//           Notiflix.Notify.failure('Таких фото не знайдено!');
//           this.setState({
//             loading: false,
//           });
//         }
//         this.setState(prevState => ({
//           images: [...prevState.images, ...images.hits],
//           loading: false,
//           totalPages: Math.ceil(images.totalHits / 12),
//         }));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }

//   handleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//     this.setState({ loading: true });
//   };

//   render() {
//     const { images, loading, page, totalPages } = this.state;
//     return (
//       <Container>
//         <div>
//           <SearchBar onSubmit={this.changeQuery} />
//         </div>
//         <div>
//           <ImageGallery images={images} />
//         </div>
//         {loading && <Loader />}
//         <div>
//           {images.length !== 0 && totalPages !== page && (
//             <Button onClick={this.handleLoadMore} />
//           )}
//         </div>
//       </Container>
//     );
//   }
// }
