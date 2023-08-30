// import { ModalImg } from 'components/Modal/Modal';
// import { Component } from 'react';

// import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   openModal = () => this.setState({ isModalOpen: true });
//   closeModal = () => this.setState({ isModalOpen: false });

//   render() {
//     const { imgUrl, imgLargeUrl } = this.props;

//     return (
//       <GalleryItem>
//         <GalleryItemImage onClick={this.openModal} src={imgUrl} alt={'опис'} />
//         <ModalImg
//           largeUrl={imgLargeUrl}
//           isModalOpen={this.state.isModalOpen}
//           onClose={this.closeModal}
//         />
//       </GalleryItem>
//     );
//   }
// }
